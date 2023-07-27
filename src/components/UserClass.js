import React from 'react'

class UserClass extends React.Component {
    //constructor used : initialize state(recommended) , binding event handlers, passing props(recommended)
    // constructor(props) {
    //     super(props)
    //     // console.log('props from class' , props)
    //     this.state = {
    //         count: 0,
    //         userInfo: {
    //             name: 'dummy name',
    //             location: 'default location',
    //             node_id: 'dummy node id'
    //         }
    //     }
    //     console.log(this.props.name + 'child constructore')
    // }
    state = {
        count: 0,
        userInfo: {
            name: 'dummy name',
            location: 'default location',
            node_id: 'dummy node id'
        }
    }

    async componentDidMount() {

        console.log(this.props.name + 'componenDidMount child is called')

        const response = await fetch('https://api.github.com/users/bndu2002')

        const json = await response.json()

        console.log("data from componnetDidMount", json)

        this.setState({
            userInfo: json
        })

      //  this.timer = setInterval(() => console.log('coming from setInterval'), 1000)
    }

    componentDidUpdate() {
        console.log('component updates')

    }

    componentWillUnmount() {
        console.log('component unmounted')
       // clearInterval(this.timer)
    }

    render() {
        console.log(this.props.name + 'child render')

        return <div className='user_card'>
            <h1>From Class Compo</h1>
            <h2>Name : {this.state.userInfo.login}</h2>
            <h2>Node Id : {this.state.userInfo.node_id}</h2>
            <button onClick={() => {
                this.setState({
                    count: this.state.count + 1
                })
            }}>Count Increase</button>
            <h3>Count : {this.state.count}</h3>
            <h3>location : {this.props.location}</h3>
        </div>
    }
}

export default UserClass