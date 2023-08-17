import React from "react";
import ReactDOM from "react-dom/client";
import '../index.css'
import Header from "./components/Header";
import Body from "./components/Body";
import { Routes, Route } from 'react-router-dom';
import About from "./components/About";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import RestroMenu from "./components/RestroMenu";

const App = () => {
    return (
        <>
            {/* Header compo should be there on every route hence not mapped in app=Router */}
            <Header />

            {/* when passed children to show them dynamically as per the routw need <Outlet/>. it gets replaced with the corresponding compo to the route */}
            {/* outlet gets replaced with the children matching the route */}
            <Outlet />

        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />

            },
            {
                path: "/about",
                element: <About />

            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restraunts/:resId",
                element: <RestroMenu />
            }
        ]
    },


])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter} />)
// //React Element using Core React
// const heading = React.createElement('h1', { id: 'heading' }, "Namaste React 🚀")

// console.log('heading ==>', heading)

// //React Element using JSX
// //JSX => React.createElement ( By Babel) => React Elem => JS Object => HTML Elem
// const jsxHeading = (<div><h1 id="heading">Namste React in JSX</h1><h2>Namaste React in JSX Heading 2</h2></div>) //Eqivalent to React Element

// console.log('jsxHeading ==>', jsxHeading)

// //heading === jsxHeading

// const Title = () => {
//     return <h1>Coming From Title Compo</h1>
// }

// //Component Composition => rendring Title compo in HeadingCompo
// const HeadingCompo = () => {
//     return <div>
//         <h1>Coming From Heading Functional Compo</h1>
//         <Title />
//         {Title()}
//         <Title></Title>
//         {jsxHeading}
//     </div>
// }

// const BodyCompo = ()=>{
//     return <h1>From BodyCompo</h1>
// }

// const Root2Compo = ()=>{
//     return <h2>Root2 compo</h2>
// }
// const root = ReactDOM.createRoot(document.getElementById('root'))

// const root2 = ReactDOM.createRoot(document.getElementById('root2'))

// root.render(<><HeadingCompo /><Title/><BodyCompo/> </>)

// root2.render(<Root2Compo/>)

// const heading2 = React.createElement(
//     "h1",
//     { id: 'heading' }, //here give attributes to the tags
//     "hello world , coming from REACT !!"//children
// );
// console.log('heading2 is here', heading2)

// //heading2 is a React Elem that is an  JS Object
// //   heading2 is here
// // $$typeof: Symbol(react.element)
// // key: null
// // props: {id: 'heading', children: 'hello world , coming from REACT !'}
// // ref: null
// // type: "h1"
// // _owner: null
// // _store: {validated: false}
// // _self: null
// // _source: null
// // [[Prototype]]: Object


// //how to create Nested Elemnts ?
// //how siblings ? [chidren]
// //looks UGLY ?  hence JSX
// const parent = React.createElement(
//     'div', { id: 'parent' }, [React.createElement('div',
//         { id: 'child1' }, [React.createElement('h1',
//             {}, 'hello i am grand children 1'), React.createElement('h1', {}, 'hi i am grabd children 2')])], React.createElement('div',
//                 { id: 'child2' }, [React.createElement('h1',
//                     {}, 'hello i am grand children 1'), React.createElement('h1', {}, 'hi i am grabd children 2')]))

// console.log('parent', parent)

// const root = ReactDOM.createRoot(document.getElementById("root")); //creating root

// //take the heading2 Object create the html tag that browser understand and put it in the root
// root.render(parent); //appending/rendering child(h1) in div root