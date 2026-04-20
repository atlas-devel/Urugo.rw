import { useState } from "react";
import TriggerMobileSearch from "./TriggerMobileSearch";
import DisplayMobileSearch from "./DisplayMobileSearch";

function MobileSearch() {
  const [mobileSearch, setMobileSearch] = useState<boolean>(false);

  return (
    <div className="md:hidden ">
      <TriggerMobileSearch
        setMobileSearch={setMobileSearch}
        mobileSearch={mobileSearch}
      />
      <DisplayMobileSearch mobileSearch={mobileSearch} />
    </div>
  );
}

export default MobileSearch;
