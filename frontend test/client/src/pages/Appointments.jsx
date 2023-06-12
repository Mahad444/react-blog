import React, { useEffect, useState } from "react";
import Empty from "../components/Empty";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import fetchData from "../helper/apiCall";
import { setLoading } from "../redux/reducers/rootSlice";
import Loading from "../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import axios from "axios";
import toast from "react-hot-toast";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.root);
  const { userId } = jwt_decode(localStorage.getItem("token"));

  const getAllAppoint = async (e) => {
    try {
      const temp = await fetchData(
        `/appointment/getallappointments?search=${userId}`
      );
      setAppointments(temp);
    } catch (error) {}
  };

  useEffect(() => {
    dispatch(setLoading(true));
    getAllAppoint();
    dispatch(setLoading(false));
  }, []);

  // COMPLETE MESSAGE WHEN CLICKED AND A BUTTON


  const complete = async (ele) => {
    try {
      const { data } = await toast.promise(
        axios.put(
          "/appointment/completed",
          {
            appointid: ele._id,
            doctorId: ele.doctorId._id,
            doctorname: `${ele.userId.firstname} ${ele.userId.lastname}`,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        ),
        {
          success: "Appointment booked successfully",
          error: "Doctor Unavalable at that time",
          loading: "Booking appointment...",
        }   
      );
      
    
      getAllAppoint();

      console.log("data", " >> ", data);
    } catch (error) {
      return error;
    }
  };
//  REJECT MESSAGE WHEN CLICKED AND A BUTTON
  const canceled = async (ele) => {
    try {
      const { data } = await toast.promise(
        axios.put(
          "/appointment/cancelled",
          {
            appointid: ele._id,
            doctorId: ele.doctorId._id,
            doctorname: `${ele.userId.firstname} ${ele.userId.lastname}`,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        ),
        {
          success: "Appointment Cancelled successfully",
          error: "Failed to Cancel the Appointment",
          loading: "Booking appointment...",
        }
      );
      getAllAppoint();
      console.log("data", " >> ", data);
    } catch (error) {
      return error;
    }
  };

  return (
    <>
      <Navbar />
      {loading ? (
        <Loading />
      ) : (
        <section className="container notif-section">
          <h2 className="page-heading">Your Appointments</h2>

          {appointments.length > 0 ? (
            <div className="appointments">
              <table>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Doctor</th>
                    <th>Patient</th>
                    <th>Appointment Date</th>
                    <th>Appointment Time</th>
                    <th>Booking Date</th>
                    <th>Booking Time</th>
                    <th>Status</th>
                    {userId === appointments[0].doctorId._id ? (
                      <th>Action</th>
                    ) : (
                      <></>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {appointments?.map((ele, i) => {
                    return (
                      <tr key={ele._id}>
                        <td>{i + 1}</td>
                        <td>
                          {ele.doctorId.firstname + " " + ele.doctorId.lastname}
                        </td>
                        <td>
                          {ele.userId.firstname + " " + ele.userId.lastname}
                        </td>
                        <td>{ele.date}</td>
                        <td>{ele.time}</td>
                        <td>{ele.createdAt.split("T")[0]}</td>
                        <td>{ele.updatedAt.split("T")[1].split(".")[0]}</td>
                        <td>{ele.status}</td>
                        {userId === ele.doctorId._id ? (
                          <td>
                            {/* ACCEPT BUTTON */}
                            <button
                              className={`btn user-btn accept-btn ${
                                ele.status === "Completed" ? "disable-btn" : ""
                              }`}
                              disabled={ele.status === "Completed"}
                              onClick={() => complete(ele)}
                            >
                              Complete
                            </button>
                            {/* REJECT BUTTON */}
                            <button
              className={`btn user-btn ${
                ele.status === "Completed" ? "disable-btn" : ""
              }`}
              disabled={ele.status === "Rejected"} 
              onClick={() => canceled(ele)} 
              // Added the onClick event for rejection
            >
              Reject
            </button>
                            
                          </td>
                        ) : (
                          <></>
                        )}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <Empty />
          )}
        </section>
      )}
      <Footer />
    </>
  );
};
export default Appointments;
