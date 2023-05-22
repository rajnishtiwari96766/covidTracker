import React, { useState } from 'react'
import { useEffect } from 'react'
import './covid.css'

const Covid=()=> {
    const[data,setData]=useState([]); //this will be used to store the data in the box where initially the empty array is set
    const getCovidData=async()=>{
        try{
          const res=await fetch('https://data.covid19india.org/v4/min/data.min.json')
          // console.log(res)  ... this will basically print the data in the console
      
          const actualData=await res.json();//this will properly organize your data
          console.log(actualData.GJ.delta)

          setData(actualData.GJ.delta)  //here all the data ab aa gya hai bss data. karke tu us data ko access kar sakta hai
        }catch(err){
          console.log(err)
        }
       }
       //it will everytime reaload your website again and agin when the file is opened...
        useEffect(()=>{
          getCovidData();
        },[])
  return (
   <>
   <section>

<header>
   <h1>🔴 Live</h1>
   <h2>Live covid-19 Tracker</h2>
</header>

   <ul className='main_card'>
    <ul className='card'>
        <div className='card_main'>
            <div className='card_inner'>
                <p className='card_name'><span>State</span> </p>
                <p className='card_total card_small'>Gujrat</p>
            </div>
        </div>
    </ul>
    <ul className='card'>
        <div className='card_main'>
            <div className='card_inner'>
                <p className='card_name'><span>Total</span>  vaccinated</p>
                <p className='card_total card_small'>{data.vaccinated1}</p>
            </div>
        </div>
    </ul>
    <ul className='card'>
        <div className='card_main'>
            <div className='card_inner'>
                <p className='card_name'><span>Total</span>  Tested</p>
                <p className='card_total card_small'>{data.tested}</p>
            </div>
        </div>
    </ul>
    <ul className='card'>
        <div className='card_main'>
            <div className='card_inner'>
                <p className='card_name'><span>Total</span>  vaccinated2</p>
                <p className='card_total card_small'>{data.vaccinated2}</p>
            </div>
        </div>
    </ul>
   </ul>
   </section>
   </>
  )
}

export default Covid