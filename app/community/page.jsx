"use client"
import Image from "next/image";
import Link from "next/link";
import React, {useEffect, useState} from 'react';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { IoIosMore } from "react-icons/io";
import { collection, getDocs } from "firebase/firestore";
import db from '@/lib/firebase.config';
import { TbLoader3 } from "react-icons/tb";

const page = () => {

  const[community, setcom] = useState([])
  const [loading, setLoading] = useState(true)

  // // mock recipe data
  // const recipes = [
  //   {
  //     image: "/bg.jpg",
  //     author: "Jason Statham",
  //     title: "Nigerian Party Jollof",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi delectus rerum atque. Omnis hic ea error modi, voluptatem architecto praesentium.",
  //     timestamp: "7/9/20205",
  //   },
  //   {
  //     image: "/c1.jpg",
  //     author: "Jason Statham",
  //     title: "Nigerian Party Jollof",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi delectus rerum atque. Omnis hic ea error modi, voluptatem architecto praesentium.",
  //     timestamp: "7/9/20205",
  //   },
  //   {
  //     image: "/c3.jpg",
  //     author: "Jason Statham",
  //     title: "Nigerian Party Jollof",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi delectus rerum atque. Omnis hic ea error modi, voluptatem architecto praesentium.",
  //     timestamp: "7/9/20205",
  //   },
  //   {
  //     image: "/c2.jpg",
  //     author: "Jason Statham",
  //     title: "Nigerian Party Jollof",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi delectus rerum atque. Omnis hic ea error modi, voluptatem architecto praesentium.",
  //     timestamp: "7/9/20205",
  //   },
  //   {
  //     image: "/bg.jpg",
  //     author: "Jason Statham",
  //     title: "Nigerian Party Jollof",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi delectus rerum atque. Omnis hic ea error modi, voluptatem architecto praesentium.",
  //     timestamp: "7/9/20205",
  //   },
  //   {
  //     image: "/bg.jpg",
  //     author: "Jason Statham",
  //     title: "Nigerian Party Jollof",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi delectus rerum atque. Omnis hic ea error modi, voluptatem architecto praesentium.",
  //     timestamp: "7/9/20205",
  //   },
  // ];

  const fetchcom = async ()=>{
    let comData =[]
    try {
      const querySnapshot = await getDocs(collection(db, "community"))
      querySnapshot.forEach((doc)=> {
        console.log(doc.id, " => ", doc.data());
        const id = doc.id
        const com = {id, ...doc.data() }
        console.log(com);
        comData.push(com)
        console.log(comData);
        
        
      });
    setcom(comData)
    console.log(community);
    
    } catch (error) {
      console.error("Error fetching data", error);
      alert("An error occured") 
    }finally{
      setLoading(false)
    
    }
  }
useEffect(()=>{fetchcom()}, [])

  return (
    <main className="min-h-dvh">
      <section className="min-h-[40vh] bg-[url('/bgg2.jpg')] bg-no-repeat bg-center bg-cover bg-fixed">
        <div className="min-h-[40vh] bg-gray-700 flex items-center justify-center">
          <div className="space-y-5">
            <h1 className="text-white text-4xl font-extrabold uppercase text-center">
              Start a topic
            </h1>
            <p className="text-gray-200 text-center text-lg">
              Welcome to Fitfuel — your space for fitness, health, and growth.
              Whether you're tracking workouts, setting goals, or sharing your journey, 
             this community is built to keep you motivated and moving. Let’s stay consistent, 
             stay healthy, and crush every goal together.


            </p>
          </div>
        </div>
      </section>

      {loading ? 
      <div className="h-[50vh] flex items-center justify-center"> 
      <TbLoader3 className="animate-spin text-5xl text-blue-600" />

      </div> : 
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-10 md:p-10 p-3">
        {community.map((com, i) => (
          <div key={i} className="space-y-3 shadow-md p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src={com.image}
                  alt="user"
                  className="w-8 h-8 rounded-full"
                />
                <h2>{com.author}</h2>
              </div>
              <IoIosMore className="text-xl" />
            </div>
            <p className="text-lg">{com.fitnessGoals}</p>
            <p className="line-clamp-2">{com.HealthHistory}</p>
            <p className="line-clamp-2">{com.physicalActivity}</p>
            <div className="flex items-center justify-between">
              <p>{com.timestamp}</p>
              <Link
                href={"#"}
                className="flex items-center text-sm text-gray-600 hover:text-black transition-all duration-300"
              >
                Read More
                <MdKeyboardDoubleArrowRight className="text-lg" />
              </Link>
            </div>
          </div>
        ))}
      </section>
}
      

    </main>
  );
};

export default page;
