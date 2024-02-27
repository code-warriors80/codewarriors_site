import { sendMessage } from '@/app/actions/contact'
import React, { useState } from 'react'

type Props = {}

const ContactLeft = (props: Props) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [company, setCompany] = useState('')
    const [role, setRole] = useState('')
    const [design, setDesign] = useState('')
    const [description, setDescription] = useState('')
    const [budget, setBudget] = useState('')
    const [error, setError] = useState('')

    const SubmitForm = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        const formData = {
            firstName,
            lastName,
            email,
            phone,
            company,
            role,
            design,
            description,
            budget
        }
        try {
            const res = await sendMessage(formData)
            const data = await res.json()
            if (res.ok) {
                setFirstName('');
                setLastName('');
                setEmail('');
                setPhone('');
                setCompany('');
                setRole('');
                setDesign('');
                setDescription('');
                setBudget('');
            } else {
                setError(data.message)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='lg:w-[70.50%] py-10 px-10'>
            <div className='py-10'>
                <h4 className="text-[22px] font-syne my-10"><span className="text-[#6c4f98]">01.</span> Tell Us About Yourself</h4>
                <div className='grid lg:grid-cols-2 gap-10 w-full'>
                    <div className='border-b-2 border-gray-200'>
                        <label className='block font-syne text-[16px]'>First Name</label>
                        <input type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder='John' className='w-full bg-transparent py-5 font-sora font-sm outline-none' />
                    </div>

                    <div className='border-b-2 border-gray-200'>
                        <label className='block font-syne text-[16px]'>Last Name</label>
                        <input type='text' value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder='Jones' className='w-full bg-transparent py-5 font-sora font-sm outline-none' />
                    </div>

                    <div className='border-b-2 border-gray-200'>
                        <label className='block font-syne text-[16px]'>Email Address</label>
                        <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='doe@mydomain.com' className='w-full bg-transparent py-5 font-sora font-sm outline-none' />
                    </div>

                    <div className='border-b-2 border-gray-200'>
                        <label className='block font-syne text-[16px]'>Phone</label>
                        <input type='text' value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Enter your phone number' className='w-full bg-transparent py-5 font-sora font-sm outline-none' />
                    </div>

                    <div className='border-b-2 border-gray-200'>
                        <label className='block font-syne text-[16px]'>Company</label>
                        <input type='text' value={company} onChange={(e) => setCompany(e.target.value)} placeholder='Your Company name' className='w-full bg-transparent py-5 font-sora font-sm outline-none' />
                    </div>

                    <div className='border-b-2 border-gray-200'>
                        <label className='block font-syne text-[16px]'>Role</label>
                        <input type='text' value={role} onChange={(e) => setRole(e.target.value)} placeholder='Your Role' className='w-full bg-transparent py-5 font-sora font-sm outline-none' />
                    </div>
                </div>
            </div>

            <div>
                <h4 className="text-[22px] font-syne my-10"><span className="text-[#6c4f98]">02.</span> What Can We Help You With?</h4>
                <div className='grid lg:grid-cols-2 gap-10 w-full'>
                    <div className='border-b-2 border-gray-200'>
                        <label className='block font-syne text-[16px]'>Product Design</label>
                        <input type='text' value={design} onChange={(e) => setDesign(e.target.value)} placeholder='Web Designer' className='w-full bg-transparent py-5 font-sora font-sm outline-none' />
                    </div>
                </div>
            </div>

            <div className='space-y-5'>
                <h4 className="text-[22px] font-syne my-10"><span className="text-[#6c4f98]">03.</span> Tell Us About Your Project</h4>
                <div>
                    <div className='w-full border-b-2 border-gray-200'>
                        <label className='block font-syne text-[16px] mb-5'>Project Description</label>
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Your Message' className='w-full h-[250px] font-sora font-sm outline-none' />
                    </div>

                    <div className='w-[100%] lg:w-[50%] border-b-2 border-gray-200 mt-10'>
                        <label className='block font-syne text-[16px]'>Project Budget</label>
                        <input type='number' value={budget} onChange={(e) => setBudget(e.target.value)} className='w-full bg-transparent py-5 font-sora font-sm outline-none' />
                    </div>
                </div>
            </div>
            <button
                onClick={SubmitForm}
                className='w-full border-2 border-[#6c4f98] my-10 p-5 rounded-full font-sora text-[16px]'>Submit Now</button>
        </div>
    )
}

export default ContactLeft;
