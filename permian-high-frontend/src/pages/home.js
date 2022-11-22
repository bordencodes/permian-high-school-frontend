import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home">
      <div className="welcome">
        Welcome to Permian High School, home of the Panthers!
      </div>
      <div className="school-grid">
        <div className="cell1">School Info</div>
        {/* <Link to={'/students'}>
          <div className="cell2">Students</div>
        </Link>
        <Link to={'/courses'}>
          <div className="cell3">Courses</div>
        </Link> */}
        <div className="cell1">Permian Atletics</div>
      </div>
    </div>
  )
}

export default Home
