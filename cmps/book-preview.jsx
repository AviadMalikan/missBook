


export function BookPreview({ book }) {
    const priceList = book.listPrice

    return <article className="book-card1">
        <div className="img-container">
            <img src={book.thumbnail} alt={book.title} />
            <h3 className={"price-container " + (priceList.isOnSale ? 'red-text' : '')}>
                price:
                <span > {priceList.amount}</span>
                <span className="price"> {priceList.currencyCode}</span>
            </h3>
        </div>
        <h2>{book.title}</h2>
        <section className="card-content">
            <h3>Description:</h3>
            <p>{book.subtitle}</p>
        </section>
    </article>
}