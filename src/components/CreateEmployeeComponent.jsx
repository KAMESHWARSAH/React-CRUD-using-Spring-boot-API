import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {
constructor(props){
    super(props)
    this.state = {
        firstName : '',
        lastName : '',
        emailId :''

    }
    // this.ChangeFirstNameHandler  = this.ChangeFirstNameHandler.bind(this);
    // this.ChangeLastNameHandler = this.ChangeLastNameHandler.bind(this);
    // this.saveEmployee = this.saveEmployee.bind(this);
}
saveEmployee = (e) =>{
e.preventDefault();
let employee = {
    firstName: this.state.firstName, 
    lastName: this.state.lastName,
    email: this.state.emailId};
    console.log("Employee" + JSON.stringify(employee));

    EmployeeService.createEmployee(employee).then(res =>{
        this.props.history.push('/employee');
    })
}
ChangeFirstNameHandler = (event) =>{
    this.setState({firstName:event.target.value});
}
ChangeLastNameHandler = (event) =>{
    this.setState({lastName:event.target.value});
}
changeEmailIdHandler = (event) =>{
    this.setState({email:event.target.value});
}
calcel(){
    this.props.history.push('/employee');

}
  render() {
    return (
      <div className='container'>
        <div className='row mt-4'>
        <div className='card col-md-6 offset-md-3 '>
        <h3 className='text-center mt-4'>Add Employee</h3>
        <div className='card-body '>
            <form>
                <div className='form-group'>
                    <label class="col-sm-2 col-form-label">First Name</label>
                    <input placeholder='First Name' name="firstName" className='form-control'
                    value={this.state.firstName} onChange={this.ChangeFirstNameHandler} />
                </div>
                <div className='form-group'>
                    <label class="col-sm-2 col-form-label">Last Name</label>
                    <input placeholder='Last Name' name="LastName" className='form-control'
                    value={this.state.lastName} onChange={this.ChangeLastNameHandler} />
                </div>
                <div className='form-group'>
                    <label class="col-sm-2 col-form-label">Email Id</label>
                    <input type='email' placeholder='Email Id' name="email" className='form-control'
                    value={this.state.emailId} onChange={this.changeEmailIdHandler} />
                </div>
                <button className='btn mt-2 btn-success' onClick={this.saveEmployee}> Save</button>
                {/* <button className='btn  mt-2 btn-danger' onClick={this.calcel.bind(this)} style={{marginLeft: "left"}}> Cancel</button> */}
            </form>
        </div>
        </div>
        </div>
      </div>
    )
  }
}

export default CreateEmployeeComponent
