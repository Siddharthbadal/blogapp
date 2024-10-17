"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"


export default function NavLink(props){
    const pathName = usePathname()
    const active = pathName === props.path

    return (
        <Link className={active ? 'opacity-100 font-semibold' : 'opacity-50 hover:opacity-100  font-medium'} href={props.path}>
            {props.anchorText}
        </Link>
    )
}