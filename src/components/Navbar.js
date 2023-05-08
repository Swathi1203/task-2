import React from 'react'

function Navbar({loadUsers}) {
  return (
    
       <nav>
      <div className="navbar-brand"><img src="https://t3.ftcdn.net/jpg/04/85/04/54/360_F_485045405_lq8P8NZohEGlllUU57pweBl5e4MaywCG.jpg" height="50px"></img>Grow</div>
      <button className="btn btn-primary" onClick={loadUsers}>
        Get Users
      </button>
    </nav>
    
    
  )
}

export default Navbar;
