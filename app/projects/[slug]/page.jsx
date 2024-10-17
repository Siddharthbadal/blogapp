import Link from 'next/link'
import qs from 'qs'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import Spoiler from '../../components/Spoiler'
import Testimonial from '../../components/Testimonial'

async function fetchProjectDetails(slug){
    const ourQuery = qs.stringify({
        filters: {
            slug: slug,            
        },
        populate: {
                 photo: "*",
                 bodycontent: {
                    on: {
                        "features.rich-text": {
                            populate: "*"
                        },
                        "features.spoiler":{
                            populate: "*"
                        },
                        "features.testimonia":{
                            populate: "*"
                        }
                    }
                 }
        }
    })
    const projectPromise = await fetch(`http://localhost:1337/api/projects?${ourQuery}`)
    const project = await projectPromise.json()        
    return project.data[0]
}

function ContentRenderer(item, index){       
        if(item.__component === 'features.rich-text'){
            return <BlocksRenderer key={index} content={item.content} />
        }
        if(item.__component === 'features.testimonia'){
            return <Testimonial key={index} data={item} />
        }
        if(item.__component === 'features.spoiler'){
            return <Spoiler key={index} data={item} />
        }
}

export async function generateStaticParams(){
    const projectsPromise = await fetch("http://localhost:1337/api/projects")
    const projects = await projectsPromise.json()        
    return projects.data.map(project => {
        return {
            slug: project.slug
    }
    })
}

export default async function Page({params}){
    const project = await fetchProjectDetails(params.slug)
    

    return (
        <div>
                <div class="text-white relative bg-gray-700 px-14 py-16 -mx-8 -mt-7">
                <h2 className="text-6xl font-bold relative z-30">{project.title}</h2>
            <img
                className="object-cover absolute top-0 bottom-0 left-1/2 right-0 block w-1/2 h-full opacity-50 filter grayscale"
                src={`http://localhost:1337${project.photo.formats.thumbnail.url}`}
                />
             <div className="absolute z-20 w-80 bg-gradient-to-r from-gray-700 to-transparent h-full top-0 bottom-0 left-1/2"></div>
            </div>

            <div className="transform -translate-y-1/2">
                <Link href="/projects" className="text-sm bg-gray-600 text-gray-400 hover:bg-gray-500 hover:text-gray-300 inline-block rounded-lg py-3 px-5">
                &laquo; Back to all projects
                </Link>
            </div>

                <div className='prose max-w-none'>
                    {project.bodycontent.map((item, index)=>
                        ContentRenderer(item, index)
                    )}
                </div>
                
        </div>
    )
}