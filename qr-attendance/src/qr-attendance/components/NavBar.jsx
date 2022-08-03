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
">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th style={{textTransform: "uppercase"}}>{course}</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Date and Time</th>
                </tr>
              </thead>
              <tbody>
                {attendees.map((student, index) => (
                  <tr key={student.id}>
                    <td>{index+1}</td>
                    <td>{student.studentName}</td>
                    <td>{student.studentEmail}</td>
                    <td>{new Date().toLocaleString()}</td>

                  </tr>
                ))}
              </tbody>
            </Table>
            <div className="d-flex justify-content-end">
              <Button onClick={() => setAttendees([])}>Go back!!</Button>
            </div>
          </Container>
        )
        : (
        <Container className="main row p-0 m-0" style={{height: "100vh"}} fluid>
          <Container fluid style={{height: "40vh", width: "100vw"}} className="main p-0 m-0 justify-content-evenly img-container">
            <NavBar show={true}/>
            <div className="imag d-flex justify-content-center"><img style={{height: "39vh"}} src={QRScan} alt="qrImg"/></div>
            <div className="heading"><div className="react-heading">Attendance</div>Details</div>
          </Container>
          <Container style={{height: "50vh", background: "#2c2f40"}} className="main">
            <Form onSubmit={handleSubmit} style={{height: "30vh"}} className="p-0 m-0 main justify-content-evenly row">
              <Form.Control
                onChange={e => setCourse(e.target.value)} 
                value={course}
                aria-describedby="basic-addon1"
                placeholder="Enter Hostel name"
                required
              />
              <Form.Control
                onChange={e => setInstructor(e.target.value)} 
                value={instructor}
                aria-describedby="basic-addon1"
                placeholder="Enter Warden name"
                required
              />
              <Form.Control
                onChange={e => setAttendanceAt(e.target.value)} 
                value={attendanceAt}
                aria-describedby="basic-addon1"
                placeholder="DD-MM-YYYY"
              />
              <div className="d-flex justify-content-center">
                <Button variant="prim