import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {FaStar} from 'react-icons/fa6'
import { Avatar } from "flowbite-react";
import proPic from '../assets/profile.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Review = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
        <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customers</h2>

        <div>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>

                <div className='mt-7'>
                    <p className='mb-5'>First of all, I've never ever been in love in my almost 25 years of miserable existence, nor someone has been in love with me, so I don't actually know how it really feels, (that's a deep and traumatic conversation for another day), but to me it's kind of unreal that people can last years and not get bored. Please, don't get me wrong, I'm not saying it's not a real thing , but I can't even start to imagine someone loving me for so long without getting bored of me. (Plot twist: deep down, I'm a hopeless romantic who yearns to love and be loved for a really long time and to be in a healthy relationship, but that's not gonna happen, so).
                    </p>
                    <Avatar img="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/users/1708647188i/127257911._UY200_CR0,0,200,200_.jpg" alt="" rounded className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>Mark Pinge</h5>
                    <p className='text-base'>CEO, ABC Company</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>

                <div className='mt-7'>
                    <p className='mb-5'>I hate miscommunication. I believe it's one of the worst tropes ever and it's used throughout the book. Harriet complains and whines a lot, has a lot of inner monologues but she never says shit. Ma'am, please don't expect that everyone knows what the hell do you want if you never say anything. I'm not defending Wyn either, because he did the same thing. And they were constantly lying about how they were happy and okay. Both, Harriet and Wyn made a lot of assumptions instead of actually talk to each other, which could have spared us from a 400 pages book. Things could have solved up faster if they both had spoken first.</p>
                    <Avatar img="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/users/1717913197i/36538861._UX200_CR0,0,200,200_.jpg" alt="" rounded className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>Mark Pinge</h5>
                    <p className='text-base'>CEO, ABC Company</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>

                <div className='mt-7'>
                    <p className='mb-5'>Did you just throw so many years of med school, hard work and your residency for pottery? I don't know how things work for med school in the u.s, but, girly pop, I'm pretty sure that isn't cheap, not even when you study in a good school. And holy shit, she’s a neurosurgery resident. (My dream was to become a neurosurgeon, so I was speechless and almost screaming like Regina George in Mean Girls). I'm still speachless and amazed because how are you gonna pay your +$200,000 debts from pottery? Wyn must be a fucking billionare.</p>
                    <Avatar img="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/users/1702105781i/151334777._UX200_CR0,0,200,200_.jpg" alt="" rounded className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>Mark Pinge</h5>
                    <p className='text-base'>CEO, ABC Company</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>

                <div className='mt-7'>
                    <p className='mb-5'>let's talk about names for a sec, cause WHERE DOES SHE FIND THESE NAMES?? his name is literally WYNDHAM. Wyndfuckingham. It sounded so yeehaw but it ended up being an English name 🥹. This should've been a sign for me to stop reading it *sighs* I should've known at this point that he'd be a loser. It's almost as if his parents set him up to be a failure.
                    Also his SISTER'S name was Michael ?? For half of the book I thought he was talking about his brother. Parth sounds like the Bengali word for fart so I couldn't take him seriously at all. (I'll have to confirm this with my parents tho).</p>
                    <Avatar img="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/users/1645653836i/1323413._UX200_CR0,50,200,200_.jpg" alt="" rounded className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>Mark Pinge</h5>
                    <p className='text-base'>CEO, ABC Company</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>

                <div className='mt-7'>
                    <p className='mb-5'>I was gonna write about each character individually but I'm already sick of it. Her friends were so one dimensional. I knew I'd hate Sabrina from the start, tbf I expected her to announce there'll be a double wedding 😭 so her going behind their backs didn't faze me at all. Her friends’ side story could've been 20 pages long (max) if they just had one single conversation? Like farm girl tell your friends you're pregnant and Sabrina tell them you miss them? what was all that nonsense *rolling my eyes* Side note, parth was such a bad boyfriend. He was with sabrina for 10 years or whatever but got annoyed at her for reacting the way she did and didn't think of finding her after she was gone for the whole day? AND her friends had to tell him what to do. What did I expect from someone named Parth anyways 😃</p>
                    <Avatar img="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/users/1629292612i/58160628._UY200_CR27,0,200,200_.jpg" alt="" rounded className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>Mark Pinge</h5>
                    <p className='text-base'>CEO, ABC Company</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>

                <div className='mt-7'>
                    <p className='mb-5'>I have to admit that this book is the sexiest, steamiest novel the author has written. The main reason is that the couple in the story has already known each other for ten years, and even though they broke up, the flame is still there. They are obviously soulmates! But what happened between Harriet and Wyn? They dated for nearly a decade, staying as fiancées for eight years. Why did Wyn end things with a four-minute-long phone call? Was it only long distance, did one of them cheat, or is there any crucial, life-changing reason that tore them apart?</p>
                    <Avatar img="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/users/1673545562i/48727754._UX200_CR0,0,200,200_.jpg" alt="" rounded className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>Mark Pinge</h5>
                    <p className='text-base'>CEO, ABC Company</p>
                </div>
            </div>
        </SwiperSlide>
        
      </Swiper>
        </div>

    </div>
  )
}

export default Review