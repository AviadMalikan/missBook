

export function GoogleBookPreview({ books, addBook }) {



    return <ul className="clean-list ">
        {books && books.map((book) => <li key={book.googleId}>
            {book.title}
            <button onClick={() => addBook(book.googleId)}>+</button>
        </li>)}
    </ul>

}