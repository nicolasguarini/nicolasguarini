export default function AcademicCareer() {
  return (
    <div className="py-12 bg-hero">
        <div className="flex flex-col md:flex-row gap-4 gap-y-12">
          <div className="flex flex-col gap-3 basis-1/2">
            <p className="font-medium">Education</p>
            <h2 className="font-bold text-3xl">My Academic Career</h2>
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
                  Master's Degree in Computer Science
                </h3>
                <time className="block mb-5 text-sm font-normal leading-none text-gray-400">
                  University of Milano-Bicocca, Italy. 2023 - Current
                </time>
                <p className="text-base font-normal text-gray-300">
                  Expected graduation in 2025; <br />
                  <b>Erasmus+</b> Exchange at Stockholm University, Sweden; <br />
                  <b>Main Courses</b>: Theory of computation, Virtual and Augmented Reality, Scientific Computing Methods, Telecommunications Systems and Services, Data Architectures.
                </p>
              </li>

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
                  Erasmus+ Exchange Program
                </h3>
                <time className="block mb-5 text-sm font-normal leading-none text-gray-400">
                  Stockholm University, Sweden. 2024 - 2025
                </time>
                <p className="text-base font-normal text-gray-300">
                  <b>Erasmus+</b> Master's Degree Exchange at Stockholm University, Sweden; <br />
                  <b>Duration</b>: One semester; <br />
                  <b>Main Courses</b>: Digital Forensics, Knowledge Management in Computer and Systems Sciences, Quantum Programming, Research Topics in Data Science.
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
                  Bachelor's Degree in Computer Science
                </h3>
                <time className="block mb-5 text-sm font-normal leading-none text-gray-400">
                  University of Insubria, Italy. 2020 - 2023
                </time>
                <p className="text-base font-normal text-gray-300">
                  <b>Final Degree Mark</b>: 107/110 (GPA 3.9/4.0);<br />
                  <b>Experimental Thesis</b>: "Blockchain and decentralized file storage for reliable tracking of autovehicles lifecycle."; <br />
                  <b>Recognitions</b>: Scolaship for merit in Academic Year 2021-22 and 2022-23; <br />
                  <b>Main Courses</b>: Big Data, Algorithms and Data Structures, Computer Architecture, Operating Systems, Statistics, Programming for Mobile Devices, Software Design,
                  Concurrent and Distributed Programming. <br />
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
  )
}