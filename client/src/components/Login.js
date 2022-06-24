import React,{useState} from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate=useNavigate();
  const [email,setEmail] =useState('');
  const [password, setPassword]=useState('');
  const loginUser= async (e)=>{
    e.preventDefault();

    const res  = await fetch('/signin', {
      method :'POST',
      headers: {
        "Content-Type":'application/json'
      },
      body:JSON.stringify({
         email , 
          password 
      })
    });
    const data = await res.json();
    if (res.status === 400|| !data){
      window.alert("Invalid Credentials");
    } else{
      // window.alert("Login Successfully")
      console.log(data)
      localStorage.setItem('token',data.token);
      navigate('/');
    }
  }
  return (
    <>
    <section className="vh-100">
  <div className="container py-5 h-100">
    <div className="row d-flex align-items-center justify-content-center h-100">
      <div className="col-md-8 col-lg-7 col-xl-6">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          className="img-fluid" alt="Phone image"/>
          <NavLink to="/Signup" className="Signup-link">Create an account</NavLink>
      </div>
      <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <form method='POST'>
         
          <div className="form-outline mb-4">
            <input type="login-email" id="form1Example13" className="form-control form-control-lg" value={email}
            onChange={(e) => setEmail(e.target.value)} />
            <label className="form-label" htmlFor="form1Example13">Email address</label>
          </div>

         
          <div className="form-outline mb-4">
            <input type="password" id="form1Example23" className="form-control form-control-lg" value={password}
            onChange={(e) => setPassword(e.target.value)} />
            <label className="form-label" htmlFor="form1Example23">Password</label>
          </div>

          <div className="d-flex justify-content-around align-items-center mb-4">
        
            <a href="#!">Forgot password?</a>
          </div>

        
          <button type="submit" className="btn btn-primary btn-lg btn-block" name="signin" id='signin'value="Log In" 
          onClick={loginUser} >Sign in</button>

        </form>
      </div>
    </div>
  </div>
</section>
    
    </>
  )
}

export default Login
