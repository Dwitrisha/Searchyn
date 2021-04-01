import React from 'react';
import './Home.css';
import {Avatar} from '@material-ui/core';
import Search from "../components/Search";

function Home() {

    return (
        <div className='home'>
         
            <div className="home_header">
                <div className="home_headerLeft">
                   
                </div>
                <div className="home_headerRight">
                  <p  style={{marginRight: "1rem"}}
                 > Get in touch: dwitrisha@gmail.com </p>
                    <Avatar
                        src="https://media-exp1.licdn.com/dms/image/C4E03AQFWrKOn3PSXQg/profile-displayphoto-shrink_400_400/0/1613409307512?e=1622678400&v=beta&t=dDzIMx6TcsaERyxevTTkF_VYumBLuWSW8QsjiPYVbZI"
                        style={{border: "1px solid green"}}
                    />
                </div>
            </div>
            <div className="home_body" >
                
                <img class="logo"
                    src="https://images.pexels.com/photos/7358438/pexels-photo-7358438.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                    alt=""/>
                <div className="home_inputContainer">
                  
                    <Search/>
                </div>
            </div>
        </div>
    );

}

export default Home;