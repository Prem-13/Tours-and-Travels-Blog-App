import './topbar.css';
import { Link } from 'react-router-dom';
import {FaFacebookSquare, FaTwitter, FaPinterest, FaInstagramSquare, FaSearch} from 'react-icons/fa'

const Topbar = () => {
   
   const user = true;

  return (
    <div className="top">
        <div className='topLeft'>

          <div className="topIcon">

              <FaFacebookSquare  className='topbarIcon'/>
              <FaTwitter className='topbarIcon'/>
              <FaPinterest className='topbarIcon'/>
              <FaInstagramSquare className='topbarIcon'/>

          </div>
            

        </div>

        <div className='topCenter'>
            <ul className="topList">
                <li className='topListItem'>
                      <Link to="/" className='link'>HOME</Link>
                </li>

                <li className='topListItem'>
                     <Link to="/" className='link'>ABOUT</Link>
                </li>

                <li className='topListItem'>
                 
                <Link to="/" className='link'>CONTACT</Link> 
                  
                  </li>

                <li className='topListItem'>

                   <Link to="/write" className='link'>WRITE</Link> 

                  </li>

                  
                <li className='topListItem'>
                    
                     {user && 'LOGOUT'}
                

                  </li>



            </ul>


        </div>

        <div className='topRight'>

            {
              user ? ( <>
                           <Link to='/settings'>
                            <img className='topImg' src="https://images.pexels.com/photos/2267339/pexels-photo-2267339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="PP" />
                           </Link>
                      </>
              )
              : (
                <ul className='topList'>

                  <li className='topListItem'>

                        <Link className='link' to="/login">LOGIN</Link>

                  </li>
                     
                     <li className='topListItem'>

                     <Link className='link' to="/register">REGISTER</Link>
                     
                     </li>

                     
                </ul>
                       

              )
            }

              


              <FaSearch className="topSearchIcon"/>


            </div>
              


        </div>

  )
}

export default Topbar