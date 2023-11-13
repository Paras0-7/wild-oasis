// import { Filter } from "../../ui/Filter";
import { Sort } from "../../ui/Sort";
import { TableOperations } from "../../ui/TableOperations";

export const CabinTableOperations = function () {
  return (
    <TableOperations>
      {/* <Filter /> */}
      <Sort
        options={[
          { value: "regularPrice-asc", label: "Sort by Price (low-high)" },
          { value: "regularPrice-desc", label: "Sort by Price (high-low)" },
          { value: "discount-asc", label: "Sort by Discount (low-high)" },
          { value: "discount-desc", label: "Sort by Discount (high-low)" },
        ]}
      />
    </TableOperations>
  );
};
