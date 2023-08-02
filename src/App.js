import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import '../index.css'
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import RestroMenu from "./components/RestroMenu";

//import Grocery from "./components/Grocery";

//when large scale app split the code in 1+ bundles , right now we have only 1 bundle (only on JS file)
// Break down you app into smaller parts => [code chunking,dynamic import, code splitting, chunking, lazyLoding(on demand loading)]

const Grocery = lazy(() => import("./components/Grocery"))

const App = () => {
    return (
        <>
            {/* Header compo should be there on every route */}
            <Header />
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
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loding.....</h1>}><Grocery /></Suspense>
            }
        ]

    },

])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter} />)

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