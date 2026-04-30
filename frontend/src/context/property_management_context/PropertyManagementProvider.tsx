import { useState } from "react";
import PropertyManagementContext from "./PropertyManagementContext";
import type { Property } from "../../@types/types";
import { propertiesData } from "../../data/PropertiesData";

function PropertyManagementProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [properties, setProperties] = useState<Property[] | undefined>(
    propertiesData,
  );

  // useEffect(() => {
  //   console.log("Setting properties data in context...");
  //   setProperties(propertiesData);
  // }, [setProperties]);

  const values = {
    properties,
    setProperties,
  };
  return (
    <PropertyManagementContext.Provider value={values}>
      {children}
    </PropertyManagementContext.Provider>
  );
}

export default PropertyManagementProvider;
