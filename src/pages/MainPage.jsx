import React from 'react'
import { useEffect, useState } from 'react'
import Filter from '../components/Filter/Filter';
import Header from '../components/Header/Header';
import Pagination from '../components/Pagination/Pagination';
import Search from '../components/Search/Search';
import UserCard from '../components/UserCard/UserCard'

const MainPage = () => {
  const [fetching, setFetching] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [records, setRecords] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [patientsToDisplay, setPatientsToDisplay] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filterObject, setFilterObject] = useState({
    gender : '',
    paymentMethod : ''
  });

  //Function to filter records based on filter conditions or search text
  const filterRecords = patient => {
    const { Gender, PaymentMethod, LastName, FirstName, UserName} = patient;

    return Gender.includes(filterObject.gender) 
    && PaymentMethod.includes(filterObject.paymentMethod) 
    && (
      FirstName.toLowerCase().startsWith(searchText.trim()) || 
      LastName.toLowerCase().startsWith(searchText.trim()) || 
      UserName.toLowerCase().startsWith(searchText.trim())
      );
  }

  useEffect(() => {
    //Set loading to true
    setFetching(true);
    //Fetch records
    fetch('http://api.enye.tech/v1/challenge/records')
    .then(res => res.json())
    .then(data => {
      if(data.status === 'success') {
        setRecords(data.records.profiles)
        setPatientsToDisplay(data.records.profiles)
      } else {
        setErrorMessage('Error fetching details');
      }
    })
    .catch(err => {
      setErrorMessage('Error fetching details, check network connection');
    })
    .finally(() => {
      setFetching(false);
    })
  }, [])

  useEffect(() => {
    //when search text or filter condition changes, updates the array of patients to display
    setPatientsToDisplay(records.filter(filterRecords))
    setCurrentPage(1)
  }, [searchText, filterObject, records])

  useEffect(() => {
    //Set number of pages
    setPages(Math.ceil(patientsToDisplay.length / 20))
  }, [patientsToDisplay])

  useEffect(() => {
    //if user changes page number, scroll to top of page
    window.scrollTo(0, 0)
  }, [currentPage])
  return (
    <div>
      <Header text={'e-commerce transaction details'} />
      <Search setSearchText={setSearchText} />
      <Filter setFilters={setFilterObject} filterObject={filterObject} />
      { fetching && <p>Fetching records...</p>}
      { errorMessage && <p>{errorMessage}</p>}

      {/* If after fetching and patients array is empty, display 'no records' */}
      {patientsToDisplay.length === 0 && !fetching && !errorMessage && <p>No records to display.</p>}
      <div className='card-container'>
        {
          //Show 20 records per page. Map through the 20 records depending on current page number
          patientsToDisplay.slice(currentPage * 20 - 20 , currentPage * 20).map(((record, i) => <UserCard key={record.UserName} record={record} number={patientsToDisplay.findIndex(p => p.UserName === record.UserName) + 1} />))
        }
      </div>
      <div className='pagination'>
        <Pagination currentPage={currentPage} lastPage={pages} setCurrentPage={setCurrentPage} />
      </div>
      <div>
        <p>Made with &hearts; by Olamide</p>
      </div>
    </div>
    
  )
}

export default MainPage