import React from 'react'

const Dashboard = () => {
     return (
          <div className='flex p-3'>
               <div className='lg:w-80 sm:w-52'>
                    <div className='text-2xl bg-red-200 p-2'>edureka</div>
                    <div className='bg-purple-200'>
                         <div>
                              <header>Dashboard</header>
                              <p>Reports</p>
                         </div>
                         <div>Profiles</div>
                         <div>Reviews</div>
                    </div>
               </div>
               <div>content</div>
          </div>
     )
}

export default Dashboard