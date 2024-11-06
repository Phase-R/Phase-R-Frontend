import React from "react"
import PageSection from "../PageSection"
import PageHeader from "../PageHeader"

export default function Store() {
    return (
        <div className="bg-gradient-to-b from-[#191919] via-[#8A5081] to-[#191919] py-10 text-black font-sans">
            
            <section className="relative flex items-center justify-center text-center py-16 m-10">
                <div className="absolute box-content h-32 w-40 p-4 bg-[#D9D9D9] opacity-10"></div>
                <h1 className="text-7xl font-extrabold text-[#483045]-700 opacity-20">PHASE-R</h1>
            </section>

            <div className="flex justify-center space-x-4 py-6">
                <button className="px-6 py-2 bg-gray-700 text-gray-200 rounded-lg hover:bg-gray-600">New Arrivals</button>
                <button className="px-6 py-2 bg-green-700 text-gray-200 rounded-lg hover:bg-green-600">What's Trending</button>
            </div>

            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6">
                <div className="bg-white p-4 rounded-lg">
                    <div className="h-48 bg-[#E9E9EB] rounded-lg mb-4"></div>
                    <h3 className="text-lg font-bold">Cool Shoe Name</h3>
                    <p className="text-black-400">120.00</p>
                    <button className="mt-4 w-full bg-[#E9E9EB] text-black py-2 rounded hover:bg-gray-600">Add to Cart</button>
                </div>
            </section>

            <section className="flex justify-around py-10">
                <div className="bg-[#D9D9D9] bg-opacity-20 p-8 w-1/3 text-center rounded-lg">
                    <h2 className="text-2xl text-white font-semibold">Best Seller</h2>
                    <button className="mt-4 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600">Shop Now</button>
                </div>
                <div className="bg-[#D9D9D9] bg-opacity-20 p-8 w-1/3 text-center rounded-lg">
                    <h2 className="text-2xl text-white font-semibold">Special Collection</h2>
                    <button className="mt-4 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600">Shop Now</button>
                </div>
            </section>

        </div>
    );
}