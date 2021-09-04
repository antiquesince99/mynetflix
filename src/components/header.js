import { Link } from 'react-router-dom'

const Header = ()=>{
 return(
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" To="#" style={{ fontFamily: 'Courgette, cursive' , fontSize:'30px'}}>FavMovie<i class="fas fa-video" style={{marginLeft:'1rem' , color:'red'}}></i></Link>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li className="nav-item">
          <Link className="nav-link active" aria-current="page" To="">Home</Link>
        </li> */}
        <li className="nav-item" style={{marginLeft:'1rem' , fontFamily: 'Nunito sans-serif'}}>
          <Link className="nav-link" to="/home" style={{color:'aliceblue'}}>Home</Link>
        </li>
        <li className="nav-item" style={{marginLeft:'1rem'}}>
          <Link className="nav-link" to="/webpage" style={{color:'aliceblue' , fontFamily: 'Nunito sans-serif'}}>Upcoming</Link>
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" To="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" To="#">Action</a></li>
            <li><a className="dropdown-item" To="#">Another action</a></li>
            <li><hr className="dropdown-divider"></li>
            <li><a className="dropdown-item" To="#">Something else here</a></li>
          </ul>
        </li> */}
        
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="searchBox"/>
        <button className="btn btn-outline-success" type="submit" style={{borderRadius:'50px'}}><i class="fas fa-search"></i></button>
        </form>
      </div>
    </div>
  </nav>
 )
}
export default Header