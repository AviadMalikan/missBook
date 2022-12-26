const { useState, useEffect } = React

import { bookService } from "../services/book.service.js"


export function BookFilter({ onSetFilter }) {

    const [filterByToEdit, setFilterByToEdit] = useState(bookService.getDefaultFilter)

    useEffect(() => {
        onSetFilter(filterByToEdit)
    }, [filterByToEdit])

    function handleEvent({ target }) {
        let { value, name: field, type } = target
        value = (type === "number") ? +value : value
        setFilterByToEdit((prevFilter) => {
            return { ...prevFilter, [field]: value }
        })
    }

    return <section className="book-filter">
        <h2>Looking for something more specific ?</h2>
        <form>
            {/* <label htmlFor="bookName">Book name:</label> */}
            <input type="text"
                id="bookName"
                name="txt"
                placeholder="Book name"
                value={filterByToEdit.txt}
                onChange={handleEvent}
            />

            {/* <label htmlFor="maxPrice">Max price:</label> */}
            <input type="number"
                id="maxPrice"
                name="maxPrice"
                placeholder="Max price"
                value={filterByToEdit.maxPrice}
                onChange={handleEvent}
            />
        </form>
    </section>
}