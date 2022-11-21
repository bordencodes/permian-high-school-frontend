import axios from 'axios'
import { useEffect, useState } from 'react'
import { BASE_URL } from '../services/api'

const CreationPage = () => {
  const [grade, setGrade] = useState([])
  const [courses, setcourses] = useState([])
  const [students, setStudents] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [courseId, setCourseId] = useState()
  const [search, setSearch] = useState()
  const initialFormState = {
    name: '',
    grade: ''
  }
  const [formState, setFormState] = useState(initialFormState)

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post(`${BASE_URL}courses`, formState)
    setFormState(initialFormState)
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
  }, [])

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get(`${BASE_URL}students`)
      setStudents(response.data)
    }
    apiCall()
  }, [])

  const handleChange2 = (evt) => {
    setCourseId({ studentId: parseInt(evt.target.value) })
  }
  const handleId = (evt) => {
    setSearch(evt.target.value)
  }

  const handleSubmit2 = async (evt) => {
    evt.preventDefault()
    let response = await axios.get(`${BASE_URL}courses/${courseId}`, search)
    setSearchResults(response.data)
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

        <select
          className="input"
          type="text"
          id="grade"
          onChange={handleChange}
        >
          <option value="0"></option>
          {grade.map((scores) => (
            <option value={scores.id} key={scores.id}>
              {scores.score}
            </option>
          ))}
        </select>
      </form>
      <div>
        {courses.map((course) => (
          <ul key={course.id}>
            <h2>{course.name}</h2>
            <h3>{course.students.name}</h3>
            <h4>{course.result.score}</h4>
          </ul>
        ))}
        <form onSubmit={handleSubmit2}>
          <select id="course" onChange={handleId}>
            <option></option>
            {courses.map((course) => (
              <option value={course.id} key={course.id}>
                {course.name}
              </option>
            ))}
          </select>
          <select id="students" onChange={handleChange2}>
            <option></option>
            {students.map((student) => (
              <option value={student.id} key={student.id}>
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
