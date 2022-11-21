import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <div className='header'>Permian High School</div>
      <div className='navbar'>
        <Link to='/'>Home</Link>
        <Link to='/students'>Students</Link>
        <Link to='/courses'>Courses</Link>
      </div>
    </nav>
  )
}

export default Nav