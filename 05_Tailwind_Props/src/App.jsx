import "./App.css";
import Card from "./components/Card";

function App() {
  // let myObject={
  //   userName: "jayant",
  //   age:21
  // }
  // let newArr=[1,2,3]
  return (
    <>
      <h1 className="bg-green-500 text-black p-4 rounded-xl mb-4">
        Tailwind Test
      </h1>
      {/* <Card channel="jayantbaid" someObj={myObject} newArr={newArr} /> */}
      <Card username="jayantbaid" btnText={'Click Me'} />
      <Card username={"j2 plays"}/>
    </>
  );
}

export default App;
