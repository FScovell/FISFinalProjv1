import {useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@material-ui/core/Grid';

export default function WalkForm({user}){
    const [walkName, setWalkName] = useState("Walk name")
    const [walkInfo, setWalkInfo] = useState({
        name: "",
        description: "",
        museum_id: 1,
        user_id: user.id
    })
    function uploader(e){
        e.preventDefault()
        setWalkInfo({...walkInfo, [e.target.name]: e.target.value})
    }

    function submitter(){
        const config = {
            headers: {"Content-Type": "application/json"},
            method: "POST",
            body: JSON.stringify(walkInfo)
        }

        fetch('/newWalk', config)
        .then (r => r.json())
        .then(data => console.log(data))
        window.location.reload()
    }

    return (
              <Grid 
              container spacing={3}
              alignItems="center"
              justifyContent="center"
              >
                <h3>Create a new walk, by including its name, a description of the walk and the museum you attended</h3>
                <Grid 
                container item xs={12} 
                spacing={3}
                //  direction="column"
                alignItems="center"
                justifyContent="center"
                >
                    <Box
                    sx={{
                    maxWidth: '100%'
                     }}
                    >
                        <TextField placeholder="name" name="name" value={walkInfo.name} onChange={uploader}/>
                        <TextField placeholder="description" name="description" value={walkInfo.description} onChange={uploader}/>
                        <TextField value={"The Met"
                            //walkInfo.museum_id
                        }/>

                    </Box>
                    <button onClick={() => submitter()} >Submit</button>
                </Grid>
            </Grid>
      );
}