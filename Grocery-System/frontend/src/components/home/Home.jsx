import { style } from '@mui/system';
import * as React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { grid } from '@mui/system';
import {Box} from '@mui/material'




function Home() {
  const [items, setItems] = useState([]);
    const [qty, setQty] = useState(1)
    
    const handleClick = () => {
      // if (!localStorage.getItem("token")) {
      //   // navigate("/login")
      // }
    }
    const handleQty = (e) => {
      setQty(e.target.value);
    }

    const handleAddToCart = (e) => {
   
    }

      useEffect(() => {
        // Fetch data from the backend API
        axios.get('http://localhost:3500/api/v1/getItem')
          .then(response => {
            setItems(response.data);
           
            // window.location.reload()
          })
          .catch(error => {
            console.error(error);
          });
      }, []);

  return (
    <div id="carouselBasicExample" class="carousel slide carousel-fade" data-mdb-ride="carousel">

<Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
  <div style={{marginTop:150}}>
      <h1 style={{fontSize:50}}>Meilee Online Mart</h1>
      <h2  style={{fontSize:20}}>Enriching your homes with the best essentials.</h2>

  </div>


  <div class="carousel-item active carousel-inner">
      <img src="https://media.istockphoto.com/id/1322899955/photo/portrait-of-joyful-african-american-family-with-cute-daughter-posing-and-smiling-at-camera-in.jpg?s=612x612&w=0&k=20&c=Ekev_nb5qDwphOCHPGoA8kw6LdW3V6IzGbwJmrifn_Q=" style={{height:'88vh' ,marginTop:6}}  class="d-block w-60" />
  </div>
</Box>
 
</div>

  );

  
}
export default Home;
