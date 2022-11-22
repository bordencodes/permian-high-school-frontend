import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-header">Home of the Panthers!</div>
      <br />
      <div>
        <img
          className="homescreen-img"
          src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fexternal-content.duckduckgo.com%2Fiu%2F%3Fu%3Dhttps%253A%252F%252Fstatic.hudl.com%252Fusers%252Ftemp%252F728368_eef4b2aa343e4f19a8193e4ba5669b25.jpg%26f%3D1%26nofb%3D1%26ipt%3Dc58065eebdf6e74756e3389e44a6748a137fc5f32ce03ea85fe393704950eb69%26ipo%3Dimages"
        ></img>
      </div>
      <br />
      <div className="home-items">
        <div className="home-info">
          School Info
          <div className="home-image">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.psMovsNzNCZZqBWjWBVbDQHaHa%26pid%3DApi&f=1&ipt=546229320a1313f1f2255c7bf4ed5c1ec4e21fb684369706a2172c8227d33541&ipo=images"></img>
          </div>
        </div>
        <Link to={'/students'}>
          <div className="home-students">Students</div>
          <div className="home-image">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.ejn-1Zj_YfRNOcNGrEsneAAAAA%26pid%3DApi&f=1&ipt=082efe8ca817b08a7e1d0a713e0eaee27cefbc2156f24db4444c570a73d3f822&ipo=images"></img>
          </div>
        </Link>
        <Link to={'/courses'}>
          <div className="home-courses">Courses</div>
          <div className="home-image">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.yn8LXQTdw2AqD_Mu6kBZmAHaEK%26pid%3DApi&f=1&ipt=b4f4b1ff2eae363f6fa910489083f375d918dfd2aa38ab2d0f4d3a2ff1792719&ipo=images"></img>
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
