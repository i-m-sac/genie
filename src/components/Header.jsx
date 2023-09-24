import user1 from '../assets/user_icon.png'
import logo from '../assets/genie_logo.png'

import Image from 'react-bootstrap/Image';

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light px-2">
      <img className='mr-3' src={logo} style={{ height: '80px'}} alt="genie" />

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            {/* <h2>Genie</h2> */}
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <Image src={user1} roundedCircle className='img-thumbnail' style={{ height: '40px'}} />
          <a className='text-primary ml-2 text-decoration-none' href=''>Alladin Doe</a>
        </form>
      </div>
    </nav>
  )

}