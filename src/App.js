import React, { useEffect} from "react";
import BookShelf from "./BookShelf";
import { useState } from "react";
import * as BookAPI from "./BooksAPI";
import SearchedBook from "./SearchedBook";


function App({shelves}){ 
  console.log("start")
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [books,setBooks] = useState([])
  const [message, setMessage] = useState("");
  const [searchResult,setSearchResult] = useState([])


  useEffect(() => {
    BookAPI.update("","read")
    .then((res) => setBooks(res))
  },[])

  let searchTimeout
  useEffect (() => {
      searchTimeout = setTimeout(() => {
          // console.log(message)

          if (message) {
              BookAPI.search(message)
              .then((res) => {
                if (!res["error"]) setSearchResult(res)
                else setSearchResult([])
              })
              // .catch((err) => {setSearchResult([])})
          }
      },2000)
      return () => clearTimeout(searchTimeout)
  }, [message])

  // useEffect(() => {
  //     console.log("Search Result: ",searchResult)
  // },[searchResult])
  

  return (
      <div className="app">
      {showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a
                className="close-search"
                onClick={() => setShowSearchpage(!showSearchPage)}
              >
                Close
              </a>
              <div className="search-books-input-wrapper">
                <input
                  type="text"
                  placeholder="Search by title, author, or ISBN"
                  id="searchBox"
                  onChange={event => setMessage(event.target.value)}
                  value={message}
                />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                  { searchResult && searchResult.map((result) => 
                  <li key={result["id"]}> <SearchedBook book={result} updateBooks={setBooks}/> </li>) }
              </ol>
            </div>
          </div>
        ) : (
      <div className="list-books">
      <div className="list-books-title">
      <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
      <div>
          <BookShelf
          shelves={shelves}
          books={books}
          updateBooks={setBooks}
          />
      </div>
      </div>
      <div className="open-search">
          <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
        </div>
  </div>)}
  </div>
  );
}

export default App;