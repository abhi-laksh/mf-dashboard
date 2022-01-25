import React from 'react';
import { BrowserRouter, useLocation, useNavigate } from "react-router-dom";
import { authObserver, getUserData } from "@MF-Org/apiHelpers";
import Dashboard from './components/Dashboard';

export default function Root(props) {

	return (
		<BrowserRouter>
			<Dashboard

			/>
		</BrowserRouter>
	);
}
