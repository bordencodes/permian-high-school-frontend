import axios from 'axios'
import { useEffect, useState } from 'react'

const CreationPage = () => {
  const [grade, setGrade] = useState([])
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
    await axios.post(
      'https://permian-high-backend.herokuapp.com/course',
      formState
    )
    setFormState(initialFormState)
  }

  const GetGrades = async () => {
    const res = await axios.get(
      'https://permian-high-backend.herokuapp.com/grades'
    )
    setGrade(res.data)
  }

  useEffect(() => {
    GetGrades()
  })

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
    </div>
  )
}

export default CreationPage
