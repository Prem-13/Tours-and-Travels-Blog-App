import './singlepost.css'
import {AiOutlineDelete, AiFillEdit } from 'react-icons/ai'

const Singlepost = () => {
  return (
    <div className="singlePost">
           <div className="singlePostWrapper">

               <img src="https://images.pexels.com/photos/3408810/pexels-photo-3408810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='singlePostImg'/>

               <h1 className="singlePostTitle">Lorem ipsum is placeholder text

               <div className="singlePostEdit">

                    <AiFillEdit className='singlePostIcon'/>
                    <AiOutlineDelete className='singlePostIcon'/>       

                </div>
               </h1>

               <div className="singlePostInfo">

                    <span className='singlePostAuthor'>Author : <b>Prem</b></span>
                    <span className='singlePostDate'>1 hour ago</span>

               </div>

               <p className='singlePostDesc'>
                What I find remarkable is that this text has been the industry's standard dummy text ever since some printer in the 1500s took a galley of type and scrambled it to make a type specimen book; it has survived not only four centuries of letter-by-letter resetting but even the leap into electronic typesetting, essentially unchanged except for an occasional 'ing' or 'y' thrown in. It's ironic that when the then-understood Latin was scrambled, it became as incomprehensible as Greek; the phrase 'it's Greek to me' and 'greeking' have common semantic roots!”.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum fermentum vel tincidunt neque. Sed sed lacinia lectus. Duis sit amet sodales felis. Duis nunc eros, mattis at dui ac, convallis semper risus.
                </p>

           </div>
    </div>
  )
}

export default Singlepost