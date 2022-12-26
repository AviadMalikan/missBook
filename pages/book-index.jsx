const { useState, useEffect } = React


import { BookFilter } from "../cmps/book-filter.jsx"
import { BookList } from "../cmps/book-list.jsx"

import { bookService } from "../services/book.service.js"
import { eventBusService, showErrorMsg, showSuccessMsg } from "../services/event-bus.service.js"



export function BookIndex() {
    const [books, setBooks] = useState([])
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        loadBooks()
    }, [filterBy])

    function loadBooks() {
        bookService.query(filterBy)
            .then((booksToUpload) => {
                setBooks(booksToUpload)
                setIsLoading(false)
            })

    }

    function onSetFilter(filtersByFromFilter) {
        setFilterBy(filtersByFromFilter)
    }

    function onRemoveBook(bookId) {
        bookService.remove(bookId).then(() => {
            const updateBooks = books.filter((book) => book.id !== bookId)
            setBooks(updateBooks)
            showSuccessMsg('Car removed')
        })
            .catch((err) => {
                console.log('Had issues removing', err)
                showErrorMsg('Could not remove car, try again please!')
            })
    }

    return <section className="books-index">
        <div>
            <BookFilter onSetFilter={onSetFilter} />
            <h1>Our books:</h1>
            {!isLoading && < BookList
                books={books}
                onRemoveBook={onRemoveBook} />}

            {isLoading && <h1>Loading...</h1>}
            {(!books.length && !isLoading) && <h1>No Item to show...</h1>}


        </div>
    </section>
}