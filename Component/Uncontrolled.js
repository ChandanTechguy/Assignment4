import React from 'react'

const SecurityQuestion = (props) => {
  return (
    <select {...props}>
      <option>Select Security Question</option>
      <option value="What is Your Name?">What is Your Name?</option>
      <option value="What is Your Nick Name?">What is Your Nick Name?</option>
    </select>
  )
}
class Uncontrolled extends React.Component {
  
  constructor(){
    super();
    this.firstname=React.createRef()
    this.lastname=React.createRef()
    this.email=React.createRef()
    this.bio=React.createRef()
  }
  submitHandle(event){
  event.preventDefault()
  console.warn(this.firstname.current.value,this.lastname.current.value,this.email.current.value,this.bio.current.value)
}

render(){
  return (
    <div>
      <h1>Uncontrolled Form</h1>
      <form onSubmit ={(event)=>{this.submitHandle(event)}}>
      <lable>FirstName : </lable>
        <input required minLength={3} maxLength={15} type="text" placeholder="enter firstname" ref={this.firstname} /> <br /><br />

        <lable>LastName : </lable>
        <input required minLength={3} maxLength={15} type="text" placeholder="enter lastname" ref={this.lastname} /> <br /><br />

        <lable>Email : </lable>
        <input type="text" placeholder="enter email" ref={this.email} /> <br /><br />

        < div ClassName="field">
          <lable>Security Questions :  < SecurityQuestion />  </lable>
        </div>
        <br></br>
        <lable>Security Answer : </lable>
        <input type="text" placeholder="enter security answer" ref={this.securityanswer} /> <br /><br />

        <lable>Bio : </lable>
        <textarea type="text" placeholder="enter bio" ref={this.bio} /> <br /><br />

        <button type="Submit">Submit</button>
        <button type="Cancel">Cancel</button>

      </form>
    </div>
  )
}
}
export default Uncontrolled
