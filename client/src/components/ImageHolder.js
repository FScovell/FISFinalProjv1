import {useEffect, useState} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImageHolder(){
    const [apiData, setApiData] = useState("")
    const [wikiNonsense, setWikiNonsense] = useState()
    useEffect(() => {
        fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/466569')
        .then(r => r.json())
        .then(data => setApiData(data))
        // .then(data => console.log(data))
    },[])

    function testFetch(){
      if(apiData.artistWikidata_URL){
      const str = apiData.artistWikidata_URL
      const end = str.slice(30)
      // const start = str.slice(0, 26)
         const ENDRESULT = `https://www.wikidata.org/w/api.php?action=wbgetentities&format=json&ids=${end}&props=descriptions&languages=en&languagefallback=1&sitefilter=azwiki&formatversion=2`
      // const ENDRESULT = `https://www.wikidata.org/w/api.php?action=query&format=json&prop=entityterms&titles=${end}`
          // console.log(apiData)
          fetch(ENDRESULT)
          .then(r => r.json())
          .then(data => 
            // setWikiNonsense(Object.keys(data.query.pages))
            console.log(data)
            // setWikiNonsense(data)
          )
        }else{
          console.log("The artist is unknown!")
        }
    }
    useEffect(() => {
      if(wikiNonsense){     
        // console.log(apiData.artistWikidata_URL)
        const str = apiData.artistWikidata_URL
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
                alt="green iguana"
                height="445"
                image={apiData.primaryImage}
              />
              <CardContent>
                <Typography gutterBottom variant="h7" component="div">
                  {apiData.title}
                </Typography>
                <Typography noWrap variant="body2" color="text.secondary">
                    Artist: {apiData.artistDisplayName}
                </Typography>
                <Typography noWrap variant="body2" color="text.secondary">
                    Dated: {apiData.objectDate}
                </Typography>
                <Typography noWrap variant="body2" color="text.secondary">
                    Gallery number: {apiData.GalleryNumber}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Add Comment</Button>
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