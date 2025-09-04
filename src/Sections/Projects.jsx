import { useState } from "react"
import ProjectDetail, { projects } from "./ProjectDetail"

export default function ProjectsPage() {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <div className="grid gap-6 grid-cols-2">
      {projects.map((project, index) => (
        <div 
          key={index} 
          className="p-4 bg-slate-800 text-white rounded-lg cursor-pointer hover:bg-slate-700"
          onClick={() => setActiveProject(project)} // 👈 opens modal
        >
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}

      {activeProject && (
        <ProjectDetail
          {...activeProject}   // 👈 sends title, description, tags, href
          closeModel={() => setActiveProject(null)}
        />
      )}
    </div>
  )
}
