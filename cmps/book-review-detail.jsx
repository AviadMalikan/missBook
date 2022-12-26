

export function ReviewDetails({ book }) {
    console.log('book: ', book)

    // <td>{book.review.txt}</td>

    return <tbody>
        {book.reviews.map((rev) => {
            return <tr key={rev.txt}>
                <td> <span>{rev.txt}</span></td>
                <td>{'⭐'.repeat(rev.rate)}</td>
                <td> at. {rev.date}</td>
            </tr>

        })}

    </tbody>
}