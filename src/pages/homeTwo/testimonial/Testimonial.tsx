'use client'
import MaxWidthControls from '@/components/shared/MaxWidthControls';
import TestimonialClientReviweCard from '@/components/shared/testimonial/TestimonialClientReviweCard';
import React from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Testimonial = () => {
    return (
        <div>
            <MaxWidthControls className=" overflow-hidden bg-gray-200 ">
                <div className=" mx-12 mb-5 " >
                    <div className=" w-full mb-12 ">
                        <h2 className=" text-center mt-12 text-Primary mb-3 uppercase text-sm ">
                            Client Testimonial
                        </h2>
                        <h2 className=" text-center font-semibold  text-4xl ">
                            What our Client Says
                        </h2>
                    </div>
                    <div className={` flex justify-between items-center relative  `}>
                        <Swiper
                        className=" testimonial  px-5 "
                        slidesPerView={3}
                        // loop={true}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        }}
                        // pagination={{
                        //     clickable: true,
                        // }}
                        // navigation={{
                        //     prevEl: "#testimonial-slider-btn-prev", // ID selector for prev button
                        //     nextEl: "#testimonial-slider-btn-next", // ID selector for next button
                        // }}
                        // initialSlide={1}
                        modules={[ Autoplay]}
                        breakpoints={{
                            320: {
                            slidesPerView: 1, // Show 1 slide on screens smaller than 640px
                            },
                            640: {
                            slidesPerView: 2, // Show 1 slide on screens smaller than 640px
                            },
                            768: {
                            slidesPerView: 3, // Show 2 slides on screens 640px and above
                            },
                            1024: {
                            slidesPerView: 3, // Show 3 slides on screens 768px and above
                            },
                            1280: {
                            slidesPerView: 3, // Show 5 slides on screens 1024px and above
                            },
                        }}
                        >
                            <SwiperSlide>
                                <TestimonialClientReviweCard className='w-[384px] rounded-none ' ></TestimonialClientReviweCard>
                            </SwiperSlide>
                            <SwiperSlide>
                                <TestimonialClientReviweCard className='w-[384px] rounded-none ' ></TestimonialClientReviweCard>
                            </SwiperSlide>
                            <SwiperSlide>
                                <TestimonialClientReviweCard className='w-[384px] rounded-none ' ></TestimonialClientReviweCard>
                            </SwiperSlide>
                            <SwiperSlide>
                                <TestimonialClientReviweCard className='w-[384px] rounded-none ' ></TestimonialClientReviweCard>
                            </SwiperSlide>
                            <SwiperSlide>
                                <TestimonialClientReviweCard className='w-[384px] rounded-none ' ></TestimonialClientReviweCard>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </MaxWidthControls>
        </div>
    );
};

export default Testimonial;