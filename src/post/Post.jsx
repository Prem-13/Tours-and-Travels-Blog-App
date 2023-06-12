import  './post.css'

const Post = () => {
  return (
    <div className="post">
         <img className='postImg' src="https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />

         <div className="postInfo">
             <div className="postCats">
                 <span className='postCat'>Music</span>
                  <span className='postCat'>Life</span>
             </div>

             <span className="postTitle">
             Lorem ipsum is placeholder text.
             </span>
             <hr />
             <span className="postDate">1 hour ago</span>
         </div>
<p className='postDesc'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>




    </div>
  )
}

export default Post