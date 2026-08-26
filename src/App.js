
import React from "react"
import reactDOM from "react-dom/client"
import Header from "./components/Header"
import Footer from "./components/Footer"

import Body from "./components/Body"



const AppLayout = ()=>{
    return(
        <div className="app">
            {/* header */}
            <Header></Header>
            {/* body */}
            <Body></Body>
            {/* footer */}
            <Footer></Footer>

        </div>
    )
}


const root = reactDOM.createRoot(document.querySelector("#root"))
root.render(<AppLayout/>)



























// import React from "react";
// import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "this is mr vikrant",
// );
// console.log(heading)





// // React elemeent

// const reactElem = (
//     <h1>Thsi is react elemnt</h1>
// )

// // React Functional componenet


// const ReactComponent = ()=>{
//     return (
//         <>
        
//          {reactElem}
//         <h1>This is my react componnret</h1>
//         </>
       
//     )
// }


// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<ReactComponent/>);
 








// import react from "react"
// import reactDOM from "react-dom/client"

// // react element real wala
// // const reactEleme = react.createElement("h1" , {"id":"header"} ,"thsi is the child")


// // reactEleme throuh jsx

// const ReactComponent2 =()=>{
//     return (
//         <>
        
//         <h1>this is the inside react elem</h1>
//         </>
//     )
// }

// const reactElem = (
//     <>
//       <ReactComponent2/>
//     <h1>this is react element by jsx</h1>
//     </>
  

// )



// // react functional component

// const ReactComponent =()=>{
//     return (
//         <>
//         {reactElem}
//         <h1>this is the react componenet</h1>
//         </>
//     )
// }
// const ReactComponent3 =()=><h1>this is the react componenet</h1>
// const ReactComponent4 =()=>(
//             <>
//         {reactElem}
//         <h1>this is the react componenet</h1>
//         </>
// )

// const ReactComponent =()=>{
//     return 
    
  
//         <h1>this is the react componenet</h1>

    
// }



// // Name: Vikrant
// // Learning React
// const vikrant= (
//     <h1>Learning react</h1>
// )



// // My name is Vikrant
// // I am learning React

// const Welcome = ()=>{
//     return(
//         <>
//         <h1>Welcome to my channel</h1>
//         </>
//     )
// }

// const ElemReact = ()=>{
// return (    <>
// <Welcome/>
//     <h1>My name is Vikrant</h1>
//     <h2>I am learning React</h2>
//     </>)
// }


// const A = () => <h1>A</h1>;

// const B = () => (
//     <>
//         <A />
//         <h2>B</h2>
//     </>
// );

// root.render(<B />);

// //A
// //B

// const App = () => {
//     return
//     (
//         <h1>Hello</h1>
//     )
// }

// //ig nhi chalege due to App name but sabkuch sahi to h isme

// const reactRoot = reactDOM.createRoot(document.getElementById("root"))

// reactRoot.render(<ReactComponent/>)





// import react from "react"
// import reactDOM from "react-dom/client"

// // const header = react.createElement("h1" , {"id":"heder"} ,"this is the react element")

// const header = (
//     <>
//     <h1>this is also the react element</h1>
//     </>
// )

// // functionsl componet
// const Header = ()=>{
//     return (
//         <>
//         {header}
//         <h1>this is the functional component of react</h1>
//         </>
//     )
// }




// const root= reactDOM.createRoot(document.querySelector("#root"))

// root.render(<Header/>)





