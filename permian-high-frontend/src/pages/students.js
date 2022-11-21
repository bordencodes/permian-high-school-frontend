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
  const [timeInterval, setTimeInterval] = useState(0)

  setTimeout(() => {
    setTimeInterval(timeInterval + 1)
  }, 2000)

  // let sum = 0
  // let A = 4
  // let B = 3
  // let C = 2

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
  }, [timeInterval])

  const handleChange = (evt) => {
    setNewStudent({ ...newStudent, [evt.target.id]: evt.target.value })
  }
  const handleSubmit = async (evt) => {
    evt.preventDefault()
    let response = await axios.post(`${BASE_URL}students`)
    console.log(response)
    setNewStudent({ name: '', email: '', studentId: '' })
  }

  const getGPA = () => {
    grades.map((grade) => {
      if (grade.result.score === 'A') {
        return 4
      }
    })
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          id="name"
          placeholder="name"
          value={newStudent.name}
          onChange={handleChange}
        ></input>
        <input
          id="email"
          placeholder="email"
          value={newStudent.email}
          onChange={handleChange}
        ></input>
        <input
          id="studentId"
          placeholder="student ID"
          value={newStudent.studentId}
          onChange={handleChange}
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
