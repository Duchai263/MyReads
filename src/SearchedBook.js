import BookShelfChanger from "./BookShelfChanger";


function SearchedBook({book,updateBooks}) {
    // console.log(book)
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

export default SearchedBook