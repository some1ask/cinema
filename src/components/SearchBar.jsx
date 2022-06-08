import React from 'react'

export const SearchBar = ({setSearch}) => {
  return (
    <div className='flex mt-10 px-10 flex-col'>
    <input placeholder="Search a movie" onChange={(e) => {
      setSearch(e.target.value)
    }} className="w-full form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"></input>
  </div>
  )
}

