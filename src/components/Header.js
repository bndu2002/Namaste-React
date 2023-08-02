import { useState } from "react"
import { LOGO_URL } from "./utils/constants"
import  {Link}  from "react-router-dom"
import useOnlineStatus from "./utils/useOnlineStatus"


const Header = () => {

    let btnName = 'Login'
    const [btnNameReact, setbtnNameReact] = useState('Login')

    const onlineStatus= useOnlineStatus()

    console.log('useOnlineStatus called HEADER ...........')

    const handleBtn = () => {
        console.log('before ==> ', btnName)
        //btnName => normal JS variable does not triggers the re-render hence UI is not updated though in console value changes
        btnName = 'Logout'
        console.log("after ==>", btnName)

        if (btnNameReact === 'Login') {
            setbtnNameReact("Logout")
        } else setbtnNameReact("Login")

    }

    return (
        <div className="header">
            <div className="logo_container"><img className="logo" src={LOGO_URL} alt="logo" /></div>
            <div className="nav_items">
                <ul>
                    <li>Online Status : {onlineStatus ? "✅" : "🔴" }</li>
                    <li><Link to="/">Home</Link></li>
                    <li><a href="/about">About Us</a></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li>Cart</li>
                    <button className="btn" onClick={handleBtn}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header