import './sidebar.css'
import {FaFacebookSquare, FaTwitter, FaPinterest, FaInstagramSquare} from 'react-icons/fa'

const Sidebar = () => {
  return (
    <div className="sidebar">

      <div className="sidebarItem">
        
        <span className="sidebarTitle">ABOUT ME</span>

        <img className='sidebarImg' src="https://images.pexels.com/photos/3889699/pexels-photo-3889699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />

        <p>Along with the best nature sightseeing tours, India offers an opportunity to visitors to have a little adventure of their own. </p>
      </div>



          <div className="sidebarItem">
    
                <span className="sidebarTitle">CATEGORIES</span>

                <ul className="sidebarList">

                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">cinema</li>

                </ul>

           </div>
       
        <div className="sidebarItem">

             <span className="sidebarTitle">FOLLOW US</span>

             <div className="sidebarSocial">
                 
                 <FaFacebookSquare className='sidebarIcon'/>

                 <FaTwitter className='sidebarIcon'/>

                 <FaPinterest className='sidebarIcon'/>

                 <FaInstagramSquare className='sidebarIcon'/>


             </div>



        </div>







    </div>
  )
}

export default Sidebar