import './PoPularPackages.css';

import React, { useEffect, useState } from 'react';
import SinglePackageItem from '../SinglePackageItem/SinglePackageItem';

const PoPularPackages = () => {


    const [packages,setPackages] = useState([]);

    useEffect(()=>{
        fetch('https://desolate-sea-84210.herokuapp.com/our-packages')
        .then(res => res.json())
        .then(data => setPackages(data))
    },[]);


    return (
        <section className="package-container max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12 pt-20">
            <div className="text-center pb-12">
                <h2 className="text-base font-bold text-red-400 pb-2">
                    <span className="packages-subtitle bg-red-400"></span> EXPLORE GREAT PLACES
                </h2>
                <h1 className="package-title py-4 text-3xl md:text-4xl lg:text-5xl font-heading">
                    POPULAR PACKAGES
                </h1>
                <p className="md:px-20">Mollit voluptatem perspiciatis convallis elementum corporis quo veritatis aliquid blandit, blandit torquent, odit placeat. Adipiscing repudiandae eius cursus? Nostrum magnis maxime curae placeat.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* package item  */}
                
                {
                    packages.map(item => <SinglePackageItem
                         key={item._id}
                         data={item}
                          ></SinglePackageItem>)
                }

            </div>
        </section>
    );
};

export default PoPularPackages;