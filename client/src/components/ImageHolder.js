import {useEffect, useState} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImageHolder(){
    const [apiData, setApiData] = useState("")
    useEffect(() => {
        fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/197095')
        .then(r => r.json())
        .then(data => setApiData(data))
        // .then(data => console.log(data))
    },[])

    if(apiData){
        console.log(apiData)
        return (
            <Card sx={{ maxWidth: 445 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
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
                <Button size="small">
                    Learn More 
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