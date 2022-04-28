import axios from 'axios'
import {useEffect, useState} from "react";
import './components/card/card.css'
import Card from "./components/card/Card";

function App() {
  const dataURL = 'https://jsonplaceholder.typicode.com'
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(`${dataURL}/posts`)
      .then(res => {setPosts(res.data)
        console.log(res)})
  }, [])

  return (
    <div className="App">


      {posts.map((card) => <Card card={card} key={card.id} />)}



    </div>
  );
}

export default App;
