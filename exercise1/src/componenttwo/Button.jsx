import {Stack, IconButton,ButtonGroup, Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';


export const Buttton = () => {
  return (
    <Stack spacing={2} direction='row'>
        <Button variant='text' color="success">Text</Button>
        <Button variant='contained'  href="https://instagram.com">Container</Button>
        <Button variant='outlined' color="warning">Outlined</Button>
        <Stack spacing={4}>
        <Button variant="contained" color="primary">primary</Button>
        <Button variant="contained" color="success">Success</Button>
        <Button variant="contained" color="warning">Warning</Button>
        <Button variant="contained" color="error">Error</Button>
        <Button variant="contained" color="secondary">Secondary</Button>
    </Stack>
    <Stack>
        <Button direction='row' spacing={2} variant='contained' startIcon={<SendIcon/>}>Send</Button>
        <Button spacing={2} variant='contained'  small="small" endIcon={<SendIcon/>}>Send</Button>
        <Button>
        <IconButton arial-label='button'  color='success'>
                <SendIcon/>
        </IconButton>
        </Button>
        <ButtonGroup variant="contained" >
            <Button onClick={() => alert('Successfully cliked')}>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>

        </ButtonGroup>
    </Stack>
        
    </Stack>
    
  )
}
