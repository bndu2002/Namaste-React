import { useState } from "react"
import { LOGO_URL } from "./utils/constants"
const Header = () => {

    let btnName = 'Login'
    const [btnNameReact, setbtnNameReact] = useState('Login')

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
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="btn" onClick={handleBtn}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header