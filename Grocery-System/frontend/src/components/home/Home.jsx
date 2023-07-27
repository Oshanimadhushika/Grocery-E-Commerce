import { style } from '@mui/system';
import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
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
 


  <div class="carousel-inner">
   
   

  </div>


{/* <Link to={"/order"}>
     <Button  variant="outlined" color="secondary" style={{marginTop:10}}>My-Orders</Button>
     </Link>

    <Card sx={{display:'flex', flexDirection:'row', gap:5, padding:8}}>
        {items.map(item => (
      <CardActionArea key={item._id}>
        <CardMedia
          component="img"
          height="140"
          image="https://i.postimg.cc/3xMYr8Mm/3524.jpg"
          alt="green iguana"
        />
        <CardContent style={{ border:1}}>
          <Typography gutterBottom variant="h5" component="div">
          {item.itemCode}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
          {item.itemName}
          </Typography>
          <select className="m-2 h-100 w-20 bg-success text-black rounded" style={{ select: "#FF0000" }} onClick={handleClick} onChange={handleQty}>
            
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>)
              })}
            </select>
          {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
          {/* <Typography gutterBottom variant="h5" component="div">
          Price: {item.itemPrice}/-
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
          Quantity: {item.qtyOnHand}
          </Typography>
          <hr></hr>
          
          <Button type="submit" variant="contained" onClick={handleAddToCart}>Add to cart</Button>
     
        </CardContent>
      </CardActionArea>
      ))}
    </Card> */} 





</div>




  );

  
}
export default Home;
