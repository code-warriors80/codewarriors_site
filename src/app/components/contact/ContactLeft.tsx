'use client'
import React, {useState} from 'react'
import { toast } from 'react-toastify';

type Props = {}

const ContactLeft = (props: Props) => {
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [email, setEmail] = useState('')
  const [contact, setContact] = useState('')
  const [company, setCompany] = useState('')
  const [role, setRole] = useState('')
  const [product, setProduct] = useState('')
  const [project, setProject] = useState('')
  const [loading, setLoading] = useState(false);

  const handelSubmit = async (e: any) => {
    e.preventDefault();
  
    // Check if any required field is empty
    if (!fname || !lname || !email || !contact || !company || !role || !product || !project) {
        toast.error('Please fill in all required fields');
        return;
    }

    setLoading(true);
  
    const res = await fetch('api/discuss', {
      method: 'POST',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        fname, lname, email, contact, company, role, product, project
      })
    });
  
    setLoading(false);

    const { msg } = await res.json();

    if (res.ok) {
        toast.success('Form submitted successfully');
        setFname('');
        setLname('');
        setEmail('');
        setContact('');
        setCompany('');
        setRole('');
        setProduct('');
        setProject('');
      } else {
        toast.error(msg);
      }
  }

  return (
    <div className='lg:w-[70.50%] py-10 px-10'>
        <div className='py-10'>            
            <h4 className="text-[22px] font-syne my-10"><span className="text-[#6c4f98]">01.</span> Tell Us About Yourself</h4>
            <div className='grid lg:grid-cols-2 gap-10 w-full'>
                <div className='border-b-2 brder-gray-200'>
                    <label className='block font-syne text-[16px]'>First Name</label>
                    <input type='text' placeholder='John' className='w-full bg-transparent py-5 font-sora font-sm outline-none' value={fname} onChange={(e) => setFname(e.target.value)}/>
                </div>

                <div className='border-b-2 brder-gray-200'>
                    <label className='block font-syne text-[16px]'>Last Name</label>
                    <input type='text' placeholder='Jones' className='w-full bg-transparent py-5 font-sora font-sm outline-none' value={lname} onChange={(e) => setLname(e.target.value)}/>
                </div>

                <div className='border-b-2 brder-gray-200'>
                    <label className='block font-syne text-[16px]'>Email Address</label>
                    <input type='text' placeholder='doe@mydomain.com' className='w-full bg-transparent py-5 font-sora font-sm outline-none' value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div className='border-b-2 brder-gray-200'>
                    <label className='block font-syne text-[16px]'>Phone</label>
                    <input type='text' placeholder='Enter your phone number' className='w-full bg-transparent py-5 font-sora font-sm outline-none' value={contact} onChange={(e) => setContact(e.target.value)}/>
                </div>

                <div className='border-b-2 brder-gray-200'>
                    <label className='block font-syne text-[16px]'>Company</label>
                    <input type='text' placeholder='Your Company name' className='w-full bg-transparent py-5 font-sora font-sm outline-none' value={company} onChange={(e) => setCompany(e.target.value)}/>
                </div>

                <div className='border-b-2 brder-gray-200'>
                    <label className='block font-syne text-[16px]'>Role</label>
                    <input type='text' placeholder='Your Role' className='w-full bg-transparent py-5 font-sora font-sm outline-none' value={role} onChange={(e) => setRole(e.target.value)}/>
                </div>
            </div>
        </div>

        <div>
            <h4 className="text-[22px] font-syne my-10"><span className="text-[#6c4f98]">02.</span> What Can We Help You With?</h4>
            <div className='grid lg:grid-cols-2 gap-10 w-full'>
                <div className='border-b-2 brder-gray-200'>
                    <label className='block font-syne text-[16px]'>Product Design</label>
                    <input type='text' placeholder='Web Design' className='w-full bg-transparent py-5 font-sora font-sm outline-none' value={product} onChange={(e) => setProduct(e.target.value)}/>
                </div>
            </div>
        </div>

        <div className='space-y-5'>
            <h4 className="text-[22px] font-syne my-10"><span className="text-[#6c4f98]">03.</span> Tell Us About Your Project</h4>
            <div>
                <div className='w-full border-b-2 brder-gray-200'>
                    <label className='block font-syne text-[16px] mb-5'>Project Description</label>
                    <textarea placeholder='Your Message' className='w-full h-[250px] font-sora font-sm outline-none' value={project} onChange={(e) => setProject(e.target.value)}/>
                </div>
            </div>
        </div>
        <button className='w-full border-2 border-[#6c4f98] my-10 p-5 rounded-full font-sora text-[16px]' onClick={handelSubmit}>{loading ? 'Submitting...' : 'Submit Now'}</button>
    </div>
  )
}

export default ContactLeft