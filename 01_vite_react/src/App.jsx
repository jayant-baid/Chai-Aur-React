import Chai from "./Chai";
function App() {
  const userName='Jayant Baid'
  return (
    <> 
    {/* <></> : fragment, return this single one */}
    {/* {userName}: evaluated Expression: final outcome hi likhte h*/}
      <h1>{userName} | Chai Aur React</h1>
      <p>Creating react app using vite</p>

      <Chai/>
    </>
  );
}

export default App;
