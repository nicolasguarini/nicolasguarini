
const Footer = () => {
  return (
    <footer className="container md:max-w-[80%] font-extralight m-auto inset-x-0 bottom-0 w-full p-3 mt-20">
      <div className="font-extralight text-gray text-center md:text-right mb-10">
        Got an Interesting project? I can help you!
      </div>

      <div className="w-full border-t border-lightgray"></div>
      
      <div className="p-12 pb-12 md:pb-3 px-0 grid gird-cols-1 lg:grid-cols-5">
        <div className="pb-10 text-center md:text-left lg:col-span-2 wow fadeInUp" data-wow-delay='0.08s'>
          <div className="text-lightgray mb-1">connect with me</div>
          <div><a href="https://www.linkedin.com/in/nicolasguarini/" target={"_blank"}>in @nicolasguarini</a></div>
        </div>

        <div className="pb-12 text-center md:text-right wow fadeInUp" data-wow-delay='0.16s'>
          <div className="text-lightgray mb-1">links</div>
          <div><a href="/privacy-policy" target={"_blank"}>privacy policy</a></div>
          {/* <div>
            <ul>
              <li className="inline"><span className="text-[#0A66C2]">•</span> in</li>
              <li className="inline pl-5"><span className="text-[#EB0091]">•</span> ig</li>
              <li className="inline pl-5"><span className="text-[#1D9BF0]">•</span> tw</li>
            </ul>
          </div> */}
        </div>

        <div className="pb-0 text-center md:text-right lg:col-span-2 wow fadeInUp" data-wow-delay='0.24s'>
          <div className="text-lightgray mb-1">say hello</div>
          <div><a href="mailto:nicolasguarini.py@gmail.com" target={"_blank"}>nicolasguarini.py@gmail.com</a></div>
        </div>
      </div>

      <div className="text-center text-lightgray font-extralight mt-8 mb-4 lg:mt-2 text-sm">developed by nicolas guarini</div>
    </footer>
  )
}

export default Footer