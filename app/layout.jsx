import NavLink from "./components/NavLink"
import Footer from "./components/Footer"
import "../assets/global.css"
import Header from "./components/Header"
import BgAnimation from "./components/BgAnimation"


export const metadata = {
  title: 'Sidd Blog',
  description: 'This is my portfolio projects. Projects on development and data analysis.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
          <link rel="icon" href="/logo.png/" sizes="any" />
      </head>
      <body>
        <div className=" bg-slate-100 min-h-[100dvh] grid grid-rows-[auto_1fr_auto]">
                
            <div>
                
                <Header />
            </div>
              
              <main className="backdrop-blur  mx-auto bg-blue-50/70 rounded-xl py-7 px-8 m-6 overflow-hidden text-gray-700 text-xl z-10">
                  {children}
              </main>
          <Footer/>
        </div>

      </body>
    </html>
  )
}
