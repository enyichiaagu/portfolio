import React from 'react'
import Title from '../components/Title'

function ContactPage() {
  return (
    <div className='container'>
        <Title text='Send me a message'/>
        <p className='pb-10'>Would you like to contact me? Send me a message through this form.</p>
        <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSen_XQYgRpv8DCGN5d3DkXJ2kVHixmk6NfxK6__OHT1xCKymA/viewform?embedded=true" 
            title='contact'
            width="100%" 
            height="750" 
            frameborder="0" 
            marginheight="0" 
            marginwidth="0">Loading…
        </iframe>
    </div>
  )
}

export default ContactPage