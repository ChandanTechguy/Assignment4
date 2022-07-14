import React, { useEffect, useState } from 'react'
import './App.css';
import Uncontrolled from './Component/Uncontrolled';

const SecurityQuestion = (props) => {
  return (
    <select {...props}>
      <option>Select Security Question</option>
      <option value="What is Your Name?">What is Your Name?</option>
      <option value="What is Your Nick Name?">What is Your Nick Name?</option>
    </select>
  )
}
function App() {
  const initialvalues = { firstname: "", lastname: "", email: "", bio: "" }
  const [formValues, setFormValues] = useState(initialvalues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)


  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
    console.log(formValues)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues))
    setIsSubmit(true)
  };
  useEffect(() => {
    console.log(formErrors)
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues)
    }
  })

  const validate = (values) => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstname) {
      errors.firstname = "firstname is required !"
    }
    if (!values.lastname) {
      errors.lastname = "lastname is required !"
    }
    if (!values.email) {
      errors.email = "email is required !"
    }
    if (!values.bio) {
      errors.bio = "bio is required !"
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format !"
    }
    return errors;
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Controlled Form</h1>

        <div ClassName="ui divider"></div>
        <div ClassName="ui form"></div>
        <div ClassName="field"></div>
        <lable>FirstName : </lable>
        <input required minLength={3} maxLength={15} type="text" name="firstname" placeholder="enter firstname" value={formValues.firstname} onChange={handleChange} />
        <p>{formErrors.firstname}</p>

        < div ClassName="field">
          <lable>LastName : </lable>
          <input required minLength={3} maxLength={15} type="text" name="lastname" placeholder="enter lastname" value={formValues.lastname} onChange={handleChange} />
        </div>
        <p>{formErrors.lastname}</p>

        < div ClassName="field">
          <lable>Email : </lable>
          <input type="text" name="email" placeholder="enter email" value={formValues.email} onChange={handleChange} />
        </div>
        <p>{formErrors.email}</p>

        < div ClassName="field">
          <lable>Security Questions :  < SecurityQuestion />  </lable>
        </div>
        <br></br>

        < div ClassName="field">
          <lable>Security Answer : </lable>
          <input type="text" name="security answer" placeholder="enter security answer" value={formValues.securityanswer} onChange={handleChange} />
        </div>
        <p>{formErrors.email}</p>

        < div ClassName="field">
          <lable>Bio : </lable>
          <textarea type="text" name="bio" placeholder="enter bio" value={formValues.bio} onChange={handleChange} />
        </div>
        <p>{formErrors.bio}</p>

        <button className="fluid ui button blue" >Submit</button>
        <button className="fluid ui button blue" >Cancel</button>
      </form >
      <div><Uncontrolled /></div>
    </div >
  );
}

export default App;
