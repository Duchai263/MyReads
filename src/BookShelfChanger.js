import * as BookAPI from "./BooksAPI";

function BookShelfChanger({book,updateBooks}) {
    function handleChange(event) {
        console.log(`${book.id} move to ${event.target.value}`)
        BookAPI.update(book,event.target.value)
        .then((res) => {updateBooks(res)})
      }
    return (<div className="book-shelf-changer" onChange={handleChange}>
    <select defaultValue="none">
        <option value="none" disabled>
        Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
    </select>
    </div>)
}

export default BookShelfChanger