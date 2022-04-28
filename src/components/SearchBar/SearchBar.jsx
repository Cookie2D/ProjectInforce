import React, {useContext} from 'react';
import {inputContext} from "../../context/inputContext";
import './searchBar.css'

const SearchBar = ({posts, setPosts}) => {
  const {setSearchInput, searchInput, setFocused} = useContext(inputContext)

  function search(e) {
    e.preventDefault();
    const searchedPosts = posts.filter(post => {
      return post.title.includes(searchInput) //|| post.body.includes(input)
    })

    setPosts(searchedPosts);
    setSearchInput('');
  }

  function inputChanges(e) {
    const input = e.target.value;
    setSearchInput(input)
  }

  const onFocus = () => setFocused(true)
  const onBlur = () => {
    setTimeout(() => {
      setFocused(false)
    }, 100)
  }

  return (
    <form onSubmit={(e) => search(e)}>
      <div className="search">
        <input
          type="text"
          className="searchTerm"
          placeholder="Search..."
          value={searchInput}
          onChange={inputChanges}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <button type="submit" className="searchButton">
          Go
        </button>
      </div>
    </form>
  )
    ;
};

export default SearchBar;