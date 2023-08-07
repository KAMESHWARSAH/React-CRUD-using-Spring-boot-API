import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class ListEmployeeComponents extends Component {

 constructor(props){
    super(props)

    this.state = {
        employee : []
    }
    this.addEmployee = this.addEmployee.bind(this);
    this.editEmployee = this.editEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
    // this.viewEmployee = this.viewEmployee.bind(this);
 }
 componentDidMount(){
    EmployeeService.getEmployee().then((res) =>{
        this.setState({employee:res.data});
        console.log(res);
    });
 }
 viewEmployee(id){
    this.props.history.push(`/view-employee/${id}`);
 }
 deleteEmployee(id){
    EmployeeService.deleteEmployee(id).then(res =>{
        this.setState({employee: this.state.employee.filter(employee => employee.id !== id)});
    });
 }

 addEmployee(){
    this.props.history.push('/add-employee');
 }
 editEmployee(id){
    this.props.history.push(`/update-emploee/${id}`)
 }
  render() {
    return (
      <div>
        <h2 className='text-center'>Employee List</h2>
        <div className='row'>
            <div className='col-md-3 p-4'>
            <button  type="button"  className='btn  btn-primary' onClick={this.addEmployee}>Add Employee</button>
            </div>
        </div>
        <div className='row'>
            <table className='table table-striped  table-border'>
                <thead className='thead-light border mb-4'>
                   <tr>
                   <th >Employee First Name</th>
                    <th >Employee Last Name</th>
                    <th >Employee Email Id</th>
                    <th >Action</th>
                   </tr>
                </thead>

                <tbody>
                    {
                        this.state.employee.map(
                            employee =>
                            <tr key={employee}>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td><button onClick={() => this.editEmployee(employee.id)} className='btn btn-info'>Update</button></td>
                                <td><button onClick={() => this.deleteEmployee(employee.id)} className='btn btn-danger'>Delete</button></td>
                                <td><button onClick={() => this.viewEmployee(employee.id)} className='btn btn-success'>View</button></td>
                            </tr>
                        )
                    }
                </tbody>

            </table>
        </div>
        
        </div>
    )
  }
}

export default ListEmployeeComponents