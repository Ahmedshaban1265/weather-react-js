import React, { useEffect, useState } from 'react'
import banner from "../assets/images/banner.png"
import axios from 'axios';


export default function () {
    let [city, setCity] = useState("")
    let [daysWeather, setDaysWeather] = useState([])
    let [currentDay, setCurrentDay] = useState([])
    function getPosition() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async position => {
                let { data } = await axios.get(`https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`)
                setCity(data.address.city || data.address.country || data.address.state);

            }, err => {
                console.log(err);

            })
        }
    }
    async function getWeather(city) {
        let { data } = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=d3009501cfbc4064b78131238252607&q=${city}&days=3`)
        console.log(data.current);
        setDaysWeather(data.forecast.forecastday)
        setCurrentDay(data.current)
        setCity(data.location.name)


    }
    function getDay(dateString) {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const date = new Date(dateString)
        return days[date.getDay()];
    }
    useEffect(() => {
        getPosition()
    }, [])
    useEffect(() => {
        if (city) {
            getWeather(city)
        }
    }, [city])

    return (
        <>
            <section style={{ backgroundImage: `url(${banner})` }} className={`bg-scroll  bg-[#1E202B] bg-no-repeat`}>
                <div className='max-w-6xl mx-auto px-4 py-2 sm:px-6 lg:px-8 '>
                    <div className='mt-8 '>
                        <form action="" className='relative flex items-center'>
                            <input onInput={async (e) => {
                                const citySearchValue = e.target.value.trim();
                                console.log(e.target.value);
                                if (citySearchValue.length >= 3) {
                                    try {
                                        await getWeather(citySearchValue);
                                    } catch (err) {
                                        console.error(err);
                                    }
                                } else if (citySearchValue.length == 0) {
                                    getPosition()
                                }
                            }} type="text" name="" id="" className='w-full bg-[#1E202B] placeholder:text-gray-400 rounded-4xl px-3  py-3.5 outline-0 border-0 text-white' placeholder='Find Your Location...' />
                            <input type="button" className='absolute  right-1.5 rounded-4xl text-white bg-blue-500 px-8  py-2' value={"Find"} name="" id="" />
                        </form>
                    </div>
                    <div className='flex flex-col gap-6 md:gap-0 md:flex-row  text-[#BFC1C8] items-stretch my-20'>

                        <div className='w-full md:w-1/3 flex flex-col'>
                            <div className='bg-[#2D303D] flex justify-between px-3 py-1.5'>
                                <p>{getDay(daysWeather[0]?.date)}</p>
                                <p>{daysWeather[0]?.date}</p>
                            </div>
                            <div className='bg-[#323544] px-3 py-8 flex-1 flex flex-col justify-between'>
                                <p className='text-lg font-bold'>{city}</p>
                                <h1 className='text-white text-8xl font-bold'>{currentDay?.temp_c}<sup>o</sup>C</h1>
                                <img src={currentDay?.condition?.icon} alt="" className='me-auto' />
                                <p className='text-blue-700'>{currentDay?.condition?.text}</p>
                            </div>
                        </div>

                        <div className='w-full md:w-1/3 flex flex-col'>
                            <div className='bg-[#222530] px-2.5 py-1.5 text-center'>
                                <p>{getDay(daysWeather[1]?.date)}</p>
                            </div>
                            <div className='bg-[#262936] py-5 flex-1 flex flex-col items-center justify-between'>
                                <img src={daysWeather[1]?.day.condition.icon} alt="" />
                                <h2 className='text-white text-3xl'>{daysWeather[1]?.day.maxtemp_c}<sup>o</sup>C</h2>
                                <h2 className=' text-lg'>{daysWeather[1]?.day.mintemp_c}<sup>o</sup>C</h2>
                                <p className='text-blue-900'>{daysWeather[1]?.day.condition.text}</p>
                            </div>
                        </div>

                        <div className='w-full md:w-1/3 flex flex-col'>
                            <div className='bg-[#2D303D] text-center px-2.5 py-1.5'>
                                <p>{getDay(daysWeather[2]?.date)}</p>
                            </div>
                            <div className='bg-[#323544] py-5 flex-1 flex flex-col items-center justify-between'>
                                <img src={daysWeather[2]?.day.condition.icon} alt="" />
                                <h2 className='text-white text-3xl'>{daysWeather[2]?.day.maxtemp_c}<sup>o</sup>C</h2>
                                <h2 className=' text-lg'>{daysWeather[2]?.day.mintemp_c}<sup>o</sup>C</h2>
                                <p className='text-blue-900'>{daysWeather[2]?.day.condition.text}</p>
                            </div>
                        </div>

                    </div>


                </div>
            </section>
        </>
    )
}
