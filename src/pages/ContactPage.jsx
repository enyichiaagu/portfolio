import React, { useState } from 'react'

import emailjs from '@emailjs/browser'

import Title from '../components/Title'

function ContactPage() {

  const [ form, setForm ] = useState({
    sender_name: '',
    sender_email: '',
    message: ''
  });

  const handleChange = ({ target: { name, value }}) => {
    setForm((prevState) => ({
      ...prevState,
      [name]: value 
    }))
  }

  emailjs.init("eofVMhkaPQJ2atstS");

  const handleSubmit = (event) => {

    event.preventDefault();

    emailjs.send('service_nyjk2fj', 'template_05ll459', form)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      alert('Congratulations. Your message has been received!');
      setForm({
        sender_name: '',
        sender_email: '',
        message: ''
      })
    }, function(error) {
        console.log('FAILED...', error);
        alert('An error has been encountered. Try Again')
    });
  }

  const { sender_name, sender_email, message } = form;
  
  return (
    <div className='container'>
        <Title text='Send me a message'/>
        <p className='pb-10'>Would you like to contact me? Send me a message through this form.</p>
        <form onSubmit={handleSubmit} className='max-w-screen-sm mb-6'>
          <div className='my-4'>
            <label htmlFor="name" className='w-fit block my-2'>Name: </label>
            <input className='w-full' type="text" name="sender_name" id="name" value={sender_name} onChange={handleChange} required />
          </div>
          <div className='my-4'>
            <label htmlFor="name" className='w-fit block my-2'>Email: </label>
            <input className='w-full' type="email" name="sender_email" id="name" value={sender_email} onChange={handleChange} required/>
          </div>
          <div className='my-4'>
            <label htmlFor="message" className='w-fit block my-2'>Write your Message:</label>
            <textarea rows='5' className='w-full' name="message" id="message" value={message} onChange={handleChange} required></textarea>
          </div>
          <button className='bg-primary hover:bg-primary-dark text-white w-fit py-2 px-4 rounded cursor-pointer hover:shadow-lg mr-2 mb-2 transition-shadow transition-colors'>Submit</button>
        </form>
        <p>Powered by Email JS</p>
    </div>
  )
}

export default ContactPage