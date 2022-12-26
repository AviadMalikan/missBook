
import { ReviewDetails } from "../cmps/book-review-detail.jsx"

export function BookReviewsList({ book }) {


    if (!book.reviews) return <section className="book-reviews-container">
        <h2>No review yet...</h2>
    </section>

    return <section className="book-reviews-container">

        <h2>See some reviews:</h2>
        <table>
            <ReviewDetails book={book} />
        </table>
    </section>
}