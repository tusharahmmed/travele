import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';



const SingleOrder = (props) => {

    const isMyBookingPage = props.isMyBooking;
    const handleCancel = props?.cancleHandler;
    


    return (
        <div class=" p-4">
            <div class="bg-white p-6 rounded-lg">
                <img class="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6" src={props.data?.img} alt="Image Size 720x400" />
                
                <h2 class="text-lg text-indigo-500 font-medium title-font mb-4">{props.data?.name}</h2>
                <p class=" leading-relaxed text-base">{props.data?.description}</p>
                {
                            
                  isMyBookingPage ?  <button onClick={()=> handleCancel(props.data?._id)} class="px-4 py-2 my-2 rounded-md text-sm font-medium focus:outline-none focus:ring transition bg-red-100 text-red-600 hover:bg-red-200 active:bg-red-200 focus:ring-red-300" type="submit">Cancel</button> : <p>Booked by: {props.data?.bookedBy}</p>
                }
                
            </div>
        </div>
    );
};

export default SingleOrder;