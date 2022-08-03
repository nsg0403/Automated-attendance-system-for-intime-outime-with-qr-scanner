import React from 'react'
import { Container } from 'react-bootstrap'
import NavBar from './NavBar'
import { Redirect } from 'react-router-dom'
import { useAuth } from '../Context'
import scan from '../pics/download.jpg'


export default function Main() {
  const role = localStorage.getItem("role")
  const { currentUser } = useAuth()
  return (
    <div style={{backgroundColor: "#FFFFFF", height: "100vh"}}>
      <NavBar show={false} color={"#2c2f40"}/>
      <Container style={{height: "80vh"}} fluid className="d-flex flex-column justify-content-center align-items-center">
        {currentUser && (
          role ==="student" && <Redirect to={'/scan-qr'}/>
        )}
        {currentUser && (
          role ==="teacher" && <Redirect to={'/make-qr'}/>
        )}
        <div className="heading breakpoint">
          <div className="react-heading">
           QR Attendance
          </div>
        </div>
        <img src={scan} alt="Dashboard" style={{height: "50vh", width: "50vh"}}/>
      </Container>
      <Container style={{height: "10vh"}}>
        <div className="d-flex justify-content-evenly">
          <a href="/student-login" role="button" className="btn btn-primary bord">Student</a>
          <a href="/teacher-login" role="button" className="btn btn-primary bord">Admin</a>
        </div>
      </Container>
    </div>
  )
}
