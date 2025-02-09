import React from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "../components/topNav";

const TopNavWrapper = (props) => {
	const navigate = useNavigate();

	return <TopNav navigate={navigate} {...props} />;
};

export default TopNavWrapper;
