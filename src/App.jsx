import React, { useState, Suspense } from "react";
import Navbar from "./components/Navbar/Navbar";
import CodeGround from "./components/CodeGround/CodeGround";
import TableContainer from "./components/table/TableContainer";
const App = () => {
  const [query, setQuery] = useState("");
  const [value, setValue] = useState("select * from employees");

  return (
    <>
    <Navbar/>
    <CodeGround
       setQuery={setQuery}
       value={value}
       setValue={setValue}
    />
    {query ? <TableContainer query={query} /> : null}
    </>
  );
};

export default App;
