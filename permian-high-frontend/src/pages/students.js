import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../services/api'

const Students = () => {
  const [students, setStudents] = useState([])
  const [grades, setGrades] = useState([])
  const [newStudent, setNewStudent] = useState({
    name: '',
    email: '',
    schoolId: ''
  })
  const [timeInterval, setTimeInterval] = useState(0)

  setTimeout(() => {
    setTimeInterval(timeInterval + 1)
  }, 2000)

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
    let response = await axios.post(`${BASE_URL}students`, newStudent)
    console.log(response)
    setNewStudent({ name: '', email: '', studentId: '' })
  }
  let score = new Map()
  score.set('A', 4)
  score.set('B', 3)
  score.set('C', 2)
  score.set('D', 1)
  score.set('F', 0)
  let grade = document.getElementById('myGrade')
  let getGpa = score.get(grade)

  return (
    <div>
      <div className="new-student-container">
        <form onSubmit={handleSubmit}>
          <label className="label" htmlFor="name">
            New Student Name:
          </label>
          <input
            id="name"
            placeholder="name"
            value={newStudent.name}
            onChange={handleChange}
          ></input>
          <label className="label" htmlFor="email">
            New Student Email:
          </label>
          <input
            id="email"
            placeholder="email"
            value={newStudent.email}
            onChange={handleChange}
          ></input>
          <label className="label" htmlFor="id">
            New Student ID:
          </label>
          <input
            id="schoolId"
            placeholder="student ID"
            value={newStudent.studentId}
            onChange={handleChange}
          ></input>
          <button type="submit">Add Student</button>
        </form>
      </div>
      <div>
        {students.map((student) => (
          <ul key={student.id}>
            <h2>{student.name}</h2>
            {grades.map((grade) =>
              student.name === grade.students.name ? (
                <ul>
                  <li>{grade.name}</li>
                  <li id="myGrade" value={grade.result.score}>
                    {grade.result.score}
                  </li>
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
