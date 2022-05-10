import React from 'react'
import { useState, useEffect } from 'react';
import Images from '../assest/book.png'

export default function List() {
const [listdo, setlistdo] = useState('');
const [count, setcount] = useState(0)
const [alllist, setalllist] = useState([]);
const [editMode, seteditMode] = useState(false)
const [currentIndex, setcurrentIndex] = useState(0)
const [dt,setDt]=useState(new Date())
const [darkMode, setDarkMode] = useState(false);


useEffect(()=>{

  if (localStorage.list) {
    setalllist(JSON.parse(localStorage.list))
  }
  else
  {
    setalllist([])
  }
},[])

const task=()=>
{
  setalllist(()=>{
    let newAllList = [...alllist,{listdo}]
    localStorage.list = JSON.stringify(newAllList)
    setlistdo('');
    setcount(count+1)
    return newAllList
  })
 
} 

const deleteList = (delbtn) =>
{
  let delINdex=[...alllist]
  delINdex.splice(delbtn,1)
  setalllist(delINdex)
  localStorage.setItem('list',JSON.stringify(delINdex))
  setcount(count-1)
}

const editTodo= (index)=>{
  seteditMode(true)
  let newAllList = [...alllist]
  let currentList = newAllList[index]
  let {listdo}=currentList
  setlistdo(listdo)
  setcurrentIndex(index)
}

const updateTask=(index)=>
{
  let local=JSON.parse(localStorage.getItem('list'))
  seteditMode(false)
  let newAllList  = [...alllist]
  let changedDetails = {listdo}
  newAllList[currentIndex]=changedDetails
  setalllist(newAllList)
  localStorage.setItem('list',JSON.stringify(newAllList))
}






  return (
    <div className= {darkMode ? "dark-mode" : "light-mode"} >
      <div className="container">
        <div className="card shadow bg-transparent">
          <div className='d-flex bg-dark p-1'>
            <img src={Images}
             className='bg-light mx-4' 
             style={{height: '70px', borderRadius:'100px'}}
             />

            {editMode == false ?  
              <h3 className="card-header text-center text-light p-3 sticky-top" style={{marginLeft:'-1em'}}>
                Today Plan 
              </h3> 
              :
              <h3 className="card-header bg-success text-light p-3 text-center sticky-top"> 
              Edit List
              </h3>
            }
            <div >
              <i 
              style={{ color: darkMode ? "#269746":"white" ,fontSize:'1.5em' }} 
              onClick={()=> setDarkMode(!darkMode)} 
              className='fa fa-cog p-3 mt-2 fa-spin'>
              </i>
              </div>
          </div>
         
          <div className="card-body">
          {/* <h3 className='bg-danger py-2 w-75' style={{position:'fixed'}}>List <span className='bg-secondary p-3 text-light'>{count}</span> </h3> */}
          {/* <hr/> */}
            {alllist.map((val,index)=>
              (
                <div key={index} style={{backgroundColor: '#055160', color:'white'}}>
                  <div className="row mb-3 p-1">
                    <div className='text-light col-1'>{index+1}</div>
                     <div className="col-7 w-50">
                        {val.listdo}
                      </div>
                    {/* 
                    <div className='col-2'>
                      <span>{("0" + dt.getHours()).slice(-2) % 12}:{dt.getMinutes()} </span>   
                    </div>   */}

                    <div className="col-2">
                      <button className="btn btn-success text-light " onClick={()=>editTodo(index)}>
                        <i className="fa fa-pencil-square-o"></i> 
                      </button>
                    </div>

                    <div className="col-2">
                     <button className="btn btn-danger text-light " onClick={()=>deleteList(index)}>
                      <i className="fa fa-trash"></i> 
                    </button>
                    </div>
                  </div>
                </div>
              )
              )}
          </div>
          
          <div className="card-footer d-flex bg-dark text-light text-center p-2 fixed-bottom">
             <input type="text"  
              placeholder="Make Your Schedule" 
              className="form-control sticky-top" 
              onChange={(e)=>setlistdo(e.target.value)} 
              value={listdo} 
              />

              {editMode ==false?  
              <button className="btn btn-info" onClick={task}>
                <i className="fa fa-plus text-light"></i> 
              </button> :   
              <button className="btn btn-success" onClick={updateTask}>
                <i className="fa fa-plus"></i> 
              </button>}
          </div>
        </div>
      </div>
    </div>
  )
}
