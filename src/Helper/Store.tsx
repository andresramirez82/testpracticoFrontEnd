import React, { createContext, useState } from "react";

const googleAuth = JSON.parse(localStorage.getItem("user") || "{}");
export const dataContext = createContext(googleAuth);

export const DataProvider = (props: any) => {
  const [userGoogle, setuserGoogle] = useState(googleAuth);
  const [data, setdata] = useState("");

  return (
    <dataContext.Provider value={{ userGoogle, setuserGoogle, data, setdata }}>
      {props.children}
    </dataContext.Provider>
  );
};
