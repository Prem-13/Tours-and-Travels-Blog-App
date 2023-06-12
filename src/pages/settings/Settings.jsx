import './settings.css'
import Sidebar from '../../sidebar/Sidebar'
import {AiOutlineUser} from 'react-icons/ai'

const Settings = () => {
  return (
<div className="settings">

    <div className="settingsWrapper">
      
      <div className="settingsTitle">

        <span className="settingsUpdateTitle">
          Update Your Account
        </span>

        <span className="settingsDeleteTitle">
          Delete Account
        </span>

      </div>
      
       <form className="settingsForm">

        <label >Profile Picture</label>

        <div className="settingsPP">

            <img src="https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />

               <label htmlFor="fileInput">

                      <AiOutlineUser className='settingsPPIcon'/>

               </label>
               <input type="file" id='fileInput' style={{display:'none'}}/>
        </div>

            <label >Username</label>
            <input type="text" placeholder='Prem' />

            <label >Email</label>
            <input type="email" placeholder='premkumarsince1996@gmail.com' />

            <label >password</label>
            <input type="password" />

            <button className="settingsSubmit">Udpate</button>

       </form>
 

    </div>

    <Sidebar />
</div>
  )
}

export default Settings