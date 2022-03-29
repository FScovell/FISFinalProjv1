import {useEffect, useState} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImageHolder({walk, walkPiece}){
    const [apiData, setApiData] = useState(walkPiece.walkPiece)
    const [wikiNonsense, setWikiNonsense] = useState()
    const [toBeDeleted, setToBeDeleted] = useState(0)
    // const [walkId, setWalkId] = useState(1)
    // const SPECIFICWALK = `http://127.0.0.1:3000/specificWalk?id=${walkId}`
    // useEffect(() => {
    //   // 16517 is an example of the bug
    //   // const config= {
    //   //   headers: {"Content-Type": "application/json", "Access-Control-Allow-Origin": "*"},
    //   //   method: "GET",
    //   // }
    //     fetch(
    //       SPECIFICWALK, 
    //       // config
    //       )
    //     .then(r => r.json())
    //     .then(data => setApiData(data[0]))
    //     // .then(data => console.log(data[0]))
    // },[])
    function remover(){
      // console.log(walkPiece.walk.id)
      // console.log(walkPiece.walkPiece.id)

      fetch("/allWalkPieces")
      .then(r => r.json())
      .then(data => data.map(walk => {
        if(walk.piece.id === walkPiece.walkPiece.id && walk.walk.id === walkPiece.walk.id){
          setToBeDeleted(walk.id)
        }
      }))


    }
    useEffect(() => {
      if(toBeDeleted !== 0){
        // console.log(toBeDeleted)
        fetch(`http://127.0.0.1:3000/deleteWalkPiece?id=${toBeDeleted}`, {method: "DELETE"})
        .then(r => r.json())
        .then(data => console.log(data))
        window.location.reload()
      }
    }, [toBeDeleted])

    function testFetch(){
      if(apiData.wiki_data){
      const str = apiData.wiki_data
      const end = str.slice(30)
      // const start = str.slice(0, 26)
         const ENDRESULT = `https://www.wikidata.org/w/api.php?action=wbgetentities&format=json&ids=${end}&props=descriptions&languages=en&languagefallback=1&sitefilter=azwiki&formatversion=2`
      // const ENDRESULT = `https://www.wikidata.org/w/api.php?action=query&format=json&prop=entityterms&titles=${end}`
          // console.log(apiData)
          fetch(ENDRESULT)
          .then(r => r.json())
          .then(data => 
            // setWikiNonsense(Object.keys(data.query.pages))
            // console.log(data)
            setWikiNonsense(data)
          )
        }else{
          console.log("The artist is unknown!")
          // console.log(apiData)
        }
    }
    useEffect(() => {
      if(wikiNonsense){
        // console.log(apiData.artistWikidata_URL)
        const str = apiData.wiki_data
        const end = str.slice(30)
        console.log(wikiNonsense.entities[end].descriptions.en.value)
        // const ENDRESULT = `https://www.wikidata.org/w/api.php?action=query&format=json&prop=entityterms&titles=${end}`
        // const NUMBER = wikiNonsense[0]
        // fetch(ENDRESULT)
        // .then(r => r.json())
        // .then(data => console.log(data.query.pages[NUMBER].entityterms.description[0]))

      }
    }, [wikiNonsense])
  
    if(apiData){
      // console.log(apiData)
        return (
            <Card sx={{ maxWidth: 445 }}>
              <CardMedia
                component="img"
                alt="This is most likely not in the public domain!"
                height="445"
                image={apiData.primary_image}
              />
              <CardContent>
                <Typography gutterBottom variant="h7" component="div">
                  {apiData.title}
                </Typography>
                <Typography noWrap variant="body2" color="text.secondary">
                    Artist: {apiData.artist_name}
                </Typography>
                <Typography noWrap variant="body2" color="text.secondary">
                    Dated: {apiData.piece_date ? apiData.piece_date : "unknown"}
                </Typography>
                {/* <Typography noWrap variant="body2" color="text.secondary">
                    Gallery number: {apiData.GalleryNumber ? apiData.GalleryNumber : "unknown"}
                </Typography> */}
              </CardContent>
              <CardActions>
                <Button onClick={remover} size="small">Remove From Walk</Button>
                <Button onClick={testFetch} size="small">
                    About the artist
                    {/* {apiData.artistWikidata_URL} */}
                </Button>
              </CardActions>
            </Card>
          );
    }else{
        return(
            <>
            </>
        )
    }
}