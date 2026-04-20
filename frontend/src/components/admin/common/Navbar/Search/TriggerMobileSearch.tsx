import type { Dispatch, SetStateAction } from "react";
import { SearchIcon } from "lucide-react";

function TriggerMobileSearch({
  setMobileSearch,
  mobileSearch,
}: {
  setMobileSearch: Dispatch<SetStateAction<boolean>>;
  mobileSearch: boolean;
}) {

  const handleMobileSearch = () => {
    setMobileSearch(true);
   
  };

  return (
    <button
      onClick={handleMobileSearch}
      className={`${mobileSearch ? "hidden" : "block"} text-ring`}
    >
      <SearchIcon />
    </button>
  );
}

export default TriggerMobileSearch;
