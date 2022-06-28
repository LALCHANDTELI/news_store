import { useState } from "react";
import { Link } from "react-router-dom";

const Search = () => {
  const [query, setQuery] = useState(null);

  return (
    <form className="form-inline">
      <input
        className="form-control rounded  search_box mr-sm-2"
        type="text"
        value={query}
        placeholder="Search"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />

      <span className="search mx-auto">
        <Link
          className="fas fa-search btn_search  rounded-circle p-2 bg-success text-light"
          to={`/news/q=${query}`}
        ></Link>
      </span>
    </form>
  );
};

export default Search;
