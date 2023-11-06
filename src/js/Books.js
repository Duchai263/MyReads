import { useEffect, useState } from "react";
import * as BookAPI from "./BooksAPI";
import BookShelfChanger from "./BookShelfChanger";
import "../css/Book.css"
function Books({bookID,updateBooks}){
  const [book,setBook] = useState("")

  useEffect(() => {
    const fetchBook = async () => {
      await BookAPI.get(bookID)
      .then((res) => setBook(res))
    }
    fetchBook()
  },[])


  if (book) 
  return( 
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 192,
            backgroundImage:
              `url(${book["imageLinks"]["thumbnail"]})`,
          }}
        ></div>
        <BookShelfChanger book={book} updateBooks={updateBooks}/>
      </div>
      <div className="book-title">{book["title"]}</div>
      <div className="book-authors">{book["authors"]}</div>
    </div>)
}
      
export default Books