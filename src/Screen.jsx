import React from 'react'
import { useEffect, useState } from 'react'
import Pagination from './Pagination';
import UserCard from './UserCard'

const Screen = () => {
  const [records, setRecords] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [patientsToDisplay, setPatientsToDisplay] = useState([]);
  useEffect(() => {
    fetch('http://api.enye.tech/v1/challenge/records')
    .then(res => res.json())
    .then(data => {
      setRecords(data.records.profiles)
      setPatientsToDisplay(data.records.profiles)
      setPages(Math.ceil(data.records.profiles.length / 20))
    })
  }, [])
  return (
    <div>
      <div className='card-container'>
        {
          patientsToDisplay.slice(currentPage * 20 - 20 , currentPage * 20).map(record => <UserCard key={record.UserName} record={record} />)
        }
      </div>
      <div className='pagination'>
        <Pagination currentPage={currentPage} lastPage={pages} setCurrentPage={setCurrentPage} />
      </div>
    </div>
    
  )
}

export default Screen