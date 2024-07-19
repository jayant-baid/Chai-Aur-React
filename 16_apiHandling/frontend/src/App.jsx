import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Handle race condition, jo req pehle gyi h uska data pehle aae, jo baad me gyi h uska data baad me aae
    const controller = new AbortController();
    (async () => {
      try {
        setError(false);
        setLoading(true);
        const res = await axios.get("/api/products?search=" + search, {
          signal: controller.signal,
        });
        console.log(res);
        setProducts(res.data);
        setLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Req canelled", error.message);
          return;
        }
        setError(true);
        setLoading(false);
      }
    })();

    
    return () => {
      // cleanup code
      controller.abort();
    };
  }, [search]);

  // const [products, error, loading] = customReactQuery("/api/products");

  // if(error)
  //   return <h1>Something Went Wrong</h1>

  // if(loading)
  //   return <h1>Loading...</h1>
  return (
    <>
      <h1>Chai aur API</h1>
      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {loading && <h1>Loading...</h1>}
      {error && <h1>Something Went Wrong</h1>}
      <h2>Number of Products are: {products.length}</h2>
    </>
  );
}

export default App;

// const customReactQuery=(urlPath)=>{
//   const [products, setProducts] = useState([]);
//   const [error, setError]=useState(false);
//   const [loading, setLoading]=useState(false);

//   useEffect(() => {
//     (async () => {
//       try {
//         setError(false);
//         setLoading(true)
//         const res = await axios.get(urlPath);
//         console.log(res);
//         setProducts(res.data)
//         setLoading(false)
//       } catch (error) {
//         setError(true);
//         setLoading(false);
//       }
//     })();
//   }, []);

//   return [products, error, loading]
// }
