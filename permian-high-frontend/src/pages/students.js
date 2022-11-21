import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../services/api'

const Students = () => {
  const [courses, setcourses] = useState([])
  const [students, setStudents] = useState([])

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get(`${BASE_URL}courses`)
      setcourses(response.data)
    }
    apiCall()
  }, [])

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get(`${BASE_URL}students`)
      setStudents(response.data)
    }
    apiCall()
  }, [])

  return (
    <div>
      Hello
      <div>
        {courses.map((course) => (
          <ul key={course.id}>
            <h2>{course.name}</h2>
            <h3>{course.students.name}</h3>
            <h4>{course.result.score}</h4>
          </ul>
        ))}

        <form>
          <input></input>
          <select id="students">
            <option></option>
            {students.map((student) => (
              <option value={student.id} key={student.id}>
                {student.name}
              </option>
            ))}
          </select>
        </form>
      </div>
    </div>
  )
}

export default Students
