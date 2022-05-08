import React, { useMemo } from "react";
import myData from "../../hooks/MyData";
import ViewTable from "./ViewTable";

// import Table from "./Table";

const TableContainer = React.memo(({ query }) => {
  const { data, runtime,error} = myData(query);

  const columns = useMemo(() => {
    if (data.length > 0) {
      return Object.keys(data[0]).map((key) => {
        const result = data[0][key]
          .replace(/([A-Z]+)/g, " $1")
          .replace(/([A-Z][a-z])/g, " $1");

        return {
          Header: result,
          accessor: key,
        };
      });
    }
  }, [data]);

  const queryData = useMemo(() => data.slice(1), [data]);
  if (error)
    return (
     <>
        <div className="query-error">
          <h2 className="h6">Please check your query</h2>
          <p>For more information please go thorugh Readme.md</p>
          <ul>
            <h4 className="h6-small">Table Information :</h4>
            <li>orders</li>
            <li>employees</li>
            <li>customers</li>
            <li>categories</li>
            <li>order_details</li>
            <li>employee_territories</li>
          </ul>
          <p className="h6-small">For more table information <a style={{color:"blue"}} href="https://github.com/graphql-compose/graphql-compose-examples/tree/master/examples/northwind/data/csv
">click here</a></p>
        </div>
      </>
    );
  return (
    <>
        {data.length > 0 ? (
          <>
            <p className="query-runtime">
              Query Runtime:{" "}
              <span className="font-bold">{`${runtime.toFixed(2)} ms`}</span>
            </p>
            <ViewTable
              completeData={data}
              query={query}
            />
          </>
        ) : (
          <p class="center">Executing...</p>
        )}
    </>
  );
});

export default TableContainer;
