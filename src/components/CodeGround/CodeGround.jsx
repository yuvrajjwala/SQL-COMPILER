import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-min-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-eclipse";
import "ace-builds/src-noconflict/theme-twilight";

import './CodeGround.css';
import { FaPlay } from 'react-icons/fa';
import { BiSun } from 'react-icons/bi';
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/Theme'

// import { Button } from "../reusable/Button";

const CodeGround = ({setQuery, value, setValue}) => {
  const [{ theme, ColorName }, toggleTheme] = useContext(ThemeContext)

  const updateValue = (newValue) => {
    setValue(newValue);
    console.log(newValue)
  };
  function showdropdown(){
    document.getElementById('choose-theme-options').style.display="block";
  }
  function hideDropdown(){
    document.getElementById('choose-theme-options').style.display="none";
  }
  function  querySubmit() {
    var Z = value.toLowerCase().slice(value.indexOf("from") + "from".length);
    setQuery(Z.split(" ")[1]);
  };
  return (
    <>
    <div className='lower-nav'>
        <div>
          <button id='run' onClick={querySubmit}>
            <span className='font-medium'> <FaPlay /> </span>
             Run
          </button>
        </div>
        <div onMouseOut={hideDropdown} onMouseOver={showdropdown} id='changeTheme' className='changeTheme'>
          Themes
          <span style={{ color: theme.backgroundColor }} className='font-large'> <BiSun /> </span>
          <div id='choose-theme-options' className='choose-theme'>
        <div id='bg-green' onClick={()=>toggleTheme("green")} className='theme-color'>Green</div>
        
        <div id='bg-orange' onClick={()=>toggleTheme("orange")} className='theme-color'>Orange</div>
        
        <div id='bg-dark' onClick={()=>toggleTheme("dark")} className='theme-color'>Dark</div>
        
        <div id='bg-light' onClick={()=>toggleTheme("light")} className='theme-color'>Light</div>
        
        <div id='bg-blue' onClick={()=>toggleTheme("blue")} className='theme-color'>Blue</div>
        
        <div id='bg-yellow' onClick={()=>toggleTheme("yellow")} className='theme-color'>Yellow</div>
      </div>
        </div>
      </div>
    <div className="codeground-container">
      <label htmlFor="editor">
        <AceEditor
          id="editor"
          aria-label="editor"
          mode="mysql"
          theme={theme.backgroundColor=='#EBEBEB'?"eclipse":"twilight"}
          name="editor"
          fontSize={16}
          minLines={15}
          maxLines={15}
          width="100%"
          // showPrintMargin={false}
          showGutter
          placeholder="Write your Query here..."
          editorProps={{ $blockScrolling: true }}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
          }}
          value={value}
          onChange={updateValue}
          showLineNumbers
        />
      </label>
      </div>
      </>

  );
};

export default CodeGround;
