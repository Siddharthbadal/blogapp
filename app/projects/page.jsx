import Link from "next/link"

async function getAllProjects(){
    const projectsPromise = await fetch("http://localhost:1337/api/projects?populate=*")
    const projects = await projectsPromise.json()
    return projects.data
}


export default async function Projects(){
    const projects = await getAllProjects()
    return (
        <div>
            <h1 className="text-center text-3xl font-bold mb-6 text-gray-700">Blogs</h1>
                <div className="grid grid-cols-2 gap-6">
                    {projects.map(project => {
                        return (
                            
                    <Link className="grid grid-cols-[320px_1fr] bg-white shadow-sm rounded-lg relative overflow-hidden group" 
                        key={project.id} href={`/projects/${project.slug}`}>
                        <div className='relative overflow-hidden'>
                        <img className="absolute inset-0 w-3/4 object-cover"
                                src={`http://localhost:1337${project.photo.formats.thumbnail.url}`} />
                        </div>
                        <div className="p-4">
                            <p className='text-gray-500 text-xl font-bold group-hover:text-gray-700'>{project.title}</p>
                            <p className="text-sm text-gray-500 leading-6 group-hover:text-gray-700">{project.description.substring(0,150)}</p>
                        </div>
                    </Link>

                        )
                    })}
                </div>
        </div>
    )
}