import axios from 'axios'
import { useEffect, useState } from 'react'
import { BASE_URL } from '../services/api'

const CreationPage = () => {
  const [grade, setGrade] = useState([])
  const [courses, setcourses] = useState([])
  const [students, setStudents] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [search, setSearch] = useState({
    name: '',
    studentId: 0
  })
  const initialFormState = {
    name: '',
    gradeId: 0,
    studentId: 0
  }
  const [formState, setFormState] = useState(initialFormState)
  const [timeInterval, setTimeInterval] = useState(0)

  setTimeout(() => {
    setTimeInterval(timeInterval + 1)
  }, 2000)

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post(`${BASE_URL}courses`, formState)
    setFormState(initialFormState)
    document.getElementById('gradeId').value = '0'
    document.getElementById('studentId').value = '0'
  }

  const GetGrades = async () => {
    const res = await axios.get(`${BASE_URL}grades`)
    setGrade(res.data)
  }

  useEffect(() => {
    GetGrades()
  }, [])

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get(`${BASE_URL}courses`)
      setcourses(response.data)
    }
    apiCall()
  }, [timeInterval])

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get(`${BASE_URL}students`)
      setStudents(response.data)
    }
    apiCall()
  }, [])

  const handleChange2 = (evt) => {
    setSearch({ ...search, [evt.target.id]: evt.target.value })
  }

  const getCourse = async (evt) => {
    evt.preventDefault()
    let response = await axios.post(`${BASE_URL}courses/search`, search)
    setSearchResults(response.data)
    setSearch({
      name: '',
      studentId: 0
    })
    document.getElementById('name').value = '0'
    document.getElementById('studentId').value = '0'
  }

  return (
    <div className="course-form-container">
      <form onSubmit={handleSubmit}>
        <label className="label" htmlFor="name">
          Name
        </label>
        <input
          className="input"
          type="text"
          id="name"
          value={formState.name}
          onChange={handleChange}
          required
        />
        <label className="label" htmlFor="grade">
          Grade:
        </label>

        <select className="input" id="gradeId" onChange={handleChange}>
          <option value="0"></option>
          {grade.map((scores) => (
            <option value={parseInt(scores.id)} key={scores.id}>
              {scores.score}
            </option>
          ))}
        </select>
        <select id="studentId" onChange={handleChange}>
          <option value="0"></option>
          {students.map((student) => (
            <option value={student.id} key={student.id}>
              {student.name}
            </option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </form>
      <div>
        {courses.map((course) => (
          <ul key={course.id}>
            <h2>{course.name}</h2>
            <h3>{course.students.name}</h3>
            <h4>{course.result.score}</h4>
          </ul>
        ))}
        <form onSubmit={getCourse}>
          <select id="name" onChange={handleChange2}>
            <option value="0"></option>
            {courses.map((course) => (
              <option value={course.name} key={course.id}>
                {course.name}
              </option>
            ))}
          </select>
          <select id="studentId" onChange={handleChange2}>
            <option value="0"></option>
            {students.map((student) => (
              <option value={Number(student.id)} key={student.id}>
                {student.name}
              </option>
            ))}
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default CreationPage
