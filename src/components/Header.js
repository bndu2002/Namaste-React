import { useContext, useState } from "react"
import { LOGO_URL } from "./utils/constants"
import  {Link}  from "react-router-dom"
import useOnlineStatus from "./utils/useOnlineStatus"
import UserContext from "./utils/UserContext"


const Header = () => {

    let btnName = 'Login'
    const [btnNameReact, setbtnNameReact] = useState('Login')

    const onlineStatus= useOnlineStatus()

    const {loggedinUser} = useContext(UserContext)

    console.log('context data from header ====>' , loggedinUser)

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
        <div className="flex justify-between bg-pink-300 shadow-lg mb-2 md:bg-yellow-300" >
            <div className="logo_container"><img className="w-44 h-28" src={LOGO_URL} alt="logo" /></div>
            <div className="flex items-center ">
                <ul className="flex p-4 m-4 font-bold text-[23px] ">
                    <li className="px-4">Online Status : {onlineStatus ? "✅" : "🔴" }</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><a href="/about">About Us</a></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4"> Cart</li>
                    <button className="px-4" onClick={handleBtn}>{btnNameReact}</button>
                    <li className="font-bold">{loggedinUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header