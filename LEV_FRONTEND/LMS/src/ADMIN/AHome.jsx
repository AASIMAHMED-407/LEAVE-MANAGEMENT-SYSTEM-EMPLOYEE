import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
function AHome() {
    let navigate = useNavigate()
  return (
    <>
        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
                <p class="navbar-brand">Admin Dashboard</p>
                <button className='btn btn-danger' onClick={()=>{
                    navigate("/admin/login")
                }}>Logout</button>
            </div>
        </nav>

        <div className='container d-flex flex-column mt-5'>
            <div class="card">
            <div class="card-body">
                <Link to={"/admin/create/employee"}  class="btn btn-danger w-100" style={{height:"80px"}}>CRATE EMPYOLEE</Link>
            </div>
            </div>

            <div class="card">
            <div class="card-body">
                <Link to={"/admin/view/employee"}  class="btn btn-warning  w-100" style={{height:"80px"}}>VIEW EMPYOLEE</Link>
            </div>
            </div>
            <div class="card">
            <div class="card-body">
                <Link to={"/admin/leave/req"}  class="btn btn-dark  w-100" style={{height:"80px"}}>REQUEST EMPYOLEE</Link>
            </div>
            </div>
        </div>
    </>
  )
}

export default AHome
