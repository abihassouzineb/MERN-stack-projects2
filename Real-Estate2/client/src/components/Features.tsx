export default function Features() {
  return (
    <section className="flex flex-col justify-center items-center gap-y-10 py-20">
      <h1 className="text-4xl font-bold border-b-2 border-blue-500 pb-2 px-5">
        Why Choosing Us ?
      </h1>

      <div className="flex flex-row justify-center items-center gap-x-30">
        {/* first feature */}
        <div className="w-72 bg-white hover:-skew-y-3 duration-300 shadow-[0px_15px_10px_0px_rgba(0,0,0,0.1)] p-9 space-y-3 relative overflow-hidden hover:-translate-x-2 hover:-translate-y-2">
          <div className="w-24 h-24 bg-violet-500 rounded-full absolute -right-5 -top-7">
            <p className="absolute bottom-6 left-7 text-white text-2xl">01</p>
          </div>
          <div className="fill-violet-500 w-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-10 text-blue-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
          <h1 className="font-bold text-xl">
            Property Search & Interactive Maps
          </h1>
          <p className="text-sm text-zinc-500 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fuga
            adipisicing elit
          </p>
        </div>
        {/* second feature */}
        <div className="w-72 bg-white shadow-[0px_15px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden hover:-skew-y-3 duration-300 hover:-translate-x-2 hover:-translate-y-2">
          <div className="w-24 h-24 bg-violet-500 rounded-full absolute -right-5 -top-7">
            <p className="absolute bottom-6 left-7 text-white text-2xl">02</p>
          </div>
          <div className="fill-violet-500 w-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-11 text-blue-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </div>
          <h1 className="font-bold text-xl">
            Save & Manage Your Favorite Properties
          </h1>
          <p className="text-sm text-zinc-500 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fuga
            adipisicing elit
          </p>
        </div>
        {/* third feature */}
        <div className="w-72 bg-white shadow-[0px_15px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden hover:-skew-y-3 duration-300 hover:-translate-x-2 hover:-translate-y-2">
          <div className="w-24 h-24 bg-violet-500 rounded-full absolute -right-5 -top-7">
            <p className="absolute bottom-6 left-7 text-white text-2xl">03</p>
          </div>
          <div className="fill-violet-500 w-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-11 text-blue-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
          </div>
          <h1 className="font-bold text-xl">Secure & Hassle-Free Experience</h1>
          <p className="text-sm text-zinc-500 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fuga
            adipisicing elit
          </p>
        </div>
      </div>
    </section>
  );
}
