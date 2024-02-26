import React from 'react'
import Landing from '../components/team/Landing'
import Teammembers from '../components/team/teammembers'
import Values from '../components/team/values'
import Book from '../components/team/book'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <Landing />
        <div className='xl:w-[75%]  lg:w-[100%] md:w-[90%] mx-auto py-16 px-5 sm:px-16 md:px-0 '>
            <Teammembers />
            <Values />
        </div>
        <Book />
    </div>
  )
}

export default page