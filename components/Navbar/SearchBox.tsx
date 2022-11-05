import React, { useRef, useState } from 'react';
import { GoSearch } from 'react-icons/go';
import { HiMicrophone } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import { Tooltip } from './Tooltip';

export const SearchBox: React.FC = () => {
  const searchInput = useRef<HTMLInputElement>(null);
  const [isFocus, setIsFocuse] = useState<boolean>(false);
  const [text, setText] = useState<string>('');

  const handleFocus = () => {
    setIsFocuse(true);
  };

  const handleBlur = () => {
    setIsFocuse(false);
  };

  const handleChange = (e: React.ChangeEvent<{ value: string }>) => {
    setText(e.target.value);
  };

  const clearText = () => {
    setText('');
    searchInput.current?.focus();
  };

  return (
    <>
      <div
        className={`max-w-xl pr-1 h-10 ${
          isFocus ? 'border-blue-500 ml-4' : 'border-gray-700 pl-4'
        } border rounded-l-3xl items-center flex grow shrink`}
      >
        {isFocus && (
          <div className="pl-2 w-12 flex justify-center">
            <GoSearch className="w-4 h-4" />
          </div>
        )}
        <input
          ref={searchInput}
          type="text"
          className="bg-transparent border-none focus:outline-none w-full"
          placeholder="Search"
          value={text}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {text && (
          <div
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 cursor-pointer"
            onClick={clearText}
          >
            <AiOutlineClose className="w-5 h-5" />
          </div>
        )}
      </div>
      <div className="pr-2">
        <button className="h-10 w-16 pl-1 pr-4 bg-gray-700 border-gray-700 border rounded-r-3xl flex items-center justify-center">
          <Tooltip title="Search">
            <GoSearch className="w-4 h-4" />
          </Tooltip>
        </button>
      </div>
      <div className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center">
        <Tooltip title="Search with your voice">
          <HiMicrophone className="w-5 h-5 cursor-pointer" />
        </Tooltip>
      </div>
    </>
  );
};
