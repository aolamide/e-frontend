import React from 'react'
import './filter.css'

const Filter = ({ setFilters, filterObject }) => {
  return(
    <div className='filter-container'>
      <span>Filter by:</span>
      <select value={filterObject.gender} onChange={e => setFilters({ ...filterObject, gender : e.target.value })}>
        <option disabled value="">Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Prefer to skip">Prefer to skip</option>
      </select>
      <select value={filterObject.paymentMethod} onChange={e => setFilters({ ...filterObject, paymentMethod : e.target.value })}>
        <option disabled value="">Payment Method</option>
        <option value="money order">Money Order</option>
        <option value="paypal">PayPal</option>
        <option value="check">Check</option>
        <option value="cc">CC</option>
      </select>
      <button className='cfButton' onClick={() => setFilters({ gender : '', paymentMethod : '' })}>
        Clear Filter
      </button>
    </div>
  )
}


export default Filter