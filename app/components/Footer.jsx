import Link from "next/link"
import NavLink from "./NavLink"

export default function Footer(){
    return (
        <footer className="bg-white/50 p-2 border border-t-2 z-10">
            <div className="mx-auto max-w-4xl text-center text-sm text-gray-500">

                {/* &copy;{new Date().getFullYear()} <Link target="_blank" href='https://www.x.com/siddbadal'>@sidd</Link> */}
            
              <ul className="flex justify-center gap-x-5 text-gray-700 text-md">
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
           

            </div>
        </footer>
    )
}