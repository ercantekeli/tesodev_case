import { createContext, useContext } from "react";

export const AppContext = createContext();

// const appName1 = "appName1";
// const appName2 = "appName2";
// const appName3 = "appName3";
// Context verilerini sağlayacak bir bileşen oluşturun
const AppContextProvider = ({ children }) => {
//   const [allData, setAllData] = useState([]);
  // const values = { 
  //         allData,
  //          setAllData, 
  //          appName1, 
  //          appName2, 
  //          appName3 };

  return (
    <AppContext.Provider 
    // value={ values }
    >
        {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppContextProvider;