import React, { useState, useEffect } from 'react'
import { Container, Form, Button, Table } from 'react-bootstrap'
import { database } from '../Firebase'
import QRScan from '../pics/25950.png'
import NavBar from './NavBar'

export default function AttendanceDetails() {
  const [course, setCourse] = useState('')
  const [instructor, setInstructor] = useState('')
  const [attendanceAt, setAttendanceAt] = useState('')
  const [attendees, setAttendees] = useState([])
  const [runEffect, setRunEffect] = useState(false)
  function handleSubmit(e){
    e.preventDefault()
    setRunEffect(true)
    console.log("submitted")
  }
  useEffect(() => {
    if(runEffect){
    console.log("running")
      database.attendance
      .doc(`${attendanceAt}-${course}`)
      .collection(attendanceAt)
      .where('instructor', '==', instructor)
      .where('course', '==', course)
      .onSnapshot(snapshot => {
        let docs = []
        snapshot.forEach(doc => {
          docs.push({...doc.data(), id: doc.id})
          console.log(doc.data())
        })
        setAttendees(docs)
      console.log(docs)
      })
    }
  }, [runEffect, attendanceAt, course, instructor])
  return (
    <Container className="row m-0 p-0" style={{height: "100vh"}} fluid>
      {attendees.length > 0 && runEffect ?
        (
          <Container className="main row">
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
                <Button variant="primary" type="submit">Get Details</Button>
              </div>
            </Form>
          </Container>
          <Container style={{height: "10vh", background: "#2c2f40"}}>
            <div className="d-flex justify-content-start">
              <a href="/make-qr" role="button" className="btn btn-primary">Take Attendance</a>
            </div>
          </Container>
        </Container>
        )
      }
    </Container>
  )
}
