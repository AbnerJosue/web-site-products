'use client'
import React, { useEffect, useState } from 'react'
import { Product } from '../interfaces/product.interface';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import { useRouter } from 'next/navigation'

function CardComponent() {

  const [products, setProducts] = useState<Product[]>([])
  const router = useRouter()

  useEffect(() => {
    axios.get('http://localhost:8000/api/products/all')
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);




  return (

    <Grid container spacing={1}>

      {
        products?.map((product) => {
          return (
            <Grid key={product.id} item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="products"
                  height="140"
                  width={50}
                  image="/img/coffee-mug.png"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                   # {product.id} 
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                  {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                   Precio - $ {product.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button onClick={() => router.push(`/editar/${ product.id }`)} size="small" variant='contained' color='info'>
                    <ModeEditIcon/>
                  </Button>
                  <Button size="small" variant='outlined' color='warning'>
                    <DeleteOutlineIcon/>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          )
        })
      }
    </Grid>
  )
}



export default CardComponent;