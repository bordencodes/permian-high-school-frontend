import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className="welcome">
        Welcome to Permian High School, home of the Panthers!
      </div>
      <div className="school-grid">
        <div className="cell1">School Info</div>
        <Link to={'/'}>
          <div className="cell2">Students</div>
        </Link>
        <Link to={'/'}>
          <div className="cell3">Courses</div>
        </Link>
        <div className="cell4">Permian Atletics</div>
      </div>
    </div>
  )
}

export default Home
