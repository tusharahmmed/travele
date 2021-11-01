import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import { HeaderAllOrder } from '../Header/Header';
import SingleOrder from '../SingleOrder/SingleOrder';

const AllOrders = () => {

    const [bookingList,setBookinGList] = useState([]);

    useEffect(()=>{
        fetch('https://desolate-sea-84210.herokuapp.com/booking')
        .then(res => res.json())
        .then(data => setBookinGList(data))
    },[])




    return (
        <>
            <HeaderAllOrder></HeaderAllOrder>

            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
                <div class="text-center pb-12">
                    <h2 class="text-base font-bold text-indigo-600">
                        We have the best equipment in the market
                    </h2>
                    <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
                        Check our awesome team members
                    </h1>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Booked Item */}

                    

                    {
                        bookingList.map(item => <SingleOrder
                            key={item._id}
                            data = {item}
                            isMyBooking={false} 
                        ></SingleOrder>)
                    }


                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default AllOrders;