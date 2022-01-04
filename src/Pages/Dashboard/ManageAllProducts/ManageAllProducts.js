
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useProducts from '../../../hooks/useProducts';

const ManageAllProducts = () => {

     
       const {products, setProducts} = useProducts()
  
       const handleDeleteProducts = id =>{
        const procced = window.confirm("Are You Sure to Delete This Blogs ?")
        
        if(procced)
        {
            fetch(`https://safe-fjord-60058.herokuapp.com/product/${id}`,{
                method: 'DELETE'
            }).then(res => res.json())
            .then(data => {
             
               if(data.deletedCount > 0) 
               {
                  alert('Product Deleted Succesfully')
                const remainigProduct = products.filter(product => product._id !== id)
                setProducts(remainigProduct)
                  
               } 
               
            })
        }
    } 
    return (
       <div style={{width:'90%', height:'100%'}} className='mx-auto' >
           <h2>Manage All Products</h2>
           <div>
           <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Product Catagory</TableCell>
            <TableCell align="right">Brand</TableCell>
            <TableCell align="right">Product Model</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row._id}
              </TableCell>
              <TableCell align="right">{row.catagory}</TableCell>
              <TableCell align="right">{row.brand}</TableCell>
              <TableCell align="right">{row.model} </TableCell>
              <TableCell align="right"><button onClick={()=>handleDeleteProducts(row._id)} ><i className="fas fa-trash-alt"></i></button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
       </div>
    );
};

export default ManageAllProducts;