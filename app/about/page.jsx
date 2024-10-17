import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import Link from 'next/link'

async function getContent(){
    const response = await fetch("http://localhost:1337/api/about-mes")
    const home = await response.json()
    return home.data
}

async function getContactLinks(){
    const response = await fetch("http://localhost:1337/api/contact-links")
    const contact = await response.json()
    return contact.data
}

export default async function Page(){
    const content = await getContent()
    const contactLinks = await getContactLinks()

    return (
        <div>
            <div className="prose max-w-none">
                
                
            {content.map(d => {
                return (
                    <div className='text-center m-auto max-w-2xl'>
                        
                        <h1 className='text-2xl font-bold underline mb-2'>{d.name}</h1>                                                        
                        <p className='prose max-w-none'>                           
                            {d.aboutme}
                        </p>
                </div>
                )
            }
                
            )}
        </div>
        <div>
            <div className=' flex flex-row justify-center'>
            {contactLinks.map(contact => {
                return (
                    
                        <Link href={contact.link}
                            className='m-5 text-center  text-gray-500 hover:text-gray-700 hover:underline'
                        >{contact.name}</Link>    
                    
                )
            })}
            </div>
        </div>
        </div>
    )
}