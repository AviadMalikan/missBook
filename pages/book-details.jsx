const { useEffect, useState } = React
const { useParams, Link, useNavigate } = ReactRouterDOM

import { bookService } from "../services/book.service.js"
import { BookAddReview } from "../cmps/book-add-review.jsx"
import { BookReviews } from "../cmps/book-reviews.jsx"

export function BookDetail() {
    const [book, setBook] = useState(null)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadBook()
    }, [])

    function loadBook() {
        bookService.get(params.bookId)
            .then(setBook)
            .catch((err) => {
                console.log('Had issues in book detail: ', err)
                navigate('/book')
            })
    }

    function onGoBack() {
        navigate('/book')
    }

    function pageCountCategory(pageCount) {
        if (pageCount > 500) return 'Searious Reading'
        else if (pageCount > 200) return 'Descent Reading'
        else if (pageCount < 100) return 'Light Reading'
        else return ''
    }

    if (!book) return <div>Loading</div>
    return <section className="book-details">
        <button className="go-back-btn" onClick={onGoBack}> ← </button>

        <section className="book-content">
            {book.listPrice.isOnSale &&
                <img className="sale" src="img/sale-icon.svg" alt="on sale" />}

            <div className="book-header">
                <h1>{book.title}</h1>
                <h2>{book.subtitle}</h2>
            </div>
            <img src={book.thumbnail} alt={book.title} />

            <h5>{pageCountCategory(book.pageCount)}</h5>
            <h5>lang: [{book.language}]</h5>

            <h2>Description:</h2>
            <p>{book.description}</p>
            <h3 className={"price-container " + (book.listPrice.isOnSale ? '' : '')}>
                Price:
                <span > {book.listPrice.amount}</span>
                <span className="price"> {book.listPrice.currencyCode}</span>
            </h3>

        </section>
        <BookAddReview />
        
        <BookReviews />

    </section>
}