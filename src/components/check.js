import { useState } from "react";
import ima from './assest/10.jpg';
import Images from './assest/3.png';
import { Routes, Route, Navigate } from "react-router-dom";






const App = () =>{
const [listdo, setlistdo] = useState('');
const [alllist, setalllist] = useState([]);
const [editMode, seteditMode] = useState(false)
const [currentIndex, setcurrentIndex] = useState(0)




const task=()=>
{
  let newList= {listdo}
  setalllist([...alllist, newList]);
} 

const deleteList = (index) =>
{
  let newAllList = [...alllist]
  let updatedList = newAllList.filter((val,ind)=>(ind!=index))
  setalllist(updatedList)
}

const editTodo= (index)=>{
  seteditMode(true)
  let newAllList = [...alllist]
  let currentList = newAllList[index]
  let {listdo}=currentList
  setlistdo(listdo)
  setcurrentIndex(index)
}

const updateTask=()=>
{
  let newAllList  = [...alllist]
  let changedDetails = {listdo}
  newAllList[currentIndex]=changedDetails
  setalllist(newAllList)
  seteditMode(false)
}

// const pulse=()=>
// {
//   document.getElementsByClassName(fa).innerHTML =
// }



  return(
    <div>
      <header ></header>
      <div className="Details">
        <h3 className="text-center">
          Make Your Schedule
        </h3>

        <div className="pulse">
            <i className="fa fa-plus"></i>
        </div>

      </div>
      <div className="container">
        {/* <header></header> */}
        <div className="card w-100 mt-5">
          <div className="row">
            <div className="col-md-6">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <img className="d-block img-fluid" src={Images} alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block img-fluid" src={ima} alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block img-fluid" src="assest/home.jpg" alt="Third slide"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            </div>

            <div className="col-md-6 my-5">
            {editMode == false ?  <h1 className="text-center"> Todo List</h1> : <h1 className="card-header"> Edit List</h1>}
          
          <div className="d-flex p-3">
            <input type="text"  placeholder="Enter Your Schedule" className="form-control" onChange={(e)=>setlistdo(e.target.value)} value={listdo}/>
            {editMode ==false?  
             <button className="btn btn-info ml-2" onClick={task}>
               <i className="fa fa-send"></i> 
            </button> :   
            <button className="btn btn-success ml-2 " onClick={updateTask}>
              <i className="fa fa-send"></i> 
            </button>}


            <button className="btn btn-secondary ml-2">
            <i className="fa fa-plus fa-spin"></i>
            </button>
          </div>

          <div className=" card-body">
          <h3>Task </h3>
          <hr />
            {alllist.map((val,index)=>
              (
                <div key={index} className="bg-info">
                  
                  <div className="row mb-3 p-3">
                    <div className="col-8 text-light">
                    {val.listdo}
                    </div>

                  <div className="col-2">
                  <button className="border-0 bg-success text-light p-2 w-50" onClick={()=>editTodo(index)}>
                  <i className="fa fa-pencil fa-3x"></i>

                    </button>
                     
                  </div>
                    <div className="col-2">
                    <button className="border-0 bg-danger text-light p-2 w-50" onClick={()=>deleteList(index)}>
                     <i className="fa fa-trash fa-3x"></i>

                     </button>
                    </div>
                  </div>
                </div>
              )
              )}
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
