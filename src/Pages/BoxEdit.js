import {motion} from 'framer-motion';
import '../Style/InputIntro.css';
import {Link, useNavigate, useParams} from 'react-router-dom';
import React, { Fragment, useEffect, useState } from 'react'; //no useffect because the data in database does not need to show up in this page
import axios from 'axios';

function BoxEdit() {

    let navigate = useNavigate()

    const {id}=useParams()
    
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
    useEffect (()=> {
        loadUser()
    },[])

    const onSubmit = async(e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/user/${id}`, user)
        navigate("/data")
    };
    const loadUser = async ()=>{
        const result=await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data)
    }

  return (
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
  )
}

export default BoxEdit;