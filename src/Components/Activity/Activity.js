import React from 'react';

const Activity = () => {



    // 
    // https://i.ibb.co/C7nzCqX/icon8.png
    // https://i.ibb.co/MRW5MyD/icon9.png
    // https://i.ibb.co/8dw538z/icon10.png
    // https://i.ibb.co/x1mDCpd/icon11.png

    return (
        <section class="text-gray-600 body-font">
            <div class="package-container max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12 pt-20">
                <div class="flex flex-col text-center w-full mb-20">
                    <h2 class="text-base font-bold text-red-400 pb-2"> <span className="packages-subtitle bg-red-400"></span> ROOF PARTY POLAROID</h2>
                    <h1 class="package-title py-5 text-3xl md:text-4xl lg:text-5xl font-heading">ADVENTURE & ACTIVITY</h1>
                    <p class="md:px-20 lg:px-36">Mollit voluptatem perspiciatis convallis elementum corporis quo veritatis aliquid blandit, blandit torquent, odit placeat. Adipiscing repudiandae eius cursus? Nostrum magnis maxime curae placeat.</p>
                </div>
                <div class="grid gap-5 grid-cols-2 md:gird-cols-4 lg:grid-cols-6 ">

                    <div class="px-8 py-4 cursor-pointer border-2 border-gray-200 border-opacity-60 text-center">
                        <img className="m-auto" src="https://i.ibb.co/1nMWWGg/icon6.png" alt="" />
                        <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font my-2">Adventure</h2>
                        <p class="leading-relaxed text-base mb-4">15 Destination</p>
                    </div>
                    <div class="px-8 py-4 cursor-pointer border-2 border-gray-200 border-opacity-60 text-center">
                        <img className="m-auto" src="https://i.ibb.co/8dw538z/icon10.png" alt="" />
                        <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font my-2">Trekking</h2>
                        <p class="leading-relaxed text-base mb-4">12 Destination</p>
                    </div>
                    <div class="px-8 py-4 cursor-pointer border-2 border-gray-200 border-opacity-60 text-center">
                        <img className="m-auto" src="https://i.ibb.co/MRW5MyD/icon9.png" alt="" />
                        <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font my-2">Camp Fire</h2>
                        <p class="leading-relaxed text-base mb-4">7 Destination</p>
                    </div>
                    <div class="px-8 py-4 cursor-pointer border-2 border-gray-200 border-opacity-60 text-center">
                        <img className="m-auto" src="https://i.ibb.co/C7nzCqX/icon8.png" alt="" />
                        <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font my-2">Off Road</h2>
                        <p class="leading-relaxed text-base mb-4">
                            15 Destination</p>
                    </div>
                    <div class="px-8 py-4 cursor-pointer border-2 border-gray-200 border-opacity-60 text-center">
                        <img className="m-auto" src="https://i.ibb.co/P9nLfB8/icon7.png" alt="" />
                        <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font my-2">Camping</h2>
                        <p class="leading-relaxed text-base mb-4">
                            13 Destination</p>
                    </div>
                    <div class="px-8 py-4 cursor-pointer border-2 border-gray-200 border-opacity-60 text-center">
                        <img className="m-auto" src="https://i.ibb.co/x1mDCpd/icon11.png" alt="" />
                        <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font my-2">Exploring</h2>
                        <p class="leading-relaxed text-base mb-4">
                            25 Destination</p>
                    </div>
                    

                </div>
                
            </div>
        </section>
    );
};

export default Activity;