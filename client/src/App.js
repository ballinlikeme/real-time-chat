import React, {useEffect, useState} from "react";
import Router from "./router/Router";
import { checkAuth } from "./http/userAPI";
import {useDispatch} from "react-redux"
import { setUser, setAuth } from "./redux/slices/authSlice";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()

  useEffect(() => {
    checkAuth().then(data => {
      dispatch(setUser(data));
      dispatch(setAuth(true));
  }).finally(() => setLoading(false))
}, [])

  if (loading) return <div>LOADING...</div>

  return (
    <Router />
  )
}

export default App;
