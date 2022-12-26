


export function BookPreview({ book }) {
    const priceList = book.listPrice

    return <article className="book-card1">
        <h2>{book.title}</h2>
        <img src={book.thumbnail} alt={book.title} />
        <section className="card-content">
            <h3>Description:</h3>
            <h3 className={priceList.isOnSale ? 'red-text' : ''}>
                price:
                <span > {priceList.amount}</span>
                <span className="price"> {priceList.currencyCode}</span>
            </h3>
            <p>{book.subtitle}</p>
        </section>
    </article>
}