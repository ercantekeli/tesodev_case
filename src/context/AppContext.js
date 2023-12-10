import { createContext, useContext, useState } from "react";
import ResultData from "../helpers/mock-data.json";
export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [inputText, setInputText] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [allData, setAllData] = useState(ResultData);

  return (
    <AppContext.Provider
      value={{
        inputText,
        setInputText,
        filteredData,
        setFilteredData,
        allData,
        setAllData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppContextProvider;
