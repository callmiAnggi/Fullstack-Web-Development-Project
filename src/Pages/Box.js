import {motion} from 'framer-motion';
import '../Style/InputIntro.css';
import {Link, useNavigate} from 'react-router-dom';
import React, { Fragment, useEffect, useState } from 'react'; //no useffect because the data in database does not need to show up in this page
import axios from 'axios';

function Box() {

    let navigate = useNavigate()

    const [user, setUser] = useState({
        name:"",
        username:"",
        email:"",
        age:""
    });
    const {name, username, email, age}=user
    const onInputChange = (e) => {
        setUser({...user,[e.target.name]: e.target.value});
    };
    const onSubmit = async(e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/user", user)
        navigate("/data")
    };

  return (
    <div className='p'>
        <div className='wrapper'>
        <form action="" onSubmit={(e)=>onSubmit(e)}>
            <h1>Student Form</h1>
            <div className="input-box">
                <input 
                    type={"text"} 
                    placeholder="Name"
                    name='name' //old state
                    value={name} //new state
                    onChange={(e)=>onInputChange(e)} //changer state / setter
                    required
                />
                <i class='bx bxs-user'></i>
            </div>
            <div className="input-box">
                <input 
                    type="text" 
                    placeholder="Specialist" 
                    value={username} 
                    name='username' 
                    onChange={(e)=>onInputChange(e)} 
                    required
                />
                <i className='bx bxs-lock-alt' ></i>
            </div>
            <div className="input-box">
                <input 
                    type="text" 
                    placeholder="Email" 
                    value={email} 
                    name='email' 
                    onChange={(e)=>onInputChange(e)} 
                    required
                />
                <i class='bx bxs-lock-alt' ></i>
            </div>
            <div className="input-box">
                <input 
                    type="number" 
                    placeholder="Age" 
                    value={age} 
                    name='age' 
                    onChange={(e)=>onInputChange(e)} 
                    required
                />
                <i class='bx bxs-lock-alt' ></i>
            </div>
            <button type ="submit" className="btn">Submit</button>
            
            <Link to='/data'>
                <button className="btn1">Cancel</button>
            </Link>
        </form>
        </div>
    </div>
  )
}

export default Box