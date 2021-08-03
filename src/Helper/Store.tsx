import React, { createContext, useState } from "react";

const googleAuth = JSON.parse(localStorage.getItem("user") || "{}");
export const dataContext = createContext(googleAuth);

export const MyContext = createContext('');
MyContext.displayName = 'NombreAMostrar';

export const DataProvider = (props: any) => {
  const [userGoogle, setuserGoogle] = useState(googleAuth);
  const [data, setdata] = useState("");
  const [SearchText, setSearchText] = useState('');

  return (
    <dataContext.Provider value={{ userGoogle, setuserGoogle, data, setdata, SearchText, setSearchText }}>
      {props.children}
    </dataContext.Provider>
  );
};
