const { useEffect, useState } = React
const { useParams, Link, useNavigate } = ReactRouterDOM

import { bookService } from "../services/book.service.js"
import { BookAddReview } from "../cmps/book-add-review.jsx"
import { BookReviewsList } from "../cmps/book-review-list.jsx"

export function BookDetail() {
    const [book, setBook] = useState(null)
    const [nextBookId, setNextBookId] = useState(null)
    const [prevBookId, setPrevBookId] = useState(null)
    const { bookId } = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        loadBook()
    }, [bookId])

    function loadBook() {
        bookService.get(bookId)
            .then(setBook)
            .catch((err) => {
                console.log('Had issues in book detail: ', err)
                navigate('/book')
            })
        bookService.getNextBookId(bookId)
            .then(setNextBookId)
        bookService.getPrevBookId(bookId)
            .then(setPrevBookId)
    }

    function onGoBack() {
        navigate('/book')
    }

    function onSaveReview(bookToSAve) {
        console.log('bookToSave: ', bookToSave)

        const newBook = { ...bookToSAve }
        bookService.save(newBook)
            .then(setBook)
            .catch(console.log)
    }

    function pageCountCategory(pageCount) {
        if (pageCount > 500) return 'Searious Reading'
        else if (pageCount > 200) return 'Descent Reading'
        else if (pageCount < 100) return 'Light Reading'
        else return ''
    }

    if (!book) return <div>Loading</div>
    return <section className="book-details">
        <button className="go-back-btn" onClick={onGoBack}>
            <img src="img/books-icons.svg" alt="←" />
            Go back
        </button>

        <section className="book-content">

            {book.listPrice.isOnSale &&
                <img className="sale" src="img/sale-icon.svg" alt="on sale" />}

            <div className="book-header">
                <h1>{book.title}</h1>
                <h2>{book.subtitle}</h2>
            </div>
            <img src={book.thumbnail} alt={book.title} />
            <h3 className={"price-container " + (book.listPrice.isOnSale ? 'red-text' : '')}>
                Price:
                <span > {book.listPrice.amount}</span>
                <span className="price"> {book.listPrice.currencyCode}</span>
            </h3>

            <h5>{pageCountCategory(book.pageCount)}</h5>
            <h5>lang: [{book.language}]</h5>

            <h2>Description:</h2>
            <p>{book.description}</p>

            <div className="btn-container">
                <Link to={`/book/${prevBookId}`}>
                    <button>←</button>
                </Link>
                <Link to={`/book/${nextBookId}`}>
                    <button>→</button>
                </Link>
            </div>
        </section>

        <BookAddReview book={book} onSaveReview={onSaveReview} />

        <BookReviewsList book={book} />

    </section>
}