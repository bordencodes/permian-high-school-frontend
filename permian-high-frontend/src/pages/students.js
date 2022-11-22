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
  // const [timeInterval, setTimeInterval] = useState(0)

  // setTimeout(() => {
  //   setTimeInterval(timeInterval + 1)
  // }, 2000)

  const getGPA = (input) => {
    let sum = 0

    for (let i = 0; i < input.length; i++) {
      console.log(input[i].result.score)
      switch (input[i].result.score) {
        case 'A':
          sum += 4.0
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
          sum = 0
          break
      }
    }
    let newSum = sum / input.length
    console.log(typeof input.length)
    console.log(typeof sum)
    console.log(newSum)
  }
  // getGPA()

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
          id="schoolId"
          placeholder="student ID"
          value={newStudent.studentId}
          onChange={handleChange}
        ></input>
        <button type="submit">Add Student</button>
      </form>
      <div>
        {students.map((student) => (
          <ul key={student.id} id="studentsName">
            <h2>{student.name}</h2>
            {grades.map((grade) =>
              student.name === grade.students.name ? (
                <div>
                  <p>{grade.name}</p>
                  <p id="myGrade" value={grade.result.score}>
                    {grade.result.score}
                  </p>
                  <p></p>
                  {/* <button ></button> */}
                </div>
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
