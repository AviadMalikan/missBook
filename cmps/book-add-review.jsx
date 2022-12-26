const { useState, useEffect } = React
const { useNavigate } = ReactRouterDOM

import { bookService } from "../services/book.service.js"

export function BookAddReview({ book }) {
    const [review, setReview] = useState(bookService.getEmptyReview())
    const navigate = useNavigate()

    function handleEvent({ target }) {
        let { value, type, name: field } = target
        // console.log('value: ', value)

        value = (type === 'number') ? +value : value
        setReview((prevReview) => ({ ...prevReview, [field]: value })
        )
    }

    function onSaveReview(ev) {
        ev.preventDefault()
        bookService.addReview(book, review)
            .then((book) => console.log('book: ', book))

        navigate('/book')
    }

    return <section className="book-add-review">
        <h2>Add Your review!</h2>
        <form onSubmit={onSaveReview}>
            <div className="name-input">
                <label htmlFor="userName">Your name:</label>
                <input type="text"
                    id="userName"
                    name="txt"
                    placeholder="Your name"
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
                    <label htmlFor="date">When you read it ??</label>
                    <input type="date"
                        id="date"
                        name="date"
                        min="2000-01-02"
                        // value={}
                        onChange={handleEvent}
                    />
                </div>
            </div>
            <button>Add!</button>

        </form>


    </section>
}