import React from 'react'

const Pagination = ({setPage,page}) => {
  const SetPage = (e) =>{
    setPage(parseInt(e.target.innerText))
  }
  const increasePage = () =>{
    if(page < 6){
        setPage(page+1)
    } 
  }
  const decreasePage = () =>{
    if(page > 1){
        setPage(page-1)
    }  
  }
  return (
    <section className='flex items-center'>
        <div onClick={decreasePage} className='cursor-pointer'>&#60;&#60;</div>
        <div>
            <button className={`${page === 1 ? 'bg-[#03009E] text-white' : 'bg-[#E5E5E5]'} hover:bg-[#03009E] hover:text-white mx-2 py-1 px-2 rounded-md`} onClick={SetPage}>1</button>
            <button className={`${page === 2 ? 'bg-[#03009E] text-white' : 'bg-[#E5E5E5]'} hover:bg-[#03009E] hover:text-white mx-2 py-1 px-2 rounded-md`} onClick={SetPage}>2</button>
            <button className={`${page === 3 ? 'bg-[#03009E] text-white' : 'bg-[#E5E5E5]'} hover:bg-[#03009E] hover:text-white mx-2 py-1 px-2 rounded-md`} onClick={SetPage}>3</button>
            <button className={`${page === 4 ? 'bg-[#03009E] text-white' : 'bg-[#E5E5E5]'} hover:bg-[#03009E] hover:text-white mx-2 py-1 px-2 rounded-md`} onClick={SetPage}>4</button>
            <button className={`${page === 5 ? 'bg-[#03009E] text-white' : 'bg-[#E5E5E5]'} hover:bg-[#03009E] hover:text-white mx-2 py-1 px-2 rounded-md`} onClick={SetPage}>5</button>
            <button className={`${page === 6 ? 'bg-[#03009E] text-white' : 'bg-[#E5E5E5]'} hover:bg-[#03009E] hover:text-white mx-2 py-1 px-2 rounded-md`} onClick={SetPage}>6</button>
        </div>
        <div onClick={increasePage} className='cursor-pointer'>&#62;&#62;</div>
    </section>
  )
}

export default Pagination