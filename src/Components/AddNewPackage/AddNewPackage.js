import React, { useEffect, useRef, useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const AddNewPackage = () => {


    // get current user
    const {user} = useAuth();

    // get field
    const nameRef = useRef();
    const costRef = useRef();
    const imgRef = useRef();
    const descRef = useRef();
    const formRef = useRef();

    // on submission
    const handleSubmit = e => {

        e.preventDefault();

        const name = nameRef.current.value;
        const cost = costRef.current.value;
        const img = imgRef.current.value;
        const description = descRef.current.value;
        const formValue = {name,cost,img,description,addedBy: user.email};

        
            fetch('https://desolate-sea-84210.herokuapp.com/add-package',{
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(formValue)
            })
            .then(res => res.json())
            .then(data => console.log(data))

        // clear form
       formRef.current.reset();
       
    }






    return (
        <div className="flex justify-center items-center h-full py-20 bg-white">
            
            <div className="">

                <div className="w-full p-8 my-4 md:px-12 lg:pl-20 lg:pr-20 mr-auto rounded-2xl shadow-2xl">
                    <div className="flex">
                        <h1 className="font-bold  uppercase text-xl md:text-3xl lg:text-5xl text-center">Send Package</h1>
                    </div>
                   <form onSubmit={handleSubmit} ref={formRef}>
                   <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                        <input ref={nameRef} required className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text" placeholder="Place Name*" />
                        <input ref={costRef} required className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text" placeholder="Cost*" />
                        
                    </div>
                    <div>
                    <input ref={imgRef} required className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text" placeholder="Image URL*" />
                    </div>
                    <div className="my-4">
                        <textarea ref={descRef} required placeholder="Dsecription*" className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                    </div>
                    <div className="my-2 w-full md:w-1/2 lg:w-2/4">
                        <button type="submit" className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline">
                            Add Item
                        </button>
                    </div>
                   </form>
                </div>

                
            </div>
            
        </div>
    );
};

export default AddNewPackage;