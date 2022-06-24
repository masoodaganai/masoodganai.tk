import React,{useState} from 'react'
import { NavLink , useNavigate} from 'react-router-dom';
import register from'../images/register.webp';

const Signup = () => {
  const navigate=useNavigate();
  const[user,setUser]=useState({
    name:"", email:"", phone:"", password:"",cpassword:""
  });
  let name, value;
  const handleInputs =(e) =>{
    console.log(e);
    name =e.target.name;
    value =e.target.value;
    setUser({...user,[name]:value});
  }
  const PostData=async(e)=>{
    e.preventDefault();

    const{ name , email , phone , password , cpassword }=user;

    const res  = await fetch('/register', {
      method :'POST',
      headers: {
        "Content-Type":'application/json'
      },
      body:JSON.stringify({
        name , email , phone , password , cpassword
      })
    });
    const data = await res.json();
    if(data.status ===422 || !data){
      window.alert("Invalid Registeration");
      console.log("Invalid Registeration");
    } else{
      window.alert(" Registeration successfull");
      console.log(" Registeration successfull");
      navigate("/Login");
    }

  }
  return (
    <>
  
    <section className="vh-100">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-lg-12 col-xl-11">
          <div className="card text-black">
            <div className="card-body p-md-5">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
  
                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
  
                  <form method='POST' className="register-form">
  
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                      <label className="form-label" htmlFor="form3Example1c" >Your Name</label>
                        <input type="text-signup"name='name' id="name" className="form-control"value={user.name}
                        onChange={handleInputs}/>
                        
                      </div>
                    </div>
  
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                      <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                        <input type="email-signup" name='email' id="email" className="form-control" value={user.email}
                        onChange={handleInputs} />
                        

                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                      <label className="form-label" htmlFor="form3Example3c">Your Phone Number</label>
                        <input type="email-signup" name='phone' id="phone" className="form-control" value={user.phone}
                        onChange={handleInputs} />
                       

                      </div>
                    </div>
  
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                      <label className="form-label" htmlFor="form3Example4c">Password</label>
                        <input type="password" name='password' id="password" className="form-control" value={user.password}
                        onChange={handleInputs} />
                        
                      </div>
                    </div>
  
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                      <label className="form-label" htmlFor="form3Example4cd">Confirm password</label>
                        <input type="password" name='cpassword' id="cpassword" className="form-control"value={user.cpassword}
                        onChange={handleInputs} />
                       
                      </div>
                    </div>
  
                    <div className="form-check d-flex justify-content-center mb-5">
                      <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                      <label className="form-check-label" htmlFor="form2Example3">
                        I agree all statements in <a href="#!">Terms of service</a>
                      </label>
                    </div>
  
                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button type="button" name='Signup'id='Signup' className="btn btn-primary btn-lg" onClick={PostData}>Register</button>
                    </div>
  
                  </form>
  
                </div>
                <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                   <figure>
                   <img  className="register" src={register} alt="register" />
                    </figure> 
                  
                  <NavLink to="/Login" className="Signin-link">I Have Already Registered</NavLink>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
     </>
  )
}

export default Signup
