import {NavLink} from "react-router-dom";


const Navbar = () => {
  return (
    <div>
      <NavLink to ="/" >Ana Sayfa</NavLink>
      <NavLink to ="/blog" >Blog</NavLink>
      <NavLink to ="/hakkinda" >Hakkında</NavLink>
    </div>
  )
}

export default Navbar
