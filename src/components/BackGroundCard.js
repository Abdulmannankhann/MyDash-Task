import React from 'react'
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import BackgroundImage from './bck.jpg'

const BackGroundCard = () => {
  return (
	<Card sx={{width:'47%',  height: 1200 }}>
	<CardMedia
	  component="img"
	  image={BackgroundImage}
	  alt="background Image"
	  sx={{ width: 1 }}
	/>
  </Card>
  )
}

export default BackGroundCard