import { MoviesList } from 'components/MoviesList/MoviesList';
import { useSearchParams } from 'react-router-dom';
import { getMovieQuery } from 'services/fetchAPI';


const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get('query') ?? "";
  console.log(name);

  getMovieQuery(name).then(data => console.log(data)).catch(error => console.log(error));

  return (
    <main>
      <form style={{ marginTop: 32, marginBottom: 32 }}>
        <input
          type="text"
          style={{ outline: 'none' }}
          placeholder="Please enter movie"
          value={name}
          onChange={e =>
            setSearchParams({ query: e.target.value })
          }
        />
        <button type="submit">Search</button>
      </form>
      {/* <MoviesList movies={ } /> */}
    </main>
  );
};

export default Movies;
