
// Importing the useEffect hook from the react library to make HTTP requests to the backend when the component mounts for the first time and display the response in the console of the browser for testing purposes.

import { useEffect } from "react";
const baseUrl = "https://backend-nft-vibe-plaza.onrender.com";

// Importing the Layout component
import Layout from "./components/Layout/Layout";

// Importing the axios library for making HTTP requests
import axios from "axios";

// Importing the App.css
import "./app.css";

function App() {

    useEffect(() => {
        axios.get(`${baseUrl}/api`).then((res) => {
        console.log(res)
    })
    }, [])  
// Layout component is rendered
  return <Layout />;
}

export default App;
