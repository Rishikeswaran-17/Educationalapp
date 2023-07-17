import React from 'react'

const FreeCourseForm = () => {
     return (
          <div>
               <div className='bg-turquoise p-6 text-center text-white text-xl rounded-t-md'>Free Course Counselling <p className='text-sm'>We are happy to help you 24x7</p></div>
               <div className='p-3'>
                    <form className='mb-4'>
                         <div class="flex flex-col p-4">
                              <label for="exampleFormControlInput1" class="form-label" className='mb-2 text-neutral-500 text-sm'>Email ID</label>
                              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" className='border rounded-md focus:border-blue-600 outline-none px-2 py-1' />
                         </div>
                         <div class="flex flex-col px-4">
                              <label for="Input2" class="form-label" className='mb-2 text-neutral-500 text-sm'>Phone Number</label>
                              <div>
                                   <select className='outline-none text-white bg-turquoise py-1.5 px-1 border border-turquoise rounded-l-md'>
                                        <option className='p-1'>+91</option>
                                        <option className='p-1'>+198</option>
                                        <option className='p-1'>+823</option>
                                   </select>
                                   <input type="tel" class="form-control" id="Input2" placeholder='123 - 456 - 7890' pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' className='border rounded-r-md focus:border-blue-700 outline-none px-2 py-1' required />
                              </div>
                         </div>
                    </form>
               </div>
               <div className='px-10 text-xs'>Please Note : By continuing and signing in, you agree to Edureka’s Terms & Conditions and Privacy Policy.</div>
               <div className='my-6 w-9/12 mx-auto'>
                    <button type="button" className="bg-blue-900 text-white hover:bg-blue-50 hover:text-blue-900 border hover:shadow-lg hover:border-blue-900 rounded-md text-md w-full py-2 uppercase">Submit</button>
               </div>
          </div>
     )
}

export default FreeCourseForm