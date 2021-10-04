import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function MuiCard(props) {

  const showWorkoutVideos = () => {
    props.setDisplayedPage(props.linkTo)
  }

  return (
    <Card sx={{ maxWidth: 345, minHeight: '100%' }}>
      <CardActionArea onClick={() => showWorkoutVideos()}>
        <CardMedia
          component="img"
          height="140"
          image="http://www.dummyimage.com/500/500"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}