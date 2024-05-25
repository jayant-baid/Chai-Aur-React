/* 
! Want to render <a></a> tag
Behind the scene, hum ek func likhenge, woh return karega and react kese 
dekhta h usse, woh dekhenge

*/

/*
! Older Code want modification to be reusable
function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type) // tag: reactElement.type
    domElement.innerHTML = reactElement.children;

    //! sirf ek h1, p tag aata toh dikat de deta, we have to modify our code, 
    //! because usme href target props nhi hoti
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);

    container.appendChild(domElement);
}
*/

function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;

  for (const prop in reactElement.props) {
    // pehle react ki props me hi children daaldia jata tha, so to avoid that, we use this
    if (prop === "children") continue;

    domElement.setAttribute(prop, reactElement.props[prop]);
  }

  container.appendChild(domElement);
}

// Simulate the way, how react do this, try to create a tree
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click Me to Visit GOOGLE",
};
// we have to create these reactElements for all other tags

const mainContainer = document.getElementById("root");

// Want a func which can render the react element created by us
customRender(reactElement, mainContainer);
