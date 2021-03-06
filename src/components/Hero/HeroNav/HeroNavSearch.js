/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import { MovieContext } from "../../../Context/MovieContext";

const HeroNavSearch = () => {
  const { search, setSearch, handleSearch, activeLink } = useContext(
    MovieContext
  );

  return (
    <form css={styles} onSubmit={handleSearch}>
      {activeLink !== "Popular" && (
        <input
          type="text"
          placeholder="Search for movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      )}
    </form>
  );
};

const styles = css`
  height: 40px;
  min-height: 40px;
  input {
    border: none;
    outline: none;
    border-radius: 50px;
    border: 1px solid #52b788;
    background: transparent;
    padding: 10px 16px;
    width: 260px;
    color: #52b788;
    &::placeholder {
      color: #52b788;
      letter-spacing: 1px;
    }
  }
  @media (max-width: 860px) {
    input {
      width: 220px;
    }
  }
`;

export default HeroNavSearch;
