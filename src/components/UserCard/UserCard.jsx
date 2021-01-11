import React from 'react'
import './user-card.css'
import PhoneIcon from '../../icons/phone.png'
import EmailIcon from '../../icons/email.png'
import WebsiteIcon from '../../icons/url.png'

const UserCard = ({ record, number }) => {
  const { FirstName, LastName, Gender, Email, UserName, PaymentMethod, PhoneNumber, URL, LastLogin, DomainName } = record;
  return (
    <div className='user-card'>
      <div className='card-number'><span>#{number}</span></div>
      <div className="card-body">
        <p><strong>{FirstName.toUpperCase()} {LastName.toUpperCase()}</strong></p>
        <span className='username'><em>@{UserName}</em></span>
        <div className='flex flex-between card-group'>
          <div>
            <p className='item-title'>GENDER</p>
            <p>{Gender === 'Prefer to skip' ? 'N/A' : Gender}</p>
          </div>
          <div>
            <p className='item-title'>PAYMENT METHOD</p>
            <p>{PaymentMethod}</p>
          </div>
        </div>
        <div className='card-group'>
          <p className='item-title'>LAST LOGIN</p>
          <p>{new Date(LastLogin).toGMTString()}</p>
        </div>
        <div className='card-group'>
          <p className='item-title'>DOMAIN NAME</p>
          <p>{DomainName}</p>
        </div>
      </div>
      <div className='bottom-card'>
        <div className='links'>
          <a href={`tel:${PhoneNumber}`}><img src={PhoneIcon} alt="phone" title='Phone'/></a>
          <a href={URL}><img src={WebsiteIcon} alt="url" title='URL'/></a>
          <a href={`mailto:${Email}`}><img src={EmailIcon} alt="email" title='Email'/></a>
        </div>
      </div>
    </div>
  )
}

export default UserCard