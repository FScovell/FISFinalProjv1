import {useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@material-ui/core/Grid';

export default function WalkForm(){
    const [walkID, setWalkID] = useState(0)
    function uploader(e){
        setWalkID(e.target.value)
        console.log(e.target.value)
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
                        <TextField value={walkID} onChange={uploader}/>
                        <TextField value={walkID} onChange={uploader}/>
                        <TextField value={walkID} onChange={uploader}/>
                    </Box>
                </Grid>
            </Grid>
      );
}