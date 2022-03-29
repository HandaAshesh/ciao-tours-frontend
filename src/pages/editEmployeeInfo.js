import React, { Component } from "react";
	import "../style/stylesheet.css";
	import TopNav from "../components/topNav";
	import BottomAdminNav from "../components/bottomAdminNav";

	class editEmployeeInfo extends Component {
		data = [
			{
				address: "sample address",
				name: "Name here",
				email: "@caioTours.com",
				rate: "$32.52",
			},
		];
		constructor() {
			super();
			this.state = {
				name: this.data[0].name,
				address: this.data[0].address,
				email: this.data[0].email,
				rate: this.data[0].rate,
				newName: "",
				newAddress: "",
				newEmail: "",
				newRate: "",
				showNameError: false,
				showEmailError: false,
				showAddressError: false,
				nameError:"",
				emailError:"",
				addressError:"",
			};
		}

		handleNameInput = (e) => {
			if (e.target.value === "") {
				this.setState({ showNameError: true, nameError: "Name can't be empty." })
	
			}else
				if(/\d/.test(e.target.value)){
					this.setState({ showNameError: true, nameError: "Name can't be have numbers" })

				}else {
				this.setState({ showNameError: false, nameError: "" })
			}
			this.setState({ newName: e.target.value });
		};

		handleEmailInput = (e) => {
			if (e.target.value === "") {
				this.setState({ showEmailError: true, emailError: "Email can't be empty." })
	
			} else {
				this.setState({ showEmailError: false, emailError: "" })
			}
			this.setState({ newEmail: e.target.value });
		};

		handleAddressInput = (e) => {
			if (e.target.value === "") {
				this.setState({ showAddressError: true, addressError: "Address can't be empty." })
	
			} else {
				this.setState({ showAddressError: false, addressError: "" })
			}

			this.setState({ newAddress: e.target.value });
		};

		handleRateInput = (e) => {
			
			this.setState({ newRate: e.target.value });
		};

		render() {
			const { showNameError, showAddressError, showEmailError, nameError, emailError, addressError} = this.state;
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
									<div className="col-4">
										<input
											type="text"
											defaultValue={this.state.name}
											disabled={false}
											onChange={this.handleNameInput}
										/>
										<div className="row errorText">
									{showNameError && <div className="error"> {nameError} </div>}
								</div>
									</div>
								</div>
								<div className="row">
									<div className="col-3  text-start">Address:</div>
									<div className="col-4">
										<input
											type="text"
											defaultValue={this.state.address}
											disabled={false}
											onChange={this.handleAddressInput}
										/>
										<div className="row errorText">
									{showAddressError && <div className="error"> {addressError} </div>}
								</div>
									</div>
								</div>
								<div className="row">
									<div className="col-3  text-start">Email:</div>
									<div className="col-4">
										<input
											type="text"
											defaultValue={this.state.email}
											disabled={false}
											onChange={this.handleEmailInput}
										/>
										<div className="row errorText">
									{showEmailError && <div className="error"> {emailError} </div>}
								</div>
									</div>
								</div>
								<div className="row">
									<div className="col-3  text-start">Hourly Rate:</div>
									<div className="col-4">
										<input
											type="text"
											defaultValue={this.state.rate}
											disabled={true}
											onChange={this.handleRateInput}
										/>
									</div>
								</div>
								<div className="row justify-content-center text-center">
									<div className="col-12">
										Standard form with all the information.
									</div>
								</div>

								<div className="row fixed-bottom justify-content-center  ">
									<div className="col-6 ">
										<button
											onClick={() => this.updateInfo()}
											class="employeeButton"
										>
											Save Information
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

	export default editEmployeeInfo;