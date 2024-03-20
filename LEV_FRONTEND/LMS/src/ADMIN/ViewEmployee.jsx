import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function ViewEmployee() {
  let [employee,setEmployee] = useState([])
  let navigate = useNavigate()
  useEffect(()=>{
    let getAllEmployee = async()=>{
      let data = await axios.get("http://127.0.0.1:5000/employees")
      // console.log(data.data);
      setEmployee(data.data)
    }
    getAllEmployee()
  },[])
  return (
    <>
        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
                <p class="navbar-brand">All Employees</p>
                <button className='btn btn-primary' onClick={()=>{
                    navigate("/admin/home")
                }}>Home</button>
            </div>
        </nav>
        <div className='mt-5 m-3'>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Dpet</th>
      <th scope="col">role</th>
    </tr>
  </thead>
  <tbody>
    {
      employee.map((item,i)=>(
        <tr key={i}>
              <td>{item[0]}</td>
              <td>{item[1]}</td>
              <td>{item[4]}</td>
              <td>{item[5]}</td>
        </tr>
      ))
    }
  </tbody>
</table>
        </div>
    </>
  )
}

export default ViewEmployee
