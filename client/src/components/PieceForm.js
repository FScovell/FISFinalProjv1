import {useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@material-ui/core/Grid';

export default function PieceForm({walk}){
    const [newObjID, setNewObjID] = useState(547802)
    const [museumID, setMuseumID] = useState(1)
    const [duplicateCheck, setDuplicateCheck] = useState()
    const [duplicate, setDuplicate] = useState()
    const [walkStopCreate, setWalkStopCreate] = useState()
    const [description, setDescription] = useState({description: `${walk.description}`});

    const [piecePost, setPiecePost] = useState({
        piece_api_id: newObjID,
        title: "title",
        primary_image: "primary image",
        artist_name: "artist name", 
        piece_date: "piece date",
        wiki_data: "wiki data"
    })
    
    const [createdObj, setCreatedObj] = useState(piecePost)
    function updater(e){
        setNewObjID(e.target.value)
    }
    const ADDPIECE = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${newObjID}`
    function uploader(){
        fetch(ADDPIECE)
        .then(r => r.json())
        // .then(data => console.log(data.artistWikidata_URL))
        .then(data => setPiecePost({
            piece_api_id: newObjID,
            title: data.title,
            primary_image: data.primaryImage,
            artist_name: data.artistDisplayName, 
            piece_date: data.objectBeginDate,
            museum_id: museumID,
            wiki_data: data.artistWikidata_URL
        }))
        setNewObjID(547802)
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
            // .then(data => console.log(data))
            .then(data => setCreatedObj(data))
        }
    },[piecePost])

    useEffect(() => {
        if(createdObj.title !== "title"){
            // console.log(piecePost.title)
            fetch("/allPieces")
            .then(r => r.json())
            .then(data => setDuplicateCheck(data))
        }
    },[createdObj])

    useEffect(() => {
        {duplicateCheck && duplicateCheck.map(item => {
            if(item.title === piecePost.title) {
                setDuplicate(item.id)
            }
        })}
    },[duplicateCheck])

    useEffect(() => {
        if(duplicate){
            setWalkStopCreate({
                walk_id: walk.id,
                piece_id: duplicate
            })
        }
    },[duplicate])

    useEffect(() => {
        if(walkStopCreate){
            const config = {
                headers: {"Content-Type": "application/json"},
                method: "POST",
                body: JSON.stringify(walkStopCreate)
            }
            fetch("/newWalkPiece", config)
            .then(r => r.json())
            .then(data => console.log(data))
            window.location.reload()
        }
    },[walkStopCreate])

    function editor(e){
        setDescription({description: `${e.target.value}`})
    }
    function descriptionSubmitter(){
        console.log(description)
        const config= {
            headers: {"Content-Type": "application/json"},
            method: "PATCH",
            body: JSON.stringify(description)
        }
        fetch(`http://127.0.0.1:3000/updateWalk?id=${walk.id}`, config)
        .then(r => r.json())
        .then(data => console.log(data))
    }
    return (
              <Grid 
              container spacing={3}
              alignItems="center"
              justifyContent="center"
              >
                <h3>Add a piece of art to your walk using its object ID, or edit your walk's description</h3>
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
                    <Box
                    sx={{
                    maxWidth: '100%'
                     }}
                    >
                        <button onClick={uploader}>Submit</button>
                    </Box>
                    <TextField align="center" placeholder="name" name="name" value={description.description} onChange={editor}/>
                    <button onClick={() => descriptionSubmitter()}>Submit Edit</button>
                </Grid>
            </Grid>
      );
}