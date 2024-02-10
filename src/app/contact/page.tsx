import React from 'react'
import ContactLanding from '../components/contact/ContactLanding'
import ContactLeft from '../components/contact/ContactLeft'
import ContactRight from '../components/contact/ContactRight'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <ContactLanding />
        <div className='xl:w-[75%]  lg:w-[100%] md:w-[90%] lg:flex justify-between items-start mx-auto'>
            <ContactLeft />
            <ContactRight />
        </div>
    </div>
  )
}

export default page