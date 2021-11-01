import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import Footer from '../Footer/Footer';
import { HeaderMyOrder } from '../Header/Header';
import SingleOrder from '../SingleOrder/SingleOrder';

const MyOrders = () => {

    const {user} = useAuth();

    const[mylist,setMyList] = useState([]);

    const url = `https://desolate-sea-84210.herokuapp.com/booking/${user.email}`;

    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setMyList(data));
    },[user]);

    // handle delete
    const handleCancel = id =>{

        // console.log(id);
        const confirm = window.confirm("Are you realy want to Cancel.");

         if(confirm){

            fetch(`https://desolate-sea-84210.herokuapp.com/booking/cancel/${id}`,{
                method: 'delete',
                headers: {
                    'content-type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {

                console.log(data);
                // const remaining = mylist.filter(item => item._id != data.id);
                // setMyList(remaining);

                // if(data.deleteCount !== 0){
                //     alert('deleted successfully.')
                // }
            })

         }
    }

    return (
        <>
            <HeaderMyOrder></HeaderMyOrder>

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
                        mylist.map(item => <SingleOrder
                            key={item._id}
                            data = {item}
                            isMyBooking={true}
                            cancleHandler={handleCancel}
                        ></SingleOrder>)
                    }


                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default MyOrders;