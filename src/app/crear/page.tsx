'use client'
import React, { useEffect, useState } from 'react';
import LayoutComponent from '@/app/components/Layout';
import { TextField, Button } from '@mui/material';
import { useRouter } from 'next/router';
import axios from 'axios';

function EditarPage() {

  const [data, setData] = useState({
    id: '',
    name: '',
    price: '',
    quantity: ''
  });


  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const generateId = () => {
    return Math.floor(Math.random() * 10000) + 1;;
  };

  const submit = (e: any) => {
    e.preventDefault();
    const productWithId = { ...data, id: generateId() };
    console.log(productWithId);

    axios.post(`http://localhost:8000/api/products/add`, productWithId, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        console.log('Product updated successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error updating product:', error);
      });
    // Do something with productWithId, like sending it to an API
  };

  return (
    <>
      <LayoutComponent />
      <div style={{ paddingTop: 50 }}>
        <h4>Actualizar producto</h4>
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
          Save
        </Button>
      </form>
    </>
  );
}

export default EditarPage;
