import React from 'react'
import User from './User'
import UserClass from './UserClass'
import Bandu from './BnduClass'

// function About() {
//   return (
//     <div>
//       <h1>About</h1>
//       {/* <User name={"Vandana Sharma (function)"}/> */}
//       <UserClass name={"Vandana Sharma (classs)"} location={'himachal paradesh'}/>
//       </div>
//   )
// }

class About extends React.Component {
  constructor(props){
    super(props)
    console.log('parent constructore')
  }
 
  render() {
    console.log('parent render')
    return <>
      <div>
        <h1>About</h1>
        
        <UserClass name={"Vandana Sharma (classs)"} location={'himachal paradesh'} />
        {/* <UserClass name={"Yuzuru Hanyu (classs)"} location={'USA'} /> */}
        <Bandu favSport = {'figure skating'} favAthelete = {'Yuzuru Hanyu'}/>
      </div>
    </>
  }
  componentDidMount(){console.log('componenDidMount parent is called')}
}

export default About