import React, { Component } from "react";
import "../style/stylesheet.css";
import BottomAdminNav from "../components/bottomAdminNav";
import TopAdminNav from "../components/topAdminNav";
import employeeController from "../controllers/employeeController";
import { Link } from "react-router-dom";
import EmployeeCard from "../components/employeeCard";

class AdminEmployees extends Component {
	constructor(props) {
		super(props);
		this.state = {
			employeeList: [],
			employeesLoaded: false,
		};
	}

	componentDidMount = () => {
		// this.setState({ employeeList: this.getEmployees() });
		// console.log(this.state.employeeList);
		employeeController.getEmployees().then((employees) => {
			this.setState({ employeeList: employees.data, employeesLoaded: true });
			console.log(this.state.employeeList);
		});
	};

	getEmployees = async () => {
		let employees = await employeeController.getEmployees();
		return employees;
	};

	render() {
		return (
			<div className="container-fluid p-0 adminEmployeesPage">
				<div className="row d-flex">
					<TopAdminNav currentUser={this.props.currentUser} />
					<BottomAdminNav />
				</div>
				<div className="row">
					<div className="col-2"></div>
					<div className="col-8 min-vh-100 innerAdmin">
						<div className="row">
							<div className="employeeHeader p-4 pt-2 pb-2">
								<h1>List Of Employees</h1>
							</div>
						</div>
						<div className="row">
							<div className="col d-flex justify-content-center p-4">
								<Link to="/newEmployee">
									<button className="btn btn-lg PrimaryButton" type="button">
										Create New Employee
									</button>
								</Link>
							</div>
						</div>
						<div className="row">
							<div className="col p-0">
								<div>
									<ul className="accordion">
										{this.state.employeesLoaded
											? this.state.employeeList.map((e) => (
													<EmployeeCard
														key={e.employeeId}
														empId={e.employeeId}
														fName={e.firstName}
														lName={e.lastName}
														email={e.emailAddress}
														city={e.city}
														address={e.address}
														startDate={e.employeeStartDate}
														endDate={e.employeeEndDate}
														hourlyRate={e.hourlyWage}
														monthlySal={e.monthlySalary}
														bankAccount={e.bankAccountNumber}
														institutionId={e.institutionId}
														transitId={e.transitId}
													/>
											  ))
											: "Loading"}
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="col-2"></div>
				</div>
			</div>
		);
	}
}

export default AdminEmployees;
