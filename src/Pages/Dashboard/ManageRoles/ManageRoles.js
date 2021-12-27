import { TextField , Button} from '@mui/material';
import React, {useState} from 'react';
import MenuItem from '@mui/material/MenuItem';

const ManageRoles = () => {

    const [email, setEmail] = useState('');
    const [roles, setRoles] = useState('');

    const userRoles = [
        {
            value: 'admin',
            label:'admin'
        },
        {
            value: 'editor',
            label:'editor'
        },
        {
            value: 'user',
            label:'user'
        },
    ] 

    const handleRoles = e =>{
        e.preventDefault()
        setRoles(e.target.value)
    } 

     const updateAdministration = event => {
            event.preventDefault() 
            const user = {email, roles}

            fetch('https://safe-fjord-60058.herokuapp.com/users/roles',{
                method: 'PUT',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => {
               
                if(data.modifiedCount > 0)
                {
                    alert('Added Sucessfully')
                    document.getElementById('admin-form').reset()
                }
            } )
     }

    return (
        <div style={{ height:'50vh'}}>
            <h2>Update Administration</h2>

            <div>
                <form id='admin-form' onSubmit={updateAdministration}>
                <TextField
                sx={{m:4}}
                 id="filled-basic"
                  label=" User Email" 
                  onBlur={e => setEmail(e.target.value)}
                  variant="filled" />
                  
                  


                  <TextField
                  sx={{m:4}}
          id="outlined-select-currency"
          select
          label="Roles"
          value={roles}
          onChange={handleRoles}
          helperText="Please select User Roles"
        >
          {userRoles.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField> <br /> <br />
                <Button variant="contained" type="submit" >ADD</Button>
           
                </form>
            </div>
        </div>
    );
};

export default ManageRoles;