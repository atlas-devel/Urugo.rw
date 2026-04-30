import { createContext } from "react";
import type { Property } from "../../@types/types";

interface PropertyManagementContextType {
  properties: Property[] | undefined;
  setProperties: React.Dispatch<React.SetStateAction<Property[] | undefined>>;
}

const PropertyManagementContext = createContext<
  PropertyManagementContextType | undefined
>(undefined);
export default PropertyManagementContext;
