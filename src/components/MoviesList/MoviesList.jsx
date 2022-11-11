export const MoviesList = (movies) => {
    return (
        <ul>
            {movies.map(movie => (
                <li>
                    <p>{ movie.original_title }</p>
                </li>
            ))}
        </ul>
    );
}