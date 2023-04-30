import React from 'react';

const BillingDetails = () => {
    return (
        <div 
        style={{
            boxShadow:
              "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
          }}
          className="p-8 sm:p-14  rounded-md">
            <div className='mb-5'>
                <h1 className='mb-1 font-medium'>Full Name</h1>
                <input className='border-2 border-gray-200 w-full p-3' type="text" name="" placeholder='Enter your name'/>
            </div>
            <div className='mb-5'>
                <h1 className='mb-1 font-medium'>Contact Number</h1>
                <input className='border-2 border-gray-200 w-full p-3' type="number" name="" placeholder='Enter your number'/>
            </div>
            <div className='mb-5'>
                <h1 className='mb-1 font-medium'>Full Address</h1>
                <input className='border-2 border-gray-200 w-full p-3' type="text" name="" placeholder='Enter your address'/>
            </div>
            <div className=''>
                <h1 className='mb-1 font-medium'>Email</h1>
                <input className='border-2 border-gray-200 w-full p-3' type="email" name="" placeholder='Enter your email'/>
            </div>
        </div>
    );
};

export default BillingDetails;