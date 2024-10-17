export default function BgAnimation(){
    return (
        <div className="absolute z-0 inset-0 overflow-hidden">
            <div className="animated-circle--one blur-3xl w-64 h-64 rounded-full bg-yellow-200/40 top-0 right-28 absolute"></div>
            <div className="animated-circle--two blur-3xl w-64 h-64 rounded-full bg-sky-200/40 bottom-0 left-28 absolute"></div>
        </div>
    )
}