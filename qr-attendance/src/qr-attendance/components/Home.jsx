import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Context from '../Context'
import QRScanner from './QRScanner'
import SecureRoute from '../AuthComponents/SecureRoute'
import TeacherLogin from '../AuthComponents/TeacherLogin'
import TeacherQRForm from '../AuthComponents/TeacherQRForm'
import StudentLogin from '../AuthComponents/StudentLogin'
import AttendanceDetails from './AttendanceDetails'
import Main from './Main'


export default function Home() {
  return (
    <Router>
      <Context>
        <Switch>
          <Route exact path='/' component={Main}/>
          <Route exact path="/student-login" component={StudentLogin}/>
          <Route exact path="/teacher-login" component={TeacherLogin}/>
          <SecureRoute exact path="/make-qr" currentRole="teacher" component={TeacherQRForm}/>
          <SecureRoute exact path="/get-details" currentRole="teacher" component={AttendanceDetails}/>
          <SecureRoute exact path="/scan-qr" currentRole="student" component={QRScanner}/>
          
        </Switch>
      </Context>
    </Router>
  )
}