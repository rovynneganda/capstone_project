import React from 'react'
import Nav from './Nav'
import Main from './Main'
import Footer from './Footer'
import { useState } from 'react'
const Booking = () => {
    const [booking, setBooking] = useState(false)
    const handleSetBooking = () => {
        setBooking(true)
    }
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        guests: 0,
        occasion: '',
      });
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.date === "" || formData.time === "" || formData.guests === "0" || formData.occasion === "") {
            alert('Please Fill all the fields')
        }else {
            handleSetBooking()
        }
      };
  return (
    <>
    <Nav />
    {booking ? <>
    <h1> Booking has been <span style={{color:"blue"}}>Confirmed!</span></h1>
     </> : 
    <>
        <section className='booking-section'>
      <form onSubmit={handleSubmit}>
        <div className='input-flex'>
          <p style={{ color: 'black' }}>Choose a date: </p>
          <input
            type='date'
            name='date'
            value={formData.date}
            onChange={handleInputChange}
          />
        </div>
        <div className='input-flex'>
          <p style={{ color: 'black' }}>Choose time: </p>
          <select   name='time'  onChange={handleInputChange} >
          <option disabled value=''>
              Select an Option
            </option>
              <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
          </select>
        </div>
        <div className='input-flex'>
          <p style={{ color: 'black' }}>Number of Guests </p>
          <input
            type='number'
            name='guests'
            value={formData.guests}
            onChange={handleInputChange}
            placeholder='0'
          />
        </div>
        <div className='input-flex'>
          <p style={{ color: 'black' }}>Occasion </p>
          <select
            name='occasion'
            value={formData.occasion}
            onChange={handleInputChange}
          >
            <option disabled value=''>
              Select an Option
            </option>
            <option value='birthday'>Birthday</option>
            <option value='anniversary'>Anniversary</option>
          </select>
        </div>
        <button type='submit' className='booking-btn'>
          Make your Reservation
        </button>
      </form>
    </section>
     </>
    }

    <Main />
    <Footer />
    </>
  )
}

export default Booking