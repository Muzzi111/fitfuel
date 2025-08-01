import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="min-h-dvh bg-[url('/main.jpg')] bg-no-repeat bg-center bg-cover">
        <div className="lg:ml-50 ml-10 py-70 lg:space-y-12 space-y-4">
          <h1 className="text-4xl text-gray-800 font-bold mb-4">
            Feel Great.
          </h1>
          <h1 className="text-4xl text-black font-bold mb-4">
            Body and Mind.
          </h1>
          <p className="text-lg text-gray-700 font-semibold">
            Choose from hundreds of workouts, healthy recipes, relaxing meditations, <br /> and expert articles, 
            for a whole body and mind approach to feeling great.
          </p>
          <Link href="/register">
            <button className="bg-blue-500 px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300">
             Join Now
           </button>
          </Link>
        </div>
        
      </section>
     <section className="min-h-dvh bg-gray-200">
        <div>
          <div className=" flex flex-col items-center py-6 gap-2">
              <h1 className="text-gray-600 font-bold text-2xl">Energy is for Everyone</h1>
              <p className="text-blue-500 max-lg:px-1 px-5 font-semibold text-lg">Believe in the power of a motivating group fitness community.</p>
          </div>
          <h2>Check Out Our Group Fitness Classes</h2>
          <div className="md:px-30 px-10 py-1 gap-3 grid grid-cols-3">
            {[
              "/wok1.jpg",
              "/wok2.jpg",
             "/wok3.jpg",
             "/wok4.jpg",
             "/wok7.jpg",
             "/wok8.jpg",
               ].map((src, index) => (
              <div key={index} className="relative group w-full h-full">
               <img
                   src={src}
                  alt={`workout-${index}`}
                  className="w-full h-full object-cover"
                  />
                <div className="absolute inset-0 bg-blue-500 bg-opacity-50 opacity-0 group-hover:opacity-70 transition duration-300 flex items-center justify-center">
                  <p className="text-white text-sm font-semibold">Workout {index + 1}</p>
                </div>
              </div>
                ))}
          </div>
          <div className="h-30 bg-blue-500 py-5">
              <h1 className="text-2xl text-gray-700 font-bold flex items-center justify-center  max-lg:px-1 px-5 ">EMBRACE A #NOJUDGMENTS PHILOSOPHY</h1>
           </div>

        </div>
      </section>
    </main>
  );
}
