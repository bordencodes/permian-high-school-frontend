import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../services/api'

const Students = () => {
  const [students, setStudents] = useState([])
  const [grades, setGrades] = useState([])
  const [newStudent, setNewStudent] = useState({
    name: '',
    email: '',
    studentId: ''
  })
  let sum = 0
  let A = 4
  let B = 3
  let C = 2

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get(`${BASE_URL}students`)
      setStudents(response.data)
    }
    apiCall()
  }, [])

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get(`${BASE_URL}courses`)
      setGrades(response.data)
    }
    apiCall()
  }, [])

  const getGPA = () => {
    grades.map((grade) => {
      if (grade.result.score === 'A') {
        return 4
      }
    })
  }
  return (
    <div>
      <form>
        <input id="name" placeholder="name" value={newStudent.name}></input>
        <input id="email" placeholder="email" value={newStudent.email}></input>
        <input
          id="studentId"
          placeholder="student ID"
          value={newStudent.studentId}
        ></input>
        <button type="submit">Add Student</button>
      </form>
      <div>
        {students.map((student) => (
          <ul key={student.id}>
            <h2>{student.name}</h2>
            {grades.map((grade) =>
              student.name === grade.students.name ? (
                <ul>
                  <li>{grade.name}</li>
                  <li>{grade.result.score}</li>
                </ul>
              ) : (
                <div></div>
              )
            )}
          </ul>
        ))}
      </div>
    </div>
  )
}

export default Students
