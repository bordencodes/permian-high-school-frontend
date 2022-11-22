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
  let arr = []

  const getGPA = (input1) => {
    let sum = 0
    for (let i = 0; i < input1.length; i++) {
      if (input1[i].studentId === input1[i].studentId) {
        arr.push(input1[i].studentId)
        switch (input1[i].result.score) {
          case 'A':
            sum += 4
            break
          case 'B':
            sum += 3.0
            break
          case 'C':
            sum += 2.0
            break
          case 'D':
            sum += 1.0
            break
          case 'F':
            sum += 0
            break
          default:
            sum += 0
            break
        }
        console.log()
      }
      sum = sum / arr.length
      console.log(sum)
    }
  }

  useEffect(() => {
    const getStudents = async () => {
      let response = await axios.get(`${BASE_URL}students`)
      setStudents(response.data)
    }
    getStudents()
    const getGrades = async () => {
      let response = await axios.get(`${BASE_URL}courses`)
      setGrades(response.data)
    }
    getGrades()
    getGPA(grades)
  }, [newStudent])

  const handleChange = (evt) => {
    setNewStudent({ ...newStudent, [evt.target.id]: evt.target.value })
  }
  const handleSubmit = async (evt) => {
    evt.preventDefault()
    let response = await axios.post(`${BASE_URL}students`, newStudent)
    console.log(response)
    setNewStudent({ name: '', email: '', studentId: '' })
  }

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
        <div className="student-container">
          <section className="grid">
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
          </section>
        </div>
      </div>
    </div>
  )
}

export default Students
