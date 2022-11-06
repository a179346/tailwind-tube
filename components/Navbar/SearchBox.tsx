import React, { useEffect, useRef, useState } from 'react';
import { GoSearch } from 'react-icons/go';
import { HiMicrophone } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { IoMdArrowBack } from 'react-icons/io';

import { Tooltip } from './Tooltip';
import { UserAction } from './UserAction';

interface ISearchBoxProps {
  isFocus: boolean;
  setIsFocus: (v: boolean) => void;
}

export const SearchBox: React.FC<ISearchBoxProps> = ({ isFocus, setIsFocus }) => {
  const searchInput = useRef<HTMLInputElement>(null);
  const clearButton = useRef<HTMLButtonElement>(null);

  const [text, setText] = useState<string>('');

  useEffect(() => {
    if (isFocus) searchInput.current?.focus();
  }, [isFocus]);

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLElement>) => {
    if (!clearButton.current?.contains(e.relatedTarget)) {
      setIsFocus(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<{ value: string }>) => {
    setText(e.target.value);
  };

  const focusOnSearch = () => {
    setIsFocus(true);
  };

  const clearText = () => {
    setText('');
    searchInput.current?.focus();
  };

  return (
    <>
      <span className={`${isFocus ? 'flex' : 'hidden'} sm:flex grow shrink justify-center`}>
        {isFocus && (
          <span className="flex sm:hidden">
            <UserAction tooltip="Back">
              <IoMdArrowBack className="h-5 w-5" />
            </UserAction>
          </span>
        )}
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
            <button
              ref={clearButton}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 cursor-pointer"
              onClick={clearText}
            >
              <AiOutlineClose className="w-5 h-5" />
            </button>
          )}
        </div>
        <div className="pr-2">
          <Tooltip title="Search">
            <button className="h-10 w-16 pl-1 pr-4 bg-gray-700 border-gray-700 border rounded-r-3xl flex items-center justify-center">
              <GoSearch className="w-4 h-4" />
            </button>
          </Tooltip>
        </div>
        <Tooltip title="Search with your voice">
          <div className="w-10 h-10 sm:rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center mr-2 cursor-pointer">
            <HiMicrophone className="w-5 h-5" />
          </div>
        </Tooltip>
      </span>
      <span className={`${isFocus ? 'hidden' : 'flex'} sm:hidden grow shrink justify-end`}>
        <div className="sm:mr-2">
          <UserAction tooltip="Search" onClick={focusOnSearch}>
            <GoSearch className="w-4 h-4" />
          </UserAction>
        </div>
        <Tooltip title="Search with your voice">
          <div className="w-10 h-10 bg-white/10 hover:bg-white/20 flex items-center justify-center cursor-pointer">
            <HiMicrophone className="w-5 h-5" />
          </div>
        </Tooltip>
      </span>
    </>
  );
};
