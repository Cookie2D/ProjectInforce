import axios from 'axios'
import {useEffect, useState} from "react";
import './components/Card/card.css'
import Card from "./components/Card/Card";

import './components/Pagination/pagination.css'
import Pagination from "./components/Pagination/Pagination";

function App() {
  const dataURL = 'https://jsonplaceholder.typicode.com'

  const [posts, setPosts] = useState([]);
  const [currentPosts, setCurrentPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`${dataURL}/posts`)
      .then(res => {
        setPosts(res.data)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="App">
      {currentPosts.map((card) => <Card card={card} key={card.id}/>)}

      <Pagination
        setCurrentPosts={setCurrentPosts}
        posts={posts}
      />
    </div>
  );
}

export default App;
