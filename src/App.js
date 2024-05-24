
import { useEffect,useState } from 'react';
import './App.css';

function App() {
  const [value,setValue]=useState("");
  useEffect(()=>{
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
    
    fetch("https://vscodelink.vercel.app/", requestOptions)
      .then((response) => response.text())
      .then((result) => setValue(result))
      .catch((error) => console.error(error));
  },[]);
  return (
    <>
    <h1>this is my page</h1>
    </>
  );
}

export default App;
