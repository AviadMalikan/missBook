

export function ReviewDetails({ book }) {
    console.log('book from detail: ', book)

    // <td>{book.review.txt}</td>

    return <tbody>
        {book.reviews.map((rev) => {
            return <tr key={rev.id}>
                <td> <span>{rev.fullName}</span></td>
                <td>{'⭐'.repeat(rev.rate)}</td>
                <td> at. {rev.readAt}</td>
            </tr>

        })}

    </tbody>
}