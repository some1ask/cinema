import React from 'react'

const Pagination = ({setPage}) => {
    let goToPrev = ()=>{
        setPage(x=> x<=1 ? x=1 : x-1)
    }
    let goToNext = ()=>{
        setPage(x=>{
            console.log(x)
            return x+1;})
        
    }

  return (
    <div className='container mb-10 m-auto'>
        <div className='flex justify-between px-20'>
            <button className='px-4 py-2 bg-black text-white rounded-lg' onClick={goToPrev}>Previous</button>
            <button className='px-4 py-2 bg-black text-white rounded-lg' onClick={goToNext}>Next</button>
        </div>
    </div>
  )
}

export default Pagination