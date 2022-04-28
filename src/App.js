import axios from 'axios'
import {useEffect, useState} from "react";
import './components/Card/card.css'
import Card from "./components/Card/Card";

import './components/Pagination/pagination.css'
import Pagination from "./components/Pagination/Pagination";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const dataURL = 'https://jsonplaceholder.typicode.com'

  const [data, setData] = useState({});
  const [posts, setPosts] = useState([]);
  const [currentPosts, setCurrentPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`${dataURL}/posts`)
      .then(res => {
        setData(res);
        setPosts(res.data);
        setLoading(false);
      })
  }, [])

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="App">
      <SearchBar posts={data.data} setPosts={setPosts}/>

      {Object.keys(posts).length === 0
        ? <h1>Zero post found...</h1>
        : <>
          <div className="card-list">
            {currentPosts.map((card) => <Card card={card} key={card.id}/>)}
          </div>

          <Pagination
            setCurrentPosts={setCurrentPosts}
            posts={posts}
          />
        </>
      }
    </div>
  );
}

export default App;
