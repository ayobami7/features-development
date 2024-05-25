"use client";

import React, { useState } from 'react';
import { testimonials } from '@/constants';
import Image from 'next/image';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const testimonialsPerPage = 3;

    const clickPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };

    const clickNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    };

    const TestimonialCard = ({ testimonial }) => (
        <div className="flex flex-col flex-wrap justify-between align-center w-80 md:h-[50vh] text-white bg-gray-700 my-4 mx-4 px-4 py-4 rounded-xl"> 
            <div>
                <h4 className="text-white mb-4">{testimonial.title}</h4>
                <p className="my-4">{testimonial.comment}</p>
            </div>
            <hr className="border-gray-500 rounded my-4" />
            <div className="flex space-x-4 items-center">
                <Image src={testimonial.image} alt={testimonial.name} width={50} height={50} />
                <div>
                    <h4>{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.position} at {testimonial.company}</p>
                </div> 
            </div>
        </div>
    );

    return (
        <>
            <div className="mx-auto items-center bg-color bg-circle-gradient p-5 ">
                <div className="justify-center items-center text-center my-10 text-purple-700">
                    <h1 className="my-4 font-semibold purple">WHAT THEY SAY</h1>
                    <h1 className="text-5xl font-semibold my-4 text-white">Our Clients Kind Words</h1>
                    <p className="text-gray-500 mx-auto w-96 text-wrap my-4">Here are some testimonials from our Clients after using our website to manage their business. </p>
                </div>
                <div className="flex flex-wrap justify-center overflow-hidden">
                    {testimonials.slice(currentIndex, currentIndex + testimonialsPerPage).map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} />
                    ))}
                </div>
                <div className="flex justify-center items-center mx-auto text-white space-x-5 m-5">
                    <button className="rounded-full w-10 h-10 bg-gray-700 hover:bg-purple-700 flex items-center justify-center" onClick={clickPrev}><FaArrowLeft /></button>
                    <button className="rounded-full w-10 h-10 bg-gray-700 hover:bg-purple-700 flex items-center justify-center" onClick={clickNext}><FaArrowRight /></button>
                </div>
            </div>
        </>
    );
};

export default Testimonials;
