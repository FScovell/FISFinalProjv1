import {useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@material-ui/core/Grid';

export default function PieceForm(){
    const [newObjID, setNewObjID] = useState(437133)
    const ADDPIECE = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${newObjID}`
    function uploader(e){
        setNewObjID(e.target.value)
        fetch(ADDPIECE)
        .then(r => r.json())
        .then(data => console.log(data))
    }
    return (
              <Grid 
              container spacing={3}
              alignItems="center"
              justifyContent="center"
              >
                <h1>Add a piece of art to your walk using its object ID</h1>
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
                        <TextField value={newObjID} onChange={uploader}/>
                    </Box>


                </Grid>

            </Grid>
      );
}