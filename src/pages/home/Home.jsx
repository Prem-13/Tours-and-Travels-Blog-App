import './home.css'
import Header from '../../header/Header'
import Sidebar from '../../sidebar/Sidebar'
import Posts from '../../posts/Posts'

const Home = () => {
  return (
    <>
    <Header/>
    <div className="home">
         <Posts />
         <Sidebar />
      
        
       
    </div>
    </>
  )
}

export default Home