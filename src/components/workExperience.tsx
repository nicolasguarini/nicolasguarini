export default function WorkExperience() {
  return (
    <div className="py-12 bg-section">
        <div className="flex flex-col md:flex-row gap-4 gap-y-12">
          <div className="flex flex-col gap-3 basis-1/2">
            <p className="font-medium">Experience</p>
            <h2 className="font-bold text-3xl">My Work Experience</h2>
          </div>
          <div className="flex flex-col gap-10 basis-1/2">
            <ol className="relative border-s border-gray-700">

              <li className="mb-12 ms-6">
                <span className="absolute flex items-center justify-center w-6 h-6  rounded-full -start-3 ring-8  ring-gray-900 bg-blue-900">
                  <svg
                    className="w-2.5 h-2.5 text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </span>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  Didactic Tutor / Private Teacher
                </h3>
                <time className="block mb-5 text-sm font-normal leading-none text-gray-400">
                  University of Insubria / Freelance, Italy. 2022 - Current
                </time>
                <p className="text-base font-normal text-gray-300">
                  University tutor in 2023 for the Programming, Computer Architecture, and Data Science courses. <br />
                  I conducted lectures for 35+ students, many of whom I continued to tutor privately, yielding excellent results.
                </p>
              </li>

              <li className="ms-6">
                <span className="absolute flex items-center justify-center w-6 h-6  rounded-full -start-3 ring-8  ring-gray-900 bg-blue-900">
                  <svg
                    className="w-2.5 h-2.5 text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </span>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  Web Developer and Designer
                </h3>
                <time className="block mb-5 text-sm font-normal leading-none text-gray-400">
                  Freelance, Italy. 2019 - Current
                </time>
                <p className="text-base font-normal text-gray-300">
                  Creation and redesign of web solutions for small companies and freelances, from design and content planning to development using modern approaches, and occasionally handling conception / creation of advertisemnt campaigns. <br />
                  I've developed 15+ projects that have helped my clients increase their revenue and have a better online presence, generating thousands of visits and dozens of contacts every month.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
  )
}