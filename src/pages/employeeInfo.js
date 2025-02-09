import React, { Component } from "react";
import "../style/stylesheet.css";
import TopNav from "../components/topNav";
import BottomAdminNav from "../components/bottomAdminNav";
class employeeInfo extends Component {
	data = [
		{
			address: "sample address",
			name: "Name here",
			email: "@caioTours.com",
			rate: "$32.52",
		},
	];
	constructor(props) {
		super(props);
		this.state = {
			name: this.data[0].name,
			address: this.data[0].address,
			email: this.data[0].email,
			rate: this.data[0].rate,
		};
	}
	render() {
		return (
			<form>
				<div className="container-fluid p-0 myInfoPage">
					<div className="row d-flex">
						<TopNav currentUser={this.props.currentUser} />
						<BottomAdminNav />
					</div>
					<div className="row  d-flex">
						<div className="col-2"></div>
						<div className="col-7 min-vh-100 innerAdmin ">
							<div className="row">
								<div className="innnerInfo">
									<h1>My Information</h1>
								</div>
							</div>
							<div className="row">
								<hr className="bar"></hr>
							</div>
							<div className="row">
								<div className="col-3 text-start">Name:</div>
								<div className="col-4">{this.state.name}</div>
							</div>
							<div className="row">
								<div className="col-3  text-start">Address:</div>
								<div className="col-4">{this.state.address}</div>
							</div>
							<div className="row">
								<div className="col-3  text-start">Email:</div>
								<div className="col-4">{this.state.email}</div>
							</div>
							<div className="row">
								<div className="col-3  text-start">Hourly Rate:</div>
								<div className="col-4">{this.state.rate}</div>
							</div>
							<div className="row justify-content-center text-center">
								<div className="col-12">
									Standard form with all the information.
								</div>
							</div>

							<div className="row  fixed-bottom justify-content-center ">
								<div className="col-7">
									<button
										type="button"
										onClick={() => {}}
										class="employeeButton"
									>
										Edit Information
									</button>
								</div>
							</div>
						</div>
						<div className="col-2"></div>
					</div>
				</div>
			</form>
		);
	}
}

export default employeeInfo;
