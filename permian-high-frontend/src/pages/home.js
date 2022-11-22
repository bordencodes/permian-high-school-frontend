import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-header">
        Welcome to Permian High School, home of the Panthers!
      </div>
      <br />
      <div className="home-items">
        <div className="home-info">
          School Info
          <div className="home-image">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Ixu9RyC6lL7UiQxeIYOB4QHaE7%26pid%3DApi&f=1&ipt=55f9f08a62f92e5e113adf7664f741411329a154cd6c1810bc44706482264815&ipo=images"></img>
          </div>
        </div>
        <Link to={'/students'}>
          <div className="home-students">Students</div>
          <div className="home-image">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Ixu9RyC6lL7UiQxeIYOB4QHaE7%26pid%3DApi&f=1&ipt=55f9f08a62f92e5e113adf7664f741411329a154cd6c1810bc44706482264815&ipo=images"></img>
          </div>
        </Link>
        <Link to={'/courses'}>
          <div className="home-courses">Courses</div>
          <div className="home-image">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Ixu9RyC6lL7UiQxeIYOB4QHaE7%26pid%3DApi&f=1&ipt=55f9f08a62f92e5e113adf7664f741411329a154cd6c1810bc44706482264815&ipo=images"></img>
          </div>
        </Link>
        <div className="home-athletics">
          Permian Athletics
          <div className="home-image">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Ixu9RyC6lL7UiQxeIYOB4QHaE7%26pid%3DApi&f=1&ipt=55f9f08a62f92e5e113adf7664f741411329a154cd6c1810bc44706482264815&ipo=images"></img>
          </div>
        </div>
      </div>
      <div className="background"></div>
    </div>
  )
}

export default Home
