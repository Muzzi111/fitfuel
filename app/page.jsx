import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="min-h-dvh bg-[url('/picc.jpg')] bg-no-repeat bg-center bg-cover">
        <div className="ml-250 py-70 gap-8">
          <h1 className="text-4xl text-black font-bold mb-4">
            Feel Great.
          </h1>
          <h1 className="text-4xl text-black font-bold mb-4">
            Body and Mind.
          </h1>
          <p className="text-lg text-black">
            Choose from hundreds of workouts, healthy recipes, relaxing meditations, <br /> and expert articles, 
            for a whole body and mind approach to feeling great.
          </p>
          <button className="bg-white px-6 py-2 rounded-full hover:bg-gray-400 transition-colors duration-300">
            Join Now
          </button>
        </div>
      </section>
    </main>
  );
}
