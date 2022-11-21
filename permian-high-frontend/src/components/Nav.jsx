import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='navbar'>
      <h4>Permian High</h4>
      <div>
        <Link to='/'><li>Home</li></Link>
        <Link to='/students'><li>Students</li></Link>
        <Link to='/courses'><li>Courses</li></Link>
        <Link to='/creation'><li>Create Course</li></Link>
      </div>
    </nav>
  )
}

export default Nav