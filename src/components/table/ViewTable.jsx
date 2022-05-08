import React from 'react'
import "./ViewTable.css"
import CsvDownload from "react-json-to-csv";
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/Theme'

const ViewTable = ({ completeData, query }) => {
   const [{ theme, ColorName }, toggleTheme] = useContext(ThemeContext)
   const column = Object.keys(completeData[0]);
   const tdData = () => {

      return completeData.map((data) => {
         return (
            <>
               <tr style={{ background: theme.backgroundColor, color: theme.color }}>
                  {
                     column.map((v, i) => {
                        return <td className='table-rows'>{data[v]}</td>

                     })
                  }
               </tr>
            </>
         )
      })
   }
   return (
      <>
       <p className='fonund-record'>Records Found : {completeData.length}</p>
         <div className='download-csv'>
        
            <CsvDownload
               className="csv-download-btn" style={{ background: theme.backgroundColor, color: theme.color }}
               data={completeData}
               filename={`${query}.csv`}
            >
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 inline"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
               >
                  <title id="download">Download CSV</title>
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth="2"
                     d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
               </svg>{" "}
               CSV
            </CsvDownload>
         </div>
         <div className='table-container'>
            <table className="table">
               <tbody >
                  {tdData()}
               </tbody>
            </table>
         </div>
      </>
   )
}
export default ViewTable