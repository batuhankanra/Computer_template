import UserMenu from "./auth"



const NavBar = () => {

  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6 shadow-sm">
      <div className="text-lg font-semibold">Admin</div>
      <UserMenu />
    </header>

  )
}

export default NavBar
