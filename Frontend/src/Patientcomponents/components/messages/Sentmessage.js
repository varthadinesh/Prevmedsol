import React from 'react';
import Menu from "../Menu";
import Navbar from "../Navbar"


const Sentmessage = () => {
    return (
      <>
      <Navbar/>
        <div>
  <div className="d-flex">
    <div className="col-2 p-0">
      <Menu/>
    </div>

    <div className="col-10 p-0">
     <div className='d-flex'>
        <div className='p-2'>
        <div class="x_panel" style={{background:'rgb(228, 230, 236)',width:'410px',height:'200px'}}>
        <div class="d-flex justify-content-between p-2 m-2">
      <ul class="nav navbar-left panel_toolbox ml-5" style={{gap:'15px'}}>
        <li><a href="##" class="active text-decoration-none text-success" >All</a> </li>
        <li><a class="text-decoration-none text-dark">Unread</a> </li>
        <li><a href="##" className='text-decoration-none text-dark'>Compose</a> </li>        
      </ul>
      <ul class="pagination pull-right mr-4 p-1" style={{gap:'2px'}}>
      <i class="bi bi-chevron-left bg-white  p-1 " ></i>
      <i class="bi bi-chevron-right bg-white p-1"></i>

      </ul>
    </div>

      <div class="row">
      <form method="post" action="">
        <div>
          <div id="custom-search-input">
            <div class="input-group col-md-12">
              <input type="text" className="form-control" name="search_by_name" id="search_by_name" placeholder="Search"/>
              <span>
              <button type="submit" className='form-control'><i class="fa fa-search"></i></button>
              </span>
               </div>
          </div>
		  <hr className='w-100  text-white p-5'/>
        </div>
		</form>
      </div>

  </div>

        </div>
        <div className='p-1'>
            <h4>Message</h4>
            <hr style={{width:'100vh'}}/>
        </div>

     </div>
    
    </div>
  </div>            
                   
                   
      </div>
      </>
    );
};

export default Sentmessage;