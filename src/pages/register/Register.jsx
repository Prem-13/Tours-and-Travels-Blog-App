import './register.css'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="register">

      <span className="registerTitle">Register</span>

        <form  className="registerForm">

        <label >username</label>
          <input type="text" className='registerInput'  placeholder='Enter Your Username' />

          <label >Email</label>
          <input type="text" className='registerInput'  placeholder='Enter Your Email' />

          <label >Password</label>
          <input type="password" className='registerInput' placeholder='Enter Password' />
          
           <button className="registerButton">Register</button>

           <button className="registerLoginButton">
            
             <Link className='link' to='/login'>Login</Link> 
            
            </button>

        </form>
    </div>
  )
}

export default Register