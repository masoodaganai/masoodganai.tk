import React, { useEffect }from 'react';
import {useNavigate } from 'react-router-dom';
const Contact = () => {
  const myStyle={
    backgroundImage: 
"url('https://blog.hubspot.com/hubfs/parts-url.jpg')",
    height:'100vh',
    marginTop:'0px',
    fontSize:'20px ',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};
  const navigate= useNavigate();
	const callContactPage =async()=>{
		try {
			const res = await fetch('/Contact',{
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
			callContactPage();
			
		 }, []);
  return (
<div className='Contact'>
  <div style={myStyle}>
    <div className='contact_info'>
      <div className='conatiner-fluid'>
        <div className='row'>
          <div className='col-lg-10 offset-lg-1 d-flex justify-content-between'>
            <div className='contact_info_item'>
              <div className='contact_info_content'>
                <div className='contact_info_title'style={{color:'Black',fontStyle:"bold"}}>🅿🅷🅾🅽🅴</div>
                <div className='contact_info_text'style={{color:'#FFFFFF',fontStyle:"bold"}}>
                +1 519-317-6789
                </div>
              </div>
            </div>
            <div className='contact_info_item'>
              <div className='contact_info_content'>
                <div className='contact_info_title'style={{color:'#ADD8E6',fontStyle:"bold"}}>𝐄𝐦𝐚𝐢𝐥</div>
                <div className='contact_info_text'style={{color:'#00FF00',fontStyle:"bold"}}>
                  developermasoodganai@gmail.com
                </div>
              </div>
            </div>
            <div className='contact_info_item'>
              <div className='contact_info_content'>
                <div className='contact_info_title'style={{color:'#FF00FF',fontStyle:"bold"}}>𝐀𝐝𝐝𝐫𝐞𝐬𝐬</div>
                <div className='contact_info_text'style={{color:'yellow',fontStyle:"bold"}}>
                2837 Dundas St
                     Ontario
                      
                           Canada ♥
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    <div className='contact_form'>
      <div className='container h-100'>
        <div className='row'>
          <div className='col-lg-10 offset-lg-1'>
            <div className='contact_form_container py-5 '>
              <div className='contact_form_title'>
               <h2 >🅶🅴🆃 🅸🅽 🆃🅾🆄🅲🅷</h2> 
              </div>
              <form id='contact_form'>
                <div className='contact_form_name  align-items-center d-flex justify-content-between '>
                  <input type="text" id="contact-form-name"
                  className='contact_form_name input-field'
                  placeholder='Your Name' required={true}/>

                  <input type="email" id="contact_form_name"
                  className='contact_form_name input-field'
                  placeholder='Your Email' required={true}/>

                  <input type="text" id="contact_form_name "
                  className='contact_form_name input-field'
                  placeholder='Your Mobile  Number' required={true}/>
                </div>
                <div className='contact_form_text mt-4'>
                  <textarea type='text' className='text_field contact_form_message 'placeholder='Message' id='' cols='100'rows='10'></textarea>
                </div>
                <div className='contact_form_button'>
                <button type="submit" className="btn btn-primary btn-lg btn-block">Submit</button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Contact;

    
