import React from 'react';
import useAuth from '../../Hooks/useAuth';

const SinglePackageItem = (props) => {

    // get booking user
    const { user } = useAuth();
    

    // on click booking btn
    const handleBook = item => {

        item.bookedBy = user.email;

        const confirm = window.confirm("Are you realy want to book it.")

        if (confirm) {
            fetch('https://desolate-sea-84210.herokuapp.com/booking', {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(item)
            })
                .then(res => res.json())
                .then(data => {
                    if(data.insertedId){
                        alert(`Successfully Booked by `+user.displayName)
                    }
                });
        }





    }






    return (
        <div className="relative w-full bg-white  sahdow-lg overflow-hidden flex flex-col justify-center items-center shadow-lg hover:shadow-xl transition ">
            <div>
                <img className="object-center object-cover h-auto w-full " src={props.data?.img} alt="photo" />
            </div>
            <div className="px-2 text-center py-8 sm:py-6">
                <p className="text-xl text-gray-700 font-bold mb-2">{props.data?.name}</p>
                <p className="px-2 text-base text-gray-400 font-normal">{props.data?.description.slice(0, 100)}...</p>
                <button onClick={() => { handleBook(props.data) }} class="mt-6 py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">Book Now</button>
            </div>
            <div class="px-2 absolute top-4 right-0 py-2 px-4 bg-red-400">
                <span class="text-md  text-white"><span className="font-bold text-lg raleway-font">${props.data?.cost}</span> / per person</span>
            </div>
        </div>
    );
};

export default SinglePackageItem;