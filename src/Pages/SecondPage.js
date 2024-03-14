import React, { useEffect, useState } from 'react'; //there is useffect because what in the database is need to be shown in this page 
import NavSide2 from '../component/NavSide2';
import '../Style/Landingpage3.css'
import axios from "axios";
import SecondNav from '../component/SecondNav';
import EditStudent from './EditStudent';
import SliderPage from '../component/SliderPage';
import { Navbar, Container, Nav } from 'react-bootstrap'
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { Link, useParams } from 'react-router-dom';



function SecondPage() {
  
  const [users, setUsers]=useState([])
  const {id} = useParams()
  useEffect(() => {
    loadUsers();
  },[]);
  const loadUsers = async() => {
    const result= await axios.get("http://localhost:8080/users")
    setUsers(result.data)
  }
  const deleteUser = async(id)=> {
    await axios.delete(`http://localhost:8080/user/${id}`)
    loadUsers();
  }

  const GetStudentList = () => {
    return users.map((item, index)=> {
      return (
        <div className='wraper-data' key={index}>
            <div className='image-data'>
              <Col xs={8} md={10}>
                <Image src="https://d2jyir0m79gs60.cloudfront.net/news/images/successful-college-student-lg.png" rounded />
              </Col>
              <div className=' name-data'>{item.name}</div>
              <div className='data-text username-data'>specialist : {item.username}</div>
              <div className='data-text data-age'>age : {item.age}</div>
            </div>
        </div>
      )
    })
  }
  const GetStudentTable = () => {
    return users.map((item, index)=> {
      return (
        <tr key={index}>
          <td scope='row' key={index}>{index+1}</td>
          <td >{item.name}</td>
          <td >{item.email}</td>
          <td >{item.username}</td>
          <td >{item.age}</td>
          <td>
            <button className='btn btn-danger mx-2'
            onClick={()=> deleteUser(item.id)}
            >Delete
            </button>
            <Link className='btn btn-primary mx-2'
              to={`/edituser/${item.id}`}
              >Edit
            </Link>
          </td>
        </tr>
      )
    })
  }
  return (
    <div className='first-container'>
      <div className='navpage2'>
          <NavSide2></NavSide2>
          <SecondNav></SecondNav>
      </div>
      <div className='container-Bi'>
        <div className='wraper-Bi'>
          <div className='information-Bi'>WELCOME TO BIOINFORMATICS STUDENT 2021, PLEASE COMPLETE THIS PAGE BY PUTING YOUR DATA! </div>
        </div>
        <div className='wraper-Bi'>
          <img  className='image-Bi' src='https://mediaproxy.salon.com/width/1200/https://media.salon.com/2021/08/dna-0830211.jpg' />
        </div>          
      </div>
      <div className='container-data'>
        <GetStudentList/>
      </div>
      <div className='table-1'>
      <div className='header'>
        <table >  
          <thead>
            <tr>
              <th scope='col'>no</th>
              <th scope='col'>name</th>
              <th scope='col'>email</th>
              <th scope='col'>specialist</th>
              <th scope='col'>age</th>
              <th scope='col'>edit</th>
            </tr>
          </thead>
        </table>
      </div>
      <div className='content'>
        <table>
          <tbody>
            <GetStudentTable />
          </tbody>
        </table>
      </div>
      </div>
      <div>.</div>
    </div>
  )
}

export default SecondPage