
import Image from "next/image";
export default function Home() {
  return (
    <div>
      {/* Hero Section Start */}
      <div className="relative isolate px-6  banner_bg ">
        <div
          className="absolute inset-x-0 -top-40 -z-10  sm:-top-80"
          aria-hidden="true"
        ></div>
        <div className="mx-auto  py-32 sm:py-48 ">
          <div className="text-center">
            <h1 className="lg:text-5xl font-bold  text-white sm:text-2xl">
              Land your dream job.Get advice from top  Google professionals.
            </h1>
            <p className="mt-6 lg:text-2xl tracking-tight sm:text-1xl leading-9 text-white">
              Book verified professionals at Google for anonymous 1-on-1 voice
              calls, <br />
              interview questions and career advice. Experts from other
              companies coming soon.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 sm:flex-row flex-col">
            <div className="basis-4/4">
              <label className="relative block">
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <Image src="/Search.svg" width={20} height={20} alt="search" />
                </span>
                <input
                  className=" w-full lg:w-96 h-12  placeholder:text-base-500 block  bg-white  border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500  focus:ring-1 sm:text-sm"
                  placeholder="Search Job Experts from Google"
                  type="text"
                  name="search"
                />
              </label>
              </div>
              <div className="basis-4/4">
              <button className="bg-[#0E713C]  text-white text-sm font-semibold  py-4 px-4 rounded-md my-3 mx-5">
                Find a Google Expert
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Hero Section Ends */}
      {/* Container Start */}

      
        <div className=" flex flex-row justify-center mt-1 px-24   pt-5 mx-auto sm:flex-row flex-col bg-[#F9FAFC]">
          <div className="basis-1/4 m-[35px]">
            <div class="max-w-sm  ">
              <Image
                src="/feature 1.png"
                className="rounded-t-lg w-full  h-48"
                width={300}
                height={178}
                alt="logo"
              />
              <div class="p-2">
                <a href="#">
                  <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-slate-900 dark:text-slate">
                   
                    Get the Latest Job Info
                  </h5>
                </a>
                <p class="mb-3 font-normal text-center  text-gray-700 dark:text-gray-400">
                 
                  Gain insight into Google’s culture and values, promotions,
                  compensation, interview questions and more
                </p>
              </div>
            </div>
          </div>

          <div className="basis-1/4 m-[35px]">
            <div class="max-w-sm  ">
              <Image
                src="/feature 2.png"
                className="rounded-t-lg w-full h-48"
                width={300}
                height={178}
                alt="logo"
              />
              <div class="p-2">
                <a href="#">
                  <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-slate-900 dark:text-slate">
                   
                    Choose a Google Expert
                  </h5>
                </a>
                <p class="mb-3 font-normal text-center  text-gray-700 dark:text-gray-400">
                  
                  Book anonymous 1-on-1 calls to hear the unfiltered truth to
                  your specific job questions
                </p>
              </div>
            </div>
          </div>

          <div className="basis-1/4 m-[35px]">
            <div class="max-w-sm ">
              <Image
                src="/feature 3.png"
                className="rounded-t-lg w-full h-48"
                width={300}
                height={178}
                loading="lazy"
                alt="logo"
              />
              <div class="p-2">
                <a href="#">
                  <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-slate-900 dark:text-slate">
                   
                    Excellent User Value
                  </h5>
                </a>
                <p class="mb-3 font-normal text-center  text-gray-700 dark:text-gray-400">
            
                  Spend $50-$100 on a call to help land your dream job and
                  desired salary
                </p>
              </div>
            </div>
          </div>

          <div className="basis-1/4 m-[35px]">
            <div class="max-w-sm  ">
              <Image
                src="/feature 4.png"
                className="rounded-t-lg w-full h-48"
                width={300}
                height={178}
                alt="logo"
              />
              <div class="p-2">
                <a href="#">
                  <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-slate-900 dark:text-slate">
                  
                    Anonymous Interactions
                  </h5>
                </a>
                <p class="mb-3 font-normal text-center  text-gray-700 dark:text-gray-400">
                
                  Everyone remains anonymous to incentivize more candid
                  conversations
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto ">
        {/* Feature section One */}
        <div class="max-w-[1320] md:py-[80]  mt-5 py-5 flex mx-auto sm:flex-row flex-col">
          <div className="basis-[45%] pb-5">
            <Image
              src="/Feature_image.png"
              width={500}
              height={100}
              className="w-full"
            />
          </div>
          <div className="basis-[55%] m-auto px-10">
            <h1 className="text-5xl px-5 font-semibold leading-[57px] font-[Nunito]">
              Interested in a Career <br></br> at Google?
            </h1>
            <p className=" text-3xl py-3 px-5 font-bold leading-8 text-[#494949] font-[Nunito]">
              Use SeeThru to access the largest call network of Google
              professionals. Get accurate answers to real questions you care
              about before changing your career
            </p>
            <ul className="list-disc align-middle px-10">
              <li className="text-lg leading-9 font-[Nunito] text-[#494949] ">
                Choose your Google Expert by job title, firm, location, etc.
              </li>
              <li className="text-lg leading-9 font-[Nunito] text-[#494949]">
                Schedule when it works for you — as early as today
              </li>
              <li className="text-lg leading-9 font-[Nunito] text-[#494949]">
                Call, pay and leave a review all through one platform
              </li>
            </ul>
          </div>
        </div>
        {/* Feature Section one End */}
      </div>
      {/* Container End */}
      {/* NewsLetter Section Start */}
      <div className="relative isolate px-6  newsletter_bg">
        <div
          className="absolute inset-x-0 -top-40 -z-10  sm:-top-80"
          aria-hidden="true"
        ></div>
        <div className="mx-auto  py-28 ">
          <div className="text-center">
            <h1 className="text-5xl font-semibold  leading-[70px] text-white  ">
              Get notified when job experts from Microsoft, Amazon, <br /> Meta,
              J.P. Morgan and others join SeeThru
            </h1>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <label class="relative block">
                <input
                  className=" w-72 h-12  placeholder:text-base-500 block  bg-white  border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500  focus:ring-1 sm:text-sm"
                  placeholder="Enter your mail"
                  type="text"
                  name="search"
                />
              </label>
              <a
                href="#"
                className=" w-48 h-12 rounded-md bg-green-900 px-3.5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-900"
              >
                Join the Waitlist
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Newsletter Section Ends */}
      {/* Container Start */}
      <div className="container mx-auto ">
        {/* Feature section One */}
        <div class="max-w-[1320] md:py-[80]  mt-5 py-5 flex mx-auto sm:flex-row flex-col">
          <div className="basis-[55%] m-auto px-10">
            <h1 className="text-4xl px-5 font-semibold leading-[40px] font-[Nunito] my-3">
              Access the latest career information not found on online forums
            </h1>
            <p className=" text-3xl py-3 px-5 font-semibold leading-8 text-[#494949] font-[Nunito] my-3">
              Get an edge in the interview process, learn the ins-and-outs of
              Google compensation, culture, interview tips, promotion
              expectations, and other workplace topics. Things you care about.
            </p>
            <button className="bg-[#0E713C]  text-white text-[17px] font-semibold  py-3 px-4 rounded my-3 mx-5">
              Find a Google Expert
            </button>
          </div>
          <div className="basis-[45%] pb-5">
            <Image
              src="/Feature_image_2.png"
              width={500}
              height={100}
              className="w-full"
            />
          </div>
        </div>
        {/* Feature Section one End */}
      </div>
      {/* Container End */}
    </div>
  );
}
