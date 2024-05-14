import toast from "react-hot-toast";
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [request, setRequest] = useState("");

  const handleInputChange = (event) => {
    setRequest(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    if (!request.trim()) {
      toast.error("Please enter a search query");
      return;
    } else {
      onSearch(request);
      form.reset();
    }
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          name="request"
          value={request}
          onChange={handleInputChange}
          type="text"
          //   autocomplete="off"
          //   autofocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
