import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import { useAuth } from "../Context"
import GoogleButton from 'react-google-button'
import NavBar from '../components/NavBar'

export default function Signup() {
  const [loading, setLoading] = useState(false)
  const [redirectPossible, setRedirectPossible] = useState(false)
  const { signinWithGoogle, currentUser } = useAuth()
  async function handleSigninWithGoogle(e){
    e.preventDefault()
    try{
      setLoading(true)
      await signinWithGoogle()
      localStorage.setItem("role", "teacher")
      setRedirectPossible(true)
      setLoading(false)
    }catch(err){
      alert("There was an error signing in!!")
    }
  }
  return (
    <Container fluid className="main p-0 m-0 login" style={{height: "100vh"}}>
      {redirectPossible && <Redirect to="/make-qr" />}
      {currentUser && <Redirect to="/make-qr" />}
      <NavBar show={false}/>
      <Container className="main row">
        <div className="main heading breakpoint" style={{color: "#FFFFFF"}}>QR Attendance</div>
        <GoogleButton
          onClick={handleSigninWithGoogle}
          disabled={loading}
          className="style-button pl-0"
          style={{textAlign: "start"}}
        />
        <div className="d-flex justify-content-center" ><a className="href-style m-0 pl-2" href="/student-login">Login as student</a></div>
      </Container>
    </Container>
  )
}
