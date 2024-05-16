import toast from "react-hot-toast";

const SearchBar = ({ onSearch, setQuery }) => {
  const notify = () =>
    toast.error("Please, enter the keyword!", {
      style: {
        border: "1px solid #000000",
        padding: "16px",
        color: "#000000",
      },
      iconTheme: {
        primary: "#000000",
        secondary: "#f5f5f5",
      },
    });

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const value = form.elements.searchBar.value;
    setQuery(value);

    if (value.trim() === "") {
      notify();
      return;
    }
    onSearch(value);
    form.reset();
  };

  return (
    <header>
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
    </header>
  );
};
export default SearchBar;
