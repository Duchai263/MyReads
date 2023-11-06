import Books from "./Books";
import "../css/BookShelf.css"
// function renderBook(books,key) {
//   if(books[key]) {
//     return books[key].map((bookID) => <Books bookID={bookID}/>)
//   }
// }

function BookShelf({shelves, books, updateBooks}) {
  return (<>
    {shelves.map((shelf, index) => (
      <div key={index} className="bookshelf">
        <h2 className="bookshelf-title">{shelf.name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {/* {
              console.log(books[shelf["key"]])
            } */}
            {/* <Books list={books[shelf["key"]]}/> */}
            {/* <renderBook books={books} key={shelf["key"]}/> */}
            {books[shelf["key"]] && books[shelf["key"]].map((bookID) => <li key={bookID}> <Books bookID={bookID} updateBooks={updateBooks}/> </li>) }
          </ol>
        </div>
      </div>
    ))}
    </>)
}

export default BookShelf;