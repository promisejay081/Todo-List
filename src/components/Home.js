import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import Images from '../assest/book.png'

export default function Home() {
  return (
    <>
    <header>  
        <div className="py-5 change">   
        <div className="navbar-brand container-fluid">
            <img src={Images} alt="" className='bg-light mx-4'  style={{height: '70px', top:'-2.3em', position:'relative', borderRadius:'100px'}}/>
          </div>

               <div className="content my-5">
                  <h2 className='text-center text-light'>MAKE YOUR SCHEDULE
                  <br/>BE EASY FOR YOU.</h2>
                  <p className='text-center text-light p-3 w-50' style={{display:'grid', margin:'auto',placeItems:'center'}}>

                    Make your day easy for you and stress free. Schedule list help to write down all your plans for the day.
                    You can Edit your schedule anytime you change your mind and also you can  Delete task whenever the tas is complete.
                  </p>
                  <Link to="/list" style={{textDecoration:'none '}}>
                    <div className='pulse'>
                      <i className="fa fa-plus"></i> 
                      </div> 
                      </Link>
               </div>
        </div>
    </header> 
       
    </>
  )
}
