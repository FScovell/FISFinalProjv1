import {useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@material-ui/core/Grid';

export default function PieceForm(){
    const [pieceID, setPieceID] = useState(0)
    function uploader(e){
        setPieceID(e.target.value)
        console.log(e.target.value)
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
                        <TextField value={pieceID} onChange={uploader}/>
                    </Box>


                </Grid>

            </Grid>
      );
}