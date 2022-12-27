const { useState, useEffect } = React
const { useNavigate } = ReactRouterDOM

import { bookService } from "../services/book.service.js"

export function BookAddReview({ book, onSaveReview }) {
    const [review, setReview] = useState(bookService.getEmptyReview())
    const navigate = useNavigate()

    function handleEvent({ target }) {
        let { value, type, name: field } = target
        value = (type === 'number') ? +value : value

        setReview((prevReview) => ({ ...prevReview, [field]: value }))
    }

    function onSubmitReview(ev) {
        ev.preventDefault()
        if (review.fullName === '' || review.rate === '' ||
            review.readAt === '') return

        bookService.addReview(book, review)
            .then(book => console.log('Book From submit', book))
        navigate('/book')
    }

    return <section className="book-add-review">
        <h2>Add Your review!</h2>
        <form onSubmit={onSubmitReview}>
            <div className="name-input">
                <label htmlFor="fullName">Your name:</label>
                <input type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="ex Puki..."
                    // value={}
                    onChange={handleEvent}
                />
            </div>
            <div className="second-inputs">
                <div className="rate-input">
                    <label htmlFor="date">Your rate:</label>
                    <input type="number"
                        id="rate"
                        name="rate"
                        placeholder="⭐"
                        min="1"
                        max="5"
                        // value={}
                        onChange={handleEvent}
                    />
                </div>
                <div className="date-input">
                    <label htmlFor="readAt">When you read it ??</label>
                    <input type="date"
                        id="readAt"
                        name="readAt"
                        min="2000-01-02"
                        // value={}
                        onChange={handleEvent}
                    />
                </div>
            </div>
            <button className="add-review-btn">Add!</button>

        </form>


    </section>
}