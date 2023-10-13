import { Link,NavLink } from "react-router-dom"
//desde la navbar con NavLink le decimo la ruta que queremos ir

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" href="#">Navbar</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink to='/' className="nav-item nav-link" href="#">Home <span className="sr-only">(current)</span></NavLink>
            <NavLink to='/login'className="nav-item nav-link" href="#">Login</NavLink>
            <NavLink to='/about'className="nav-item nav-link" href="#">About</NavLink>
            <NavLink to='/contact'className="nav-item nav-link" href="#">Contact</NavLink>
          </div>
        </div>
      </nav>
    </>

  )
}
