import { Link } from 'react-router-dom'
import './login.css'

const Login = () => {
  return (
    <div className="login">

      <span className="loginTitle">Login</span>

        <form  className="loginForm">

          <label >Email</label>
          <input type="text" className='loginInput'  placeholder='Enter Your Email' />

          <label >Password</label>
          <input type="password" className='loginInput' placeholder='Enter Password' />
          
           <button className="loginButton">Login</button>

           <button className="registerLoginButton">

            <Link className='link' to='/register'>Register</Link> 

            </button>

        </form>
    </div>
  )
}

export default Login