import React from 'react';

import { BrowserRouter, useLocation, useNavigate } from "react-router-dom";
import { authObserver, getUserData } from "@MF-Org/apiHelpers";
const Dashboard = () => {

    const navigate = useNavigate()
    const [authToken, setToken] = React.useState(null);


    React.useEffect(() => {

        if (authObserver) {
            authObserver.subscribe((data) => {

                if (!data.token) {
                    navigate("/login")
                    return
                }

                getUserData(data.token).then((response) => {

                    if (response.error) {
                        navigate("/login");
                        return;
                    }

                    setToken(data.token);

                });


                console.log("SUB-data", data);
            });

            return () => {
                // authObserver.unsubscribe()
            }
        }

    }, [])

    return  authToken && <div>DashBoard</div>;
};

export default Dashboard;
