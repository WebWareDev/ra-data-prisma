import buildDataProvider, { defaultOurOptions } from "./buildDataProvider";
import { DataProviderOptions } from "./types";
import { DataProvider } from "react-admin";

const useDataProvider = (options: DataProviderOptions): DataProvider => {
  return buildDataProvider({ ...defaultOurOptions, ...options });
};

export default useDataProvider;
