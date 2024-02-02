
import { Outlet, Link, useSearchParams } from 'react-router-dom';
import { BookList } from './BookList';
type SearchParamType = {
  n: string | number;
};

export const BookLayout = () => {
  const [searchParam, setSearchParam] = useSearchParams({ n: "" });

  const id: SearchParamType = searchParam.get("n") ? JSON.parse(searchParam.get("n") as string) : { n: 1};
  console.log(id);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParam({ n: e.target.value });
  };

  return (
    <>
      <h2>BookLayout</h2>
      <BookList />
      <br />
      <nav>
        <Link to="/books/1">Book1</Link>
        <br />
        <Link to={`/books/search/${id?.n}`}>SearchBook</Link>
        <Link to="/books/newbook">newBook</Link>

        <input
          type="number"
          value={id?.n}
          onChange={handleChange}
        />
      </nav>

      <Outlet context={{ obj: "hello" }} />
    </>
  );
};
