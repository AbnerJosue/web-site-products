'use client'
import React, { useEffect, useState } from 'react';
import LayoutComponent from '@/app/components/Layout';
import { TextField, Button } from '@mui/material';
import { useRouter } from 'next/router';
import axios from 'axios';

function EditarPage({params}:any) {

  const [ products, setProducts ] = useState();
  const [data, setData] = useState({
    name: '',
    price: '',
    quantity: ''
  });

  useEffect(() => {
    if( !params.slug ) return; 
    
    
    axios.get(`http://localhost:8000/api/products/${params.slug}`)
    .then((response) => {
      console.log(response.data);
      setProducts(response.data);
    })
    .catch((error) => {
      console.error('Error fetching products:', error);
    });

  },[params])


  useEffect(() => {

    if(!products) return 

    setData(products)

  }, [products])

 

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const generateId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  const submit = (e:any) => {
    e.preventDefault();
    
    axios.put(`http://localhost:8000/api/products/remove/${params.slug}`, data,{
      withCredentials: false 
   })
    .then((response) => {
      console.log('Product updated successfully:', response.data);
    })
    .catch((error) => {
      console.error('Error updating product:', error);
    });
  };
  return (
    <>
      <LayoutComponent />
      <div style={{ paddingTop: 50}}>
        <h4> Eliminar producto </h4>
      </div>
      <form onSubmit={submit}>
        <TextField
          name="name"
          label="Name"
          value={data.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="price"
          label="Price"
          value={data.price}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="quantity"
          label="Quantity"
          value={data.quantity}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          ELIMINAR
        </Button>
      </form>
    </>
  );
}

export default EditarPage;
