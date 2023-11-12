import { useSearchParams } from "react-router-dom";
import { Select } from "./Select";

export const Sort = function () {
  const options = [
    { value: "regularPrice-asc", label: "Sort by Price (low-high)" },
    { value: "regularPrice-desc", label: "Sort by Price (high-low)" },
    { value: "discount-asc", label: "Sort by Discount (low-high)" },
    { value: "discount-desc", label: "Sort by Discount (high-low)" },
  ];
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";
  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }
  return <Select options={options} value={sortBy} onChange={handleChange} />;
};
