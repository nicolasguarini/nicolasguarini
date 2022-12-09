import Layout from "../components/layout/Layout"
import TypeWriter, { TypewriterClass } from 'typewriter-effect'
import ScrollDownIcon from "../components/icons/ScrollDownIcon"
import Whoami from "../components/Whoami"
import PersonalProjects from "../components/PersonalProjects"
import ClientProjects from "../components/ClientProjects"
import ProjectType from "../interfaces/project"
import { getAllProjects } from "../lib/api"
import Project from "../components/Project"

type Props = {
  allProjects: ProjectType[]
}

export default function Home({ allProjects }: Props) {
  const personalProjects: ProjectType[] = allProjects.filter((project) => project.type == 'personal')
  const clientProjects: ProjectType[] = allProjects.filter((project) => project.type == 'client')
  let delayPersonalProjects: number = 0
  let delayClientProjects: number = 0

  return (
    <Layout>
      <div className="h-screen text-center">
        <div className="text-center text-3xl font-thin text-gray absolute top-[40%] p-6 md:px-40 lg:px-80">
          <TypeWriter 
            onInit={(typewriter: TypewriterClass) => {
              typewriter.typeString("I make webapps, mobile apps, UI/UX design, data analysis and more;").start()
            }}
          />
        </div>

        <ScrollDownIcon />  
      </div>

      <Whoami />

      <PersonalProjects>
        {personalProjects.map((project) => {
          delayPersonalProjects += 0.08
          return(
            <div className="wow fadeInUp" data-wow-delay={delayPersonalProjects + 's'} key={project.title}>
              <Project 
                title={project.title}
                slug={project.slug}
                excerpt={project.excerpt}
              />
            </div>
          )
        })}
      </PersonalProjects>

      <ClientProjects>
        {clientProjects.map((project) => {
          delayClientProjects += 0.08
          return(
            <div className="wow fadeInUp" data-wow-delay={delayClientProjects + 's'} key={project.title}>
              <Project 
                title={project.title}
                slug={project.slug}
                excerpt={project.excerpt}
              />
            </div>
          )
        })}
      </ClientProjects>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const allProjects = getAllProjects([
    'slug',
    'title',
    'excerpt',
    'type',
    'started', 
    'finished'
  ])

  return {
    props: { allProjects }
  }
}