

import React from 'react';
import { auth } from '@/auth'; 
import { redirect } from 'next/navigation';

export default async function MembershipPage() {
  const session = await auth();

  if (!session) {
    redirect('/auth/signin');
  }

  const { user } = session;

  return (
    <section>
        <div className='bg-gray-200  '>
             <div className="flex flex-col gap-4 p-5 items-center justify-between shadow-md ">
                 <h1 className="text-3xl  text-blue-500 font-bold">Welcome, {user.name}</h1>
                 <img
                   src={user.image}
                  alt="Profile"
                  className="w-24 h-24 rounded-full mt-4" />
             </div>
             <div className='h-20 bg-white '>
                 <div className='uppercase text-blue-500 gap-5 flex items-center justify-center p-8'>
                    <p className='hover:bg-gray-400 transition-all duration-300'>Calender</p>
                    <p className='hover:bg-gray-400 transition-all duration-300'>Program</p>
                    <p className='hover:bg-gray-400 transition-all duration-300'>Favourite</p>
                  </div>
             </div>
             <div className='md:grid md:grid-cols-2 md:p-15 p-5 md:gap-3 gap-8'>
                <div className='relative'>
                    <img src="/mem1.jpg" alt="yoga" className='opacity-60' />
                    <div className='absolute top-0 m-10 text-gray-800 flex flex-col items-center justify-center gap-5 max-lg:hidden'>
                     <h1 className='font-bold text-3xl' >Trainer Series</h1>
                     <p>Exercise with your favorite trainer in our new Trainer Series programs.</p>
                     <button className='bg-gray-800 text-white rounded-md hover:bg-gray-600 transitio-all duration-300 px-4 py-2'>Learn More</button>
                    </div>
                </div>
                <div className='relative'>
                    <img src="/mem2.jpg" alt="yoga" className='opacity-60' />
                    <div className='absolute top-0 m-10 text-gray-800 flex flex-col items-center justify-center gap-5 max-lg:hidden'>
                     <h1 className='font-bold text-3xl' >Earn a Free Plus Membership</h1>
                     <p>Share your referral code and every sign up earns rewards to put toward your membership.</p>
                     <button className='bg-gray-800 text-white rounded-md hover:bg-gray-600 transitio-all duration-300 px-4 py-2'>See Rewards</button>
                    </div>
                </div>
                <div className='relative'>
                    <img src="/mem3.jpg" alt="yoga" className='opacity-60' />
                    <div className='absolute top-0 m-10 text-gray-800 flex flex-col items-center justify-center gap-5 max-lg:hidden'>
                     <h1 className='font-bold text-3xl' >Small Footprint Big Gains</h1>
                     <p>The perfect dumbbells for any space. Use discount code FBXPB20 for #1,000 off an order of #5000 or more.</p>
                     <button className='bg-gray-800 text-white rounded-md hover:bg-gray-600 transitio-all duration-300 px-4 py-2'>Learn More</button>
                    </div>
                </div>
                <div className='relative'>
                    <img src="/mem4.jpg" alt="yoga" className='opacity-60' />
                    <div className='absolute top-0 m-10 text-gray-800 flex flex-col items-center justify-center gap-5 max-lg:hidden'>
                     <h1 className='font-bold text-3xl' >Specialty Content</h1>
                     <p>Pilot programs provide special content tailored to smaller audiences, conditions, or life events.</p>
                     <button className='bg-gray-800 text-white rounded-md hover:bg-gray-600 transitio-all duration-300 px-4 py-2'>Browse Programms</button>
                    </div>
                </div>
             </div>

        </div>
       

    </section>
   
  );
}
