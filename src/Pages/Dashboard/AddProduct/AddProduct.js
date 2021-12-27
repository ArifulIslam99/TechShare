import { MenuItem, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const AddProduct = () => {
    
    const [catagory, setCatagory] = useState('')
    const [image, setImage] = useState('')
    const [brand, setBrand] = useState('')
    const [model, setModel] = useState('')
    const [price, setPrice] = useState('')
    const [priority, setPriority] = useState('')
    const [spec, setSpec] = useState('') 



    const handleSubmit = e =>{
        e.preventDefault()
        const formdata = new FormData();
        formdata.append('catagory', catagory)
        formdata.append('image', image)
        formdata.append('brand', brand)
        formdata.append('model', model)
        formdata.append('price', price)
        formdata.append('priority', priority)
        formdata.append('spec', spec) 

        fetch('https://safe-fjord-60058.herokuapp.com/products', {
            method: 'POST',
            body: formdata
            })
            .then(response => response.json())
            .then(data => {
            
             alert('Product Uploaded Succesfully');
             document.getElementById("productForm").reset(); 
            })
            .catch(error => {
            console.error('Error:', error);
            });
        
    }




    const allCatagory = [
        {
            value: 'Laptop',
            label:'Laptop'
        },
        {
            value: 'SmartPhone',
            label:'SmartPhone'
        },
        {
            value: 'SmartWatch',
            label:'SmartWatch'
        },
    ] 
    const priorityList = [
        {
            value: 'Performance',
            label:'Performance'
        },
        {
            value: 'Camera',
            label:'Camera'
        },
        {
            value: 'Balanced',
            label:'Balanced'
        },
        {
            value: 'Budget',
            label:'Budget'
        },
    ] 
    const allBrands = [
        {
            value: 'Apple',
            label:'Apple'
        },
        {
            value: 'Samsung',
            label:'Samsung'
        },
        {
            value: 'Lenevo',
            label:'Lenevo'
        },
        {
            value: 'Asus',
            label:'Asus'
        },
        {
            value: 'Hp',
            label:'Hp'
        },
        {
            value: 'Oppo',
            label:'Oppo'
        },
        {
            value: 'Vivo',
            label:'Vivo'
        },
        {
            value: 'Xiaomi',
            label:'Xiaomi'
        },
        {
            value: 'Realme',
            label:'Realme'
        },
        {
            value: 'Fossil',
            label:'Fossil'
        },
        {
            value: 'OnePlus',
            label:'OnePlus'
        },
        {
            value: 'Walton',
            label:'Walton'
        },
    ] 

    return (
        <div className='w-75 mx-auto'>
            <h2>Add a New product</h2>


            <form id='productForm' style={{border:'2px solid gray', padding:'25px', borderRadius:'20px'}} onSubmit={handleSubmit} className='row mt-3' >
               <div className='col-lg-4'>
               <TextField
                sx={{m:1, width:'60%'}}
          id="outlined-select-currency"
          select
          label="Catagory"
          value={catagory}
          onChange={e=> setCatagory(e.target.value) }
          helperText="Please select Product Catagory"
        >
          {allCatagory.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField> <br />
                
        <TextField
                  sx={{m:1, width:'60%'}}
          id="outlined-select-currency"
          select
          label="Brands"
          value={brand}
          onChange={e=> setBrand(e.target.value) }
          helperText="Please select Brand"
        >
          {allBrands.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField> <br />

        <TextField
           sx={{m:1, width:'60%'}}
          id="outlined-required"
          label="Model Name"
          onChange={e => setModel(e.target.value)}
          
        /> <br />
        <TextField
           sx={{m:1, width:'60%'}}
          id="outlined-required"
          label="Price"
          onChange={e => setPrice(e.target.value)}
          
        />
                
               </div>  

                <div className='col-lg-4'>
                <TextField
                  sx={{m:1, width:'60%'}}
          id="outlined-select-currency"
          select
          label="Priority"
          value={priority}
          onChange={e=> setPriority(e.target.value) }
          
        >
          {priorityList.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField> <br />  

        <TextField
          sx={{m:1, width:'60%'}}
          id="outlined-multiline-static"
          label="Key Specifications"
          multiline
          rows={8}
          onChange={e => setSpec(e.target.value)}

          
        />
                
      
                </div> 
               <div className='col-lg-4 my-auto'>
                 
                 <input
                 accept='image/*'
                 type="file"
                 name="file" 
                 onChange={e => setImage(e.target.files[0])}
                 /><br />  <br />

                
               </div> 

               <Button className='bg-success w-25 mx-auto' type='submit'>Add Product</Button>
            </form>
        </div>
    );
};

export default AddProduct;