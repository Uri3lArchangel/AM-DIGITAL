import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import form from '../../../../styles/support/form.module.css'

function SupportForm() {
  return (
    <form action="" className={'container w-full my-40  rounded-lg mx-auto  ' + form.FormContainer_0} >
        <label htmlFor="name" className='form-label' >Your Name</label>
        <input id="name" type="text" className='form-control required:' required/>
        <label htmlFor="cname" className='form-label'>Company Name</label>
        <input id="cname" type="text" className='form-control required:' />
        <label htmlFor="email" className='form-label' >Email Address</label>
        <input id="email" type="text" className='form-control required:' required />
        <label htmlFor="message" className='form-label'>Message</label>
        <textarea id="message" className='form-control required:' rows={5} required />
        <input type="submit" value={"Send Message"} className='btn btn-primary my-4 w-fit' />
    </form>
  )
}

export default SupportForm