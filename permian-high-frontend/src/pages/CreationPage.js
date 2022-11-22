import axios from 'axios'
import { useEffect, useState } from 'react'
import { BASE_URL } from '../services/api'

const CreationPage = () => {
  const [grade, setGrade] = useState([])
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
    <div>
      <div className="course-form-container">
        <form onSubmit={handleSubmit}>
          <label className="label" htmlFor="name">
            Course Name:
          </label>
          <input
            className="input"
            type="text"
            id="name"
            value={formState.name}
            onChange={handleChange}
            required
          />
          <br />
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
          <br />
          <label className="label" htmlFor="grade">
            Student:
          </label>
          <select className="input" id="studentId" onChange={handleChange}>
            <option value="0"></option>
            {students.map((student) => (
              <option value={student.id} key={student.id}>
                {student.name}
              </option>
            ))}
          </select>
          <button className="course-form-button" type="submit">
            Submit
          </button>
        </form>
        <br />
        <div>
          <br />
          <label className="label" htmlFor="grade">
            Search By:
          </label>
          <form onSubmit={getCourse}>
            <select className="input" id="name" onChange={handleChange2}>
              <option value="0">Class</option>
              <option>Bio</option>
              <option>History</option>
              <option>Math</option>
              <option>Gym</option>
              <option>Science</option>
              <option>Physics</option>
            </select>
            <select className="input" id="studentId" onChange={handleChange2}>
              <option>Student Name</option>
              {students.map((student) => (
                <option value={Number(student.id)} key={student.id}>
                  {student.name}
                </option>
              ))}
            </select>
            <button className="course-form-button" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
      {searchResults.length !== 0 ? (
        <div className="course-container">
          <section className="grid container-course">
            <ul key={searchResults.id} className="students2">
              <h2 className="student-title">{searchResults.name}</h2>
              <h3 className="grade-container">{searchResults.students.name}</h3>
              <h4 className="grade-container">{searchResults.result.score}</h4>
            </ul>
          </section>
        </div>
      ) : null}
    </div>
  )
}

export default CreationPage
