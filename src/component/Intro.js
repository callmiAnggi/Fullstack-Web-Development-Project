import { Container, Row, Col, Button } from 'react-bootstrap';
import Popup from './Popup';
import Box from '../Pages/Box';
import React from 'react';
import {Link} from 'react-router-dom';

const Intro = () => {
    let a = 1;
    function buttonPop() {
        if (a==1) {
            document.getElementById('button1').style.display='flex';
            return a=0;
        } 
        else {
            document.getElementById('button1').style.display='none';
            return a=1;
        }
    }
    return(
        <div className='mainIntro'>
          <section className=' container1 text-white text-center d-flex justify-content-center align-items-center'>
                <div className='mainInt'>WELCOME TO I3L STUDENT 2021 </div>
          </section>
          <section className='haha'>
            <div className='container2'>
              <Link to ='/data'>
                <button class="myBreakfast"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpbhLfV238E1RutjYoBDEOZPda7jfsG8uRVtDPjuyOnj9NDag1atRazqX4Xzf8bITsQWo&usqp=CAU" to=""/>BIOINFORMATICS</button>
              </Link>
              <Link>
                    <button class="myLunch"><img src="https://www.indiafilings.com/learn/wp-content/uploads/2019/08/National-Biotechnology-Park-Scheme.jpg" alt=""/>BIOTECHNOLOGY</button>
              </Link>
              <Link>
                    <button class="myDinner"><img src="https://nu.edu.kz/media/event/14/5f18263740fc8.jpg" alt=""/>BIOMEDICINES</button>
              </Link>
              <Link>
                    <button class="myDessert"><img src="https://t3.ftcdn.net/jpg/02/54/41/18/360_F_254411803_nNWmkZKy6EENBdnHZi3B0x177YIQHDIu.jpg" alt=""/>PHARMACY</button>
              </Link>
              
              
              
            </div>
          </section>
        </div>
    )
}

export default Intro