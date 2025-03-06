import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams("");
  const sortBy = searchParams.get("sortBy") ?? "";

  function handleChange(e) {
    // To handle bug when switching filters
    if (searchParams.get("page")) searchParams.delete("page");

    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <Select
      options={options}
      value={sortBy}
      type="white"
      onChange={handleChange}
    />
  );
}

export default SortBy;
