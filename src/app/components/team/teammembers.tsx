import Link from 'next/link'
import React from 'react'

type Props = {}

const team = [
  {
    id: 1,
    image: 'team1.jpg',
    name: 'Andrew Kazantzis',
    position: 'CEO ITSulu'
  },
  {
    id: 2,
    image: 'team2.jpg',
    name: 'Jane Meldrum',
    position: 'Designer'
  },
  {
    id: 3,
    image: 'team3.jpg',
    name: 'Roy Ellawal',
    position: 'App Developer'
  },
  {
    id: 4,
    image: 'team4.jpg',
    name: 'James Anderson',
    position: 'Data Analyst'
  },
  {
    id: 5,
    image: 'team5.jpg',
    name: 'John Doe',
    position: 'UI & UX Developer'
  },
]

const TeamMate = ({image, name, position}) => (
  <Link href='' className='text-center group relative h-fit ease-in-out duration-200 tran_filter'>
    <img src={image} alt='team' className='rounded-full mx-auto'/>
    <h4 className="text-[22px] font-syne my-5">{name}</h4>
    <p className="text-[15px] font-sora text-[#12182066] group-hover:text-[#92519c] ease-in-out duration-200">{position}</p>
    <div className=' absolute top-0 left-0 w-full h-full bottom-2'>
      <div className='h-[150px] w-[150px] bg-[#92519c] absolute bottom-20 right-5 rounded-full ease-in-out invisible  duration-300 group-hover:visible group-hover:translate-x-10'></div>
    </div>
  </Link>
)

const Teammembers = (props: Props) => {
  return (
    <div>
        <h3 className="text-center text-[26px] font-syne py-28">It is a long established fact that a <span className="text-[#92519c]">reader will be <br/> distracted</span> by the readable content.</h3>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 items-center gap-32'>
          {team.map((team, index) => (
            <TeamMate key={index} image={team.image} name={team.name} position={team.position}/>
          ))}
        </div>
    </div>
  )
}

export default Teammembers