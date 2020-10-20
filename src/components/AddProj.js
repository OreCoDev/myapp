import React, {useState, useEffect } from 'react'
import axios from 'axios'
import { axiosWithAuth } from '../utils/axiosWithAuth'
const initialValues = {
  name: '',
  amount: null

}

 const AddProj = () =>  {
const [addForm, setAddForm] = useState([])
 const [newProj, setNewProj] = useState(initialValues)

// tester API to use https://reqres.in/api/users

 useEffect(() => { 
      axiosWithAuth()
    .get('https://reqres.in/api/users')
    .then(res => {
        setAddForm(res.data)
    })
   .catch(err => {
        console.log(err)
    })
 }, [])

  const handleChange = (e) => {
  setNewProj({
         ...newProj,
       [e.target.name]: e.target.value
  })
 }

 const handleSubmit = (e) => {
    e.preventDefault()     
    axios
    .post('https://reqres.in/api/users', newProj)
       .then((res) => {
        setNewProj(res.data)
      })
      .catch((err) => {
        console.log(err.message);
     });
    }

  return (  
  <div className="AddProj">
      <form onSubmit={handleSubmit}>
     <label> What is the name of your project?
      <input
     type='text'
     name='name'
    value={addForm.name}
     onChange={handleChange}
    />
     </label>
     <label> How much funding does your project need?
       <input
       type='text'
       name='amount'
       value={addForm.amount}
       onChange={handleChange} />
     </label>
     <input type='submit' />
      </form>
      </div>
      )

 }

 export default AddProj;



 //{friends.map(
   //</div>
   //friends => ( <p> Name: {friends.name</p>))
  //}