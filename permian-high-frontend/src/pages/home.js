import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-header">
        Welcome to Permian High School, home of the Panthers!
      </div>
      <br />
      <div className="home-items">
        <div className="home-info">School Info</div>
        <Link to={'/students'}>
          <div className="home-students">Students</div>
        </Link>
        <Link to={'/courses'}>
          <div className="home-courses">Courses</div>
        </Link>
        <div className="home-athletics">Permian Athletics</div>
      </div>
    </div>
  )
}

export default Home
