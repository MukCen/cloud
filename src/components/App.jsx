import React, { useEffect } from "react";
import Navbar from "./navbar/Navbar";
import "./app.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Registration from "./authorization/Registration";
import Login from "./authorization/Login";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../actions/user";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

// import Registration from "./components/authorization";

function App() {
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(auth());
  }, []);
  return (
    <BrowserRouter>
      <div className='app'>
        <Navbar />
        <div className='wrap'>
          {!isAuth && (
            <Switch>
              <Route
                path='/registration'
                component={Registration}
              />
              <Route
                path='/login'
                component={Login}
              />
              <Redirect to='/Login' />
            </Switch>
          )}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
