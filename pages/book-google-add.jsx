const { useState, useEffect } = React

import { GoogleBookPreview } from "../cmps/book-google-preview.jsx"
import { googleBookService } from "../services/google-book.service.js"
import { bookService } from "../services/book.service.js"
import { eventBusService, showErrorMsg, showSuccessMsg } from "../services/event-bus.service.js"


export function AddGoogleBook() {
    const [titleToSearch, setTitleToSearch] = useState('')
    const [books, setBooks] = useState('')

    useEffect(() => {
        loadBooks()
    }, [titleToSearch])



    function loadBooks() {
        googleBookService.query(titleToSearch)
            .then(prevBooks => setBooks(prevBooks))
    }

    function handleEvent({ target }) {
        let { value, name: field } = target
        console.log('value: ', value)
        setTitleToSearch((prevTitle) => prevTitle = value)
    }

    function onSubmitSearch(ev) {
        ev.preventDefault()
        googleBookService.query(titleToSearch)
            .then(prevBooks => setBooks(prevBooks))
    }

    function addBook(bookId) {
        googleBookService.get(bookId)
            .then((book) => {
                console.log('bookId: ', bookId)
                bookService.save(book)
            })
    }


    return <section>

        <h2>Looking for something more specific ?</h2>
        <form onSubmit={onSubmitSearch}>
            {/* <label htmlFor="bookName">Book name:</label> */}
            <input type="text"
                id="bookName"
                name="txt"
                placeholder="Book name"
                value={titleToSearch}
                onChange={handleEvent}
            />
        </form>

        <GoogleBookPreview books={books} addBook={addBook} />


    </section>
}