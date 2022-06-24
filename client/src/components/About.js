import React, { useEffect } from 'react';
import {useNavigate } from 'react-router-dom';
import background from'../images/background.jpg';
const About = () => {
	
const navigate= useNavigate();
	const callAboutPage =async()=>{
		try {
			const res = await fetch('/about',{
				method: "GET",
				headers:{
					Accept:'application/json',
					'content-Type':"application/json",
					"token":localStorage.getItem('token')
				},
				credentials:"include"
			});
			const data = await res.json();
			console.log(data);
		
			if (!res.status === 200){
				const error = new Error(res.error);
				throw error;
			}
		} catch(err){
			console.log('The erro is',err)
			console.log(err); 
            navigate('/Login');
		}
	}
         useEffect(()=>{
			callAboutPage();
			
		 }, []);	


  return (
    <div>
		<form method='GET'>
      <section className="about">
		<div className="main">
     <img  className="background" src={background} alt="background" />
			<div className="about-text">
				<h2>About Me</h2>
				<h5>Developer </h5>
				<p>I am a MERN Stack Developer</p>
				
			</div>
		</div>
	</section>
	</form>
	
    </div>
  )
}

export default About
