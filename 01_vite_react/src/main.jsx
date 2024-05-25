import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import React from "react";

// MyApp ke andar jo bhi likh rhe ho  woh end of the day parse hokar reactElement jesa object bann jata h
function MyApp() {
  return (
    <div>
      <h1>Custom App | chai</h1>
    </div>
  );
}

// Toh aagar directly isse bhej de toh fir parser ko parse karne ki jarurat nhi padegi aur ek step bach jaega
// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click Me to Visit GOOGLE",
// };

const anotherElement = (
  <a href="https://gmail.com" target="_blank">
    Visit GMAIL
  </a>
);

const anotherUser = "chai aur react";

const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "Click Me to Visit GOOGLE",
  anotherUser, // evaluated expression: variables idhar likhte h,
  anotherElement
  //   baki last me show hota h, even we can send another element here too
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // MyApp() // Yeh bhi chal jata h, func chahie idhar bs, pr esse likhenge nhi
  //   <MyApp />

  // <ReactElement/> // not able to execute, because idhar expect kia jata h ki aap func bhejoge,
  //   Object thodi esse execute hota h, usse toh directly likh dete h
  // ReactElement //Error: ReactElement is not a function
  // <App/>

  //   anotherElement // running successfully
  reactElement
);

// ReactElement ka code toh customReact ke lie likha tha, and yaha pe react compile/interpret kar rha h, jo uske acc likhna hoga
// ReactElement ka syntax shi nhi h acc to react
