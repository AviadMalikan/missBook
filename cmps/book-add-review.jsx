
import { bookService } from "../services/book.service.js"

export function BookAddReview() {


    return <section className="book-add-review">
        <h2>Add Your review!</h2>
        <form action="">
            <div className="name-input">

                <label htmlFor="userName">Your name:</label>
                <input type="text"
                    id="userName"
                    name="txt"
                    placeholder="Your name"
                // value={}
                // onChange={handleEvent}
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
                    // onChange={handleEvent}
                    />
                </div>
                <div className="date-input">
                    <label htmlFor="date">When you read it ??</label>
                    <input type="date"
                        id="date"
                        name="date"
                        min="2000-01-02"
                    // value={}
                    // onChange={handleEvent}
                    />
                </div>
            </div>


        </form>


    </section>
}