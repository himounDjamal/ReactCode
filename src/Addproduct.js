import React from 'react'
import { Box, Container } from '@mui/material'
import AddProduct2 from './AddProduct2.js';
export default function Addproduct() {
  return( 
    <Container className='d-flex align-items-center justify-content-center'>
    <Box mt={20}  className='w-50 p-3  '>
    <AddProduct2/>   
    </Box>
  </Container>
  )
}
