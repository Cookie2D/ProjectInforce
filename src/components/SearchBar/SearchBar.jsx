import React, {useState} from 'react';
import './searchBar.css'

const SearchBar = ({posts, setPosts}) => {
  const [input, setInput] = useState('');

  function search(e) {
    e.preventDefault()
    const searchedPosts = posts.filter(post => {
      return post.title.includes(input)
    })
    setPosts(searchedPosts);
  }

  return (
    <form onSubmit={(e) => search(e)}>
      <div className="search">
        <input
          type="text"
          className="searchTerm"
          placeholder="Search..."
          value={input}
          onChange={(e) => {setInput(e.target.value)}}
        />
          <button type="submit" className="searchButton">
            Go
          </button>
      </div>
    </form>
  );
};

export default SearchBar;