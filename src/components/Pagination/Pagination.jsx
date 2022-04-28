import React, {useEffect, useState} from 'react';
import './pagination.css';

const Pagination = ({setCurrentPosts, posts}) => {
  const pages = [];
  const pageLimit = 10;

  const [page, setPage] = useState(1);

  for (let i = 1; i <= Math.ceil(posts.length / pageLimit); i++) {
    pages.push(i);
  }

  useEffect(() => {
    const lastPostId = page * pageLimit;
    const firstPostId = lastPostId - pageLimit;
    setCurrentPosts(posts.slice(firstPostId, lastPostId));
  }, [page, posts])

  const handlePageChange = (page) => setPage(page)
  const incrementPage = () => {
    if (page < pages.length) {
      setPage(page + 1);
    }
  }
  const decrementPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  }


  return (
    <nav className="Pagination">
      <button onClick={() => decrementPage()} className="button">{"<"}</button>
      <div>
        {pages.map(num => (
          <button
            onClick={() => handlePageChange(num)}
            key={num}
            className={page === num ? "button active" : "button"}
          >
            {num}
          </button>)
        )}
      </div>
      <button onClick={() => incrementPage()} className="button">{">"}</button>
    </nav>
  );
};

export default Pagination;