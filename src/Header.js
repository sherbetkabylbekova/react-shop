import Logo from "./logo";
import Nav from "./Nav";
import "./Header.css"
const Header = () =>{
    return (
<header className="header">
    <div className="container flex">
        <Logo />
        <Nav />
    </div>
</header>
    )
}
export default Header