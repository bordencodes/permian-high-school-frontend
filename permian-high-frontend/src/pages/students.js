import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../services/api'
import { useParams } from 'react-router-dom'

const Students = () => {
  const [courses, setcourses] = useState([])
  const [students, setStudents] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [courseId, setCourseId] = useState()
  const [search, setSearch] = useState()
  const { id } = useParams()

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

  const handleChange = (evt) => {
    setCourseId({ studentId: evt.target.value })
  }
  const handleChange = (evt) => {
    setSearch({ studentId: evt.target.value })
  }

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
          <select id="course" onChange={}>
            <option></option>
            {courses.map((course) => (
              <option value={course.id} key={course.id}>
                {course.name}
              </option>
            ))}
          </select>
          <select id="students" onChange={handleChange}>
            <option></option>
            {students.map((student) => (
              <option value={student.id} key={student.id}>
                {student.name}
              </option>
            ))}
          </select>
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Students
