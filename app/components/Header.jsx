import Link from "next/link"
import NavLink from "./NavLink"

export default function Header(){
    return (
        <header className='bg-white/50  border border-t-2 z-10'>
          <div className="max-w-4xl mx-auto flex items-center justify-between">
              <Link href='/'>
                    <h2 className='text-2xl text-gray-500 font-bold py-5'>
                        <Link href="/">SiddBlog</Link>  
                    </h2>              
              </Link>
              
            <nav>
              <ul className="flex gap-x-5 text-gray-700 text-md">
                <li>
                        <NavLink anchorText='Home' path='/' />
                </li>
                <li>
                        <NavLink anchorText='Blogs' path='/projects' />                              
                </li>
                <li>
                        <NavLink anchorText='About' path='/about' />
                </li>
              </ul>
            </nav>
          
          </div>
        </header>
    )
}