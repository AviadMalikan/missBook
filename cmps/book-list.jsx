const { Link } = ReactRouterDOM

import { BookPreview } from "./book-preview.jsx"

export function BookList({ books, onRemoveBook, onSelectCar }) {

    return <ul className="book-list clean-list ">
        {
            books.map(book => {
                return <li key={book.id} className="book-card ">
                    <BookPreview book={book} />
                    <div>
                        <button onClick={() => onRemoveBook(book.id)}>Remove</button>
                        <Link to={`/book/${book.id}`}> <button>Details</button> </Link>
                    </div>
                </li>
            })
        }
    </ul>
}

