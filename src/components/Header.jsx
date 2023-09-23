import user1 from '../assets/user_icon.png'

import Image from 'react-bootstrap/Image';

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light px-2">
      <a className="navbar-brand" href="#">Genie</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About Us</a>
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