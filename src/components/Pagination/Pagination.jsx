import React, { useEffect, useState } from 'react'
import './pagination.css'

const getButtonPages = (c, e) => {
  let current = c,
      last = e,
      delta = 1, //number of pages to show to left and right
      left = current - delta,
      right = current + delta + 1,
      range = [],
      rangeWithDots = [],
      l;

  for (let i = 1; i <= last; i++) {
      if (i === 1 || i === last || (i >= left && i < right)) {
          range.push(i);
      }
  }

  for (let i of range) {
      if (l) {
          if (i - l === 2) {
              rangeWithDots.push(l + 1);
          } else if (i - l !== 1) {
              rangeWithDots.push('...');
          }
      }
      rangeWithDots.push(i);
      l = i;
  }

  return rangeWithDots;
}

const Pagination = ({ currentPage, lastPage, setCurrentPage }) => {
  const [pagesToDisplay, setPagesToDisplay] = useState([]); 
  useEffect(() => {
    setPagesToDisplay(getButtonPages(currentPage, lastPage))
  }, [currentPage, lastPage])

  return (
    <div className='pagination'>
      <button title='Previous page' disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>&laquo;</button>
      {
        pagesToDisplay.map(p => <button title={`Page ${p}`} disabled={p === '...'} onClick={() => setCurrentPage(p)} className={currentPage === p ? 'active' : ''} key={p}>{p}</button>)
      }
      <button title='Next page' disabled={currentPage === lastPage} onClick={() => setCurrentPage(currentPage + 1)}>&raquo;</button>
    </div>
  )
} 

export default Pagination;