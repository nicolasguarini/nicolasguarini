import Layout from "../components/Layout"
import TypeWriter, { TypewriterClass } from 'typewriter-effect'
import ScrollDownIcon from "../components/icons/ScrollDownIcon"
import Whoami from "../components/Whoami"
import PersonalProjects from "../components/PersonalProjects"
import ClientProjects from "../components/ClientProjects"

export default function Home() {
  return (
    <Layout>
      <div className="h-screen text-center">
        <div className="text-center text-3xl font-thin text-gray absolute top-[40%] p-6 md:px-40 lg:px-80">
          <TypeWriter 
            onInit={(typewriter: TypewriterClass) => {
              typewriter.typeString("I make webapps, mobile applications, UI/UX design, data analysis and more;").start()
            }}
          />
        </div>

        <ScrollDownIcon />  
      </div>

      <Whoami />

      <PersonalProjects />
      <ClientProjects />
    </Layout>
  )
}
