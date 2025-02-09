import axios from "axios";

const GET_ALL_EMPLOYEES_API_URL = "http://localhost:8080/api/v1/employees";
const CREATE_NEW_EMPLOYEE_API_URL = "http://localhost:8080/api/v1/new-employee";
const UPDATE_EMPLOYEE_API_URL = "http://localhost:8080/api/v1/update-employee/";
const DELETE_EMPLOYEE_API_URL = "http://localhost:8080/api/v1/delete-employee/";

class EmployeeController {
	getEmployees() {
		return axios.get(GET_ALL_EMPLOYEES_API_URL, {
			//headers: { "Access-Control-Allow-Credentials": "true" },
			withCredentials: true,
		});
	}

	createEmployee(newEmployee) {
		return axios.post(CREATE_NEW_EMPLOYEE_API_URL, newEmployee, {
			//headers: { "Access-Control-Allow-Credentials": "true" },
			withCredentials: true,
		});
	}

	updateEmployee(employee, employeeID) {
		return axios.put(UPDATE_EMPLOYEE_API_URL + employeeID, employee);
	}

	deleteEmployee(employeeID) {
		return axios.delete(DELETE_EMPLOYEE_API_URL + employeeID);
	}
}

export default new EmployeeController();
