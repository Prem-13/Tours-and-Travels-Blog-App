import './write.css'
import {IoAddSharp} from 'react-icons/io5'

const Write = () => {
  return (
    <div className="write">
           <img src="https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className='writeImg' alt="" />

       <form className="writeForm">
           <div className="writeFormGroup">
               <label htmlFor="fileInput">
                  <IoAddSharp className='writeIcon'/>
               </label>
               <input type="file" id='fileInput' style={{display:'none'}}/>
               <input type="text" placeholder='Title' className='writeInput' autoFocus={true} />
           </div>

           <div className="writeFormGroup">
               <textarea placeholder='Tell Your Story...' typeof='text' className='writeInput writeText'></textarea>
           </div>

           <button className="writeSubmit">Publish</button>

       </form>
    </div>
  )
}

export default Write