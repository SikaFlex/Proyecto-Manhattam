import { Link, NavLink } from "react-router-dom"
import { Badge } from "@mui/material"
//desde la navbar con NavLink le decimo la ruta que queremos ir

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">AngelBotia</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink to='/' className="nav-item nav-link" href="#">Users <span className="sr-only">(current)</span></NavLink>
            <NavLink to='/login' className="nav-item nav-link" href="#">Login</NavLink>
            <NavLink to='/clima' className="nav-item nav-link" href="#">Clima</NavLink>
            <NavLink to='/compras' className="nav-item nav-link" href="#">Compras🤑</NavLink>
          </div>
          <Badge badgeContent={1} color="primary">
            <NavLink  to='/carrito' className="nav-link active">🛒</NavLink>
          </Badge>


        </div>
      </nav>
    </>

  )
}
