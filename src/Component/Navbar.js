import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import '../CSS/Navbar.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import UserContext from '../Component/context/UserContext'

function Navbar() {
    const { setUser } = useContext(UserContext)
    const [search, setsearch] = useState(null);
    const onInputChange = (e) => {
        const inputValue = e.target.value;
        setsearch(inputValue);
        setUser(inputValue);
        console.log(search)
    };
    let appname = "kharidikaro";
    return (
        <div className='nav-container'>
            <h1 className='logo' >
                {appname.toUpperCase()}
            </h1>
            <div className='navbar'>
                <ul className='nav-list'>
                    <NavLink to='/welcome' style={{ textDecoration: 'none' }}>
                        <li className='nav-item' >
                            Home
                        </li>
                    </NavLink>
                    {/* <NavLink to="/home" style={{ textDecoration: "none" }}>
                        <li className="nav-item">Users</li>
                    </NavLink> */}
                    <NavLink to='/products' style={{ textDecoration: 'none' }}>
                        <li className='nav-item' >
                            Products
                        </li>
                    </NavLink>
                    <NavLink to='/addminlogin' style={{ textDecoration: 'none' }}>
                        <li className='nav-item' >
                            Add Products
                        </li>
                    </NavLink>
                    <NavLink to='/editadminlogin' style={{ textDecoration: 'none' }}>
                        <li className='nav-item' >
                            Eidt/Delete Products
                        </li>
                    </NavLink>
                    {/* <NavLink to='/login' style={{ textDecoration: 'none' }}>
                        <li className='nav-item' >
                            Login
                        </li>
                    </NavLink> */}
                    <li className='nav-item'>
                        <Box
                            component='form'
                            sx={{
                                '& > :not(style)': {
                                    width: '20ch',
                                    margin: "-5px",
                                },
                            }}
                            noValidate
                            autoComplete='off'
                        >
                            <TextField
                                id='standard-basic'
                                label='Search'
                                variant='outlined'
                                size='small'
                                style={{ fontFamily: "sans-serif" }}
                                onChange={onInputChange}
                            />
                        </Box>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default Navbar;
