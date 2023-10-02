import React from 'react'

function Home() {
  return (
    <div className='container d-flex justify-content-between'>
    <div className="card " style={{ width: "18rem" }}>
        <div className='container mt-3'>

  <img src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..." />
        </div>
  <div className="card-body">
    <h5 className="card-title">BMW Z4</h5>
    
    
  </div>
  <div class="card-footer text-body-secondary d-flex justify-content-between" >
    <div className="d-flex">

    <h5 style={{color:'black'}}>$440</h5><p style={{color:'black'}}>/month</p>
    </div>
  <a href="#" className="btn btn-primary"style={{width:'6vw'}}>
    Rent
    </a>
    </div> 
  
</div>
    



    </div>
  )
}

export default Home
