import { generateRandomNumber } from "../utils/helpers";

const Home = () => {
  const randomNumber = generateRandomNumber(10, 99);

  return (
    <>
      <div className="relative overflow-hidden w-full mb-10">
        <section className="relative overflow-hidden bg-white">
          <div className="max-w-lg">
            <h1 className="text-6xl font-semibold text-red-800 mb-10 leading-[80px]">
              Summer styles are finally here
            </h1>
            <p>
              You can easily customize this template to create a homepage for a
              travel app. The design is simple and clean, with a header that
              shows a large image background and a unique trip search bar. It
              also includes sections for popular destinations, staff,
              testimonials, highlights, FAQs, and more.
            </p>

            <p>
              An eye catching design, perfect for companies in the IT sector,
              gadget companies or AI. It features a video background in the
              header guaranteed to draw attention, a special typeface as an
              accent as well as all of the sections you would need to present
              your product to the world.
            </p>
            <p>
              John is a seasoned software engineer with over 10 years of
              experience in web development. Throughout his career, he has
              mastered a wide range of technologies and frameworks, enabling him
              to build robust and scalable applications. His expertise spans
              both front-end and back-end development, and he has a particular
              passion for creating seamless user experiences and efficient,
              maintainable code.
            </p>
            <p>
              Beyond his professional work, John is an avid contributor to
              open-source projects. He believes in the power of collaboration
              and community in advancing technology and solving complex
              problems.
            </p>
          </div>
          <div className="mt-10">
            <div
              aria-hidden="true"
              className="pointer-events-none inset-y-0 mx-auto w-full max-w-7xl"
            >
              <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 translate-x-8">
                <div className="flex items-center justify-center overflow-hidden space-x-1 z-50">
                  <div className="grid flex-shrink-0 grid-cols-1 space-y-1">
                    <div className="h-64 w-48 overflow-hidden rounded-xl ">
                      <img
                        src={`https://mdbcdn.b-cdn.net/img/new/slides/100.webp`}
                        className="h-full w-full object-cover object-center "
                      />
                    </div>
                    <div className="h-64 w-48 overflow-hidden rounded-xl ">
                      <img
                        src={`https://mdbcdn.b-cdn.net/img/new/slides/101.webp`}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>

                  <div className="grid flex-shrink-0 grid-cols-1 space-y-1">
                    <div className="h-64 w-48 overflow-hidden rounded-xl ">
                      <img
                        src={`https://mdbcdn.b-cdn.net/img/new/slides/104.webp`}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="h-64 w-48 overflow-hidden rounded-xl ">
                      <img
                        src={`https://mdbcdn.b-cdn.net/img/new/slides/209.webp`}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="h-64 w-48 overflow-hidden rounded-xl cursor-pointer">
                      <img
                        src={`https://mdbcdn.b-cdn.net/img/new/slides/090.webp`}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>

                  <div className="grid flex-shrink-0 grid-cols-1 space-y-1">
                    <div className="h-64 w-48 overflow-hidden rounded-xl ">
                      <img
                        src={`https://mdbcdn.b-cdn.net/img/new/slides/076.webp`}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="h-64 w-48 overflow-hidden rounded-xl ">
                      <img
                        src={`https://mdbcdn.b-cdn.net/img/new/slides/208.webp`}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="mt-24 bg-neutral-800 bg-blend-hard-light rounded-2xl"
          style={{
            backgroundImage: `url('https://mdbcdn.b-cdn.net/img/new/slides/0${randomNumber}.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          <div className="flex flex-col px-4 text-center py-24 min-h-[600px] justify-center ">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
              We invest in the world’s potential
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
              Here at Flowbite we focus on markets where technology, innovation,
              and capital can unlock long-term value and drive economic growth.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
              <button className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-900 dark:focus:ring-red-900">
                Get started
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
              <button className="inline-flex justify-center hover:text-neutral-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-neutral-100 focus:ring-4 focus:ring-neutral-400">
                Learn more
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
