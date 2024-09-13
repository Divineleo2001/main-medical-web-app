// import { Navbar } from "@/modules/navigation/Navbar"


export default function Layout({ children }: {children: React.ReactNode}) {
  const isAdmin = true // This should be determined based on your authentication logic

  return (
    <>

      {/* <Navbar> */}
      {children}
 
      {/* </Navbar> */}
    </>
  )
}