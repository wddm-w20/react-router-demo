import React from "react"
import { BrowserRouter as Route, Switch, Link, useParams, Redirect } from "react-router-dom"
import Student from 'components/Student'
import FourOhFour from 'components/FourOhFour'
import 'css/Students.css'

const Students = ({students}) => {

  const { slug } = useParams()

  const myStudent = students.find((s) => s.slug === slug)
  // if a student is not null, fetch the data for this student

  console.log(myStudent)

	return (
    <main>
      <h1>Student</h1>
      <ul>
        <li><Link to="/student/999">Fake student</Link></li>
        { students.map((s) => <li key={s.id}><Link to={`/student/${s.slug}`}>{s.name}</Link></li>) }
      </ul>
 
      <Switch>
        <Route exact path="/student/:slug">
          <Student data={myStudent} />
        </Route>
        <Route exact path="/student">
          <p>Please select a student</p>
        </Route>
        <Route component={FourOhFour} />
      </Switch>

    </main>
  )
}

export default Students