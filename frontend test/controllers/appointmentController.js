const Appointment = require("../models/appointmentModel");
const Notification = require("../models/notificationModel");
const User = require("../models/userModel");

const getallappointments = async (req, res) => {
  try {
    const keyword = req.query.search
      ? {
          $or: [{ userId: req.query.search }, { doctorId: req.query.search }],
        }
      : {};

    const appointments = await Appointment.find(keyword)
      .populate("doctorId")
      .populate("userId");
    return res.send(appointments);
  } catch (error) {
    res.status(500).send("Unable to get apponintments");
  }
};

// const bookappointment = async (req, res) => {
//   try {
//     const appointment = await Appointment({
//       date: req.body.date,
//       time: req.body.time,
//       doctorId: req.body.doctorId,
//       userId: req.locals,
//     });

//     const usernotification = Notification({
//       userId: req.locals,
//       content: `You booked an appointment with Dr. ${req.body.doctorname} for ${req.body.date} ${req.body.time}`,
//     });

//     await usernotification.save();

//     const user = await User.findById(req.locals);

//     const doctornotification = Notification({
//       userId: req.body.doctorId,
//       content: `You have an appointment with ${user.firstname} ${user.lastname} on ${req.body.date} at ${req.body.time}`,
//     });

//     await doctornotification.save();

//     const result = await appointment.save();
//     return res.status(201).send(result);
//   } catch (error) {
//     console.log("error", error);
//     res.status(500).send("Unable to book appointment");
//   }
// };
const bookappointment = async (req, res) => {
  try {
    const { date, time, doctorId } = req.body;

    // Check if the doctor already has an appointment at the specified time
    const existingAppointment = await Appointment.findOne({
      doctorId,
      date,
      time,
    });

    if (existingAppointment) {
      return res.status(400).send("Doctor is not available at the specified time.");
    }

    const appointment = await Appointment({
      date,
      time,
      doctorId,
      userId: req.locals,
    });

    // Rest of the code for notifications and saving appointment...

    const result = await appointment.save();
    return res.status(201).send(result);
  } catch (error) {
    console.log("error", error);
    res.status(500).send("Unable to book appointment");
  }
};

const completed = async (req, res) => {
  try {
    const alreadyFound = await Appointment.findOneAndUpdate(
      { _id: req.body.appointid },
      { status: "Completed" }
    );

    const usernotification = Notification({
      userId: req.locals,
      content: `Your appointment with ${req.body.doctorname} has been completed`,
    });

    await usernotification.save();

    const user = await User.findById(req.locals);

    const doctornotification = Notification({
      userId: req.body.doctorId,
      content: `Your appointment with ${user.firstname} ${user.lastname} has been completed`,
    });

    await doctornotification.save();

    return res.status(201).send("Appointment completed");
  } catch (error) {
    res.status(500).send("Unable to complete appointment");
  }
};

// CANCEL THE APPOINTMENT AND SEND NOTIFICATION TO THE DOCTOR AND USER
const canceled = async (req, res) => {
  try { 
    const alreadyFound = await Appointment.findOneAndUpdate(
      { _id: req.body.appointid },
      { status: "Cancelled" }
    )
    const usernotification = Notification({
      userId: req.locals,
      content: `Your appointment with ${req.body.doctorname} has been cancelled`,
    });

    await usernotification.save();
  
    res.status(201).send("Appointment cancelled");
  } catch (error) {
    res.status(500).send("Unable to cancel appointment");
  }
};


module.exports = {
  getallappointments,
  bookappointment,
  completed,
  canceled,
};
