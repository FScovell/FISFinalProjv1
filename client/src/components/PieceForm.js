import {useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@material-ui/core/Grid';

export default function PieceForm(){
    const [newObjID, setNewObjID] = useState(437133)
    const [museumID, setMuseumID] = useState(1)

    const [piecePost, setPiecePost] = useState({
        piece_api_id: newObjID,
        title: "title",
        primary_image: "primary image",
        artist_name: "artist name", 
        piece_date: "piece date",
        wiki_data: "wiki data"
    })
    const [createdObj, setCreatedObj] = useState(piecePost)
    const ADDPIECE = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${newObjID}`
    function uploader(){
        fetch(ADDPIECE)
        .then(r => r.json())
        // .then(data => console.log(data))
        .then(data => setPiecePost({
            piece_api_id: newObjID,
            title: data.title,
            primary_image: data.primaryImage,
            artist_name: data.artistDisplayName, 
            piece_date: data.objectBeginDate,
            wiki_data: data.objectWikidata_URL,
            museum_id: museumID
        }))
    }
    function updater(e){
        setNewObjID(e.target.value)
    }
    useEffect(() => {
        if(piecePost.title !== "title"){
            // console.log(piecePost)
            const config = {
                headers: {"Content-Type": "application/json"},
                method: "POST",
                body: JSON.stringify(piecePost)
            }
            fetch("/newPiece", config)
            .then(r => r.json())
            .then(data => setCreatedObj(data))
        }
    },[piecePost])

    useEffect(() => {
        if(createdObj.title !== "title"){
            console.log(piecePost.title)
            fetch("/allPieces")
            .then(r => r.json())
            .then(data => data.map((piece)=> console.log(piece.title)))
        }
    },[createdObj])

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
                        <TextField placeholder="Object ID" value={newObjID} onChange={updater}/>
                    </Box>
                    <button onClick={uploader}>Submit</button>
                </Grid>
            </Grid>
      );
}