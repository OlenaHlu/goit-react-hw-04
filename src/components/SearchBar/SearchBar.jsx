import toast from "react-hot-toast";

const SearchBar = ({ onSearch, setQuery }) => {
  const notify = () => toast.error("Please, enter the keyword!");

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const value = form.elements.searchBar.value.trim();
    setQuery(value);

    if (value === "") {
      notify();
      return;
    }
    setQuery(value);
    onSearch(value);
    form.reset();
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="searchBar"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};
export default SearchBar;
