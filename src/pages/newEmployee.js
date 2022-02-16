import React, { Component } from 'react';
import '../style/stylesheet.css';
import TopNav from '../components/topNav';
import BottomAdminNav from '../components/bottomAdminNav';
import employeeController from '../controllers/employeeController';
import {Link} from 'react-router-dom';

class NewEmployee extends Component {
    constructor(props) {
		super(props);
		this.state = {
			firstname: "",
			lastname: "",
            address: "",
            city: "",
            email: "",
            startdate: "",
            enddate: "",
            hourlywage: "",
            monthlysalary: "", 
            isadmin: false,
            isbookkeeper: false,
            institutionid: "",
            bankaccountnum: "", 
            transitid: ""
		};
	}

    handleFirstnameInput = (e) => {
		this.setState({ firstname: e.target.value });
	};

    handleLastnameInput = (e) => {
		this.setState({ lastname: e.target.value });
	};
    
    handleAddressInput = (e) => {
		this.setState({ address: e.target.value });
	};

    handleCityInput = (e) => {
		this.setState({ city: e.target.value });
	};

    handleEmailInput = (e) => {
		this.setState({ email: e.target.value });
	};

    handleStartdateInput = (e) => {
		this.setState({ startdate: e.target.value });
	};

    handleEnddateInput = (e) => {
		this.setState({ enddate: e.target.value });
	};

    handleHourlywageInput = (e) => {
		this.setState({ hourlywage: e.target.value });
	};

    handleMonthlySalaryInput = (e) => {
		this.setState({ monthlysalary: e.target.value });
	};

    handleInstitutionIdInput = (e) => {
		this.setState({ institutionid: e.target.value });
	};

    handleBankAccountNumInput = (e) => {
		this.setState({ bankaccountnum: e.target.value });
	};

    handleTransitIdInput = (e) => {
		this.setState({ transitid: e.target.value });
	};

    handleNewEmployee = async () => {
		let response = await employeeController.NewEmployee(
			this.state.firstname,
			this.state.lastname,
            this.state.address,
            this.state.city,
            this.state.email,
			this.state.startdate,
            this.state.enddate,
			this.state.hourlywage,
            this.state.monthlysalary,
            this.state.institutionid,
            this.state.bankaccountnum,
            this.state.transitid
		);
		console.log(response.data);
    }

    render() {
        return (
            <div className='container-fluid p-0 adminEmployeesPage'>
                <div className='row d-flex'>
                    <TopNav />
                    <BottomAdminNav />
                </div>
                <div className='row'>
                    <div className='col-2'>
                    </div>
                    <div className='col-8 min-vh-100 innerAdmin'>
                        <div className='row'>
                            <div className='col mt-2'>
                                <h1>Create New Employee</h1>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-5 d-flex flex-row-reverse'>
                                First Name:
                            </div>
                            <div className='col'>
                                <input type='text' value={this.state.firstname} onChange={this.handleFirstnameInput}/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-5 d-flex flex-row-reverse'>
                                Last Name:
                            </div>
                            <div className='col'>
                                <input type='text' value={this.state.lastname} onChange={this.handleLastnameInput}/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-5 d-flex flex-row-reverse'>
                                Address:
                            </div>
                            <div className='col'>
                                <input type='text' value={this.state.address} onChange={this.handleAddressInput}/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-5 d-flex flex-row-reverse'>
                                City:
                            </div>
                            <div className='col'>
                                <input type='text' value={this.state.city} onChange={this.handleCityInput}/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-5 d-flex flex-row-reverse'>
                                Email:
                            </div>
                            <div className='col'>
                                <input type='text' value={this.state.email} onChange={this.handleEmailInput}/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-5 d-flex flex-row-reverse'>
                                Start Date:
                            </div>
                            <div className='col'>
                                <input type='date' value={this.state.startdate} onChange={this.handleStartdateInput}/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-5 d-flex flex-row-reverse'>
                                End Date (if applicable):
                            </div>
                            <div className='col'>
                                <input type='date' value={this.state.enddate} onChange={this.handleEnddateInput}/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-5 d-flex flex-row-reverse'>
                                Hourly Wage (if applicable):
                            </div>
                            <div className='col'>
                                <input type='text' value={this.state.hourlywage} onChange={this.handleHourlywageInput}/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-5 d-flex flex-row-reverse'>
                                Monthly Salary (if applicable):
                            </div>
                            <div className='col'>
                                <input type='text' value={this.state.monthlysalary} onChange={this.handleMonthlySalaryInput}/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-5 d-flex flex-row-reverse'>
                                Institution ID (for direct deposit):
                            </div>
                            <div className='col'>
                                <input type='text' value={this.state.institutionid} onChange={this.handleInstitutionIdInput}/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-5 d-flex flex-row-reverse'>
                                Bank Account Number (for direct deposit):
                            </div>
                            <div className='col'>
                                <input type='text' value={this.state.bankaccountnum} onChange={this.handleBankAccountNumInput}/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-5 d-flex flex-row-reverse'>
                                Transit ID (for direct deposit):
                            </div>
                            <div className='col'>
                                <input type='text' value={this.state.transitid} onChange={this.handleTransitIdInput}/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col d-flex justify-content-between'>
                                <Link to='/adminEmployees'><button type='button' className='btn btn-small SecondaryButton'>Go Back</button></Link>
                                <button type='button' className='btn btn-small PrimaryButton' onClick={this.handleNewEmployee}>Submit New Employee</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-2'></div>
                </div>
            </div>
        );
    }
}

export default NewEmployee;