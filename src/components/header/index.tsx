import { menuItems } from "../../utils/menuItems"
import { ReactNode } from "react"
import { useNavigate, useLocation } from 'react-router-dom'
import ISPLogo from '../../assets/logo/logo-isp.svg'

type HeaderProps = {
  children: ReactNode
}


const HeaderComponent = ({children}: HeaderProps) => {
  const navigate = useNavigate()
  const location = useLocation()

  const navigateTo = (item: string) => {
    let route = item.replace(/[^\w\s]/gi, '').replace(/\s+/g, '')
    navigate(`/${route.toLowerCase()}`)
  }

  return (
    <>
    <nav className={`p-3 h-full ${location.pathname === '/' 
        ? 'hidden' 
         : 'flex'}`
        }>
      <ul className='w-full h-6 flex justify-between'>
        <li className="ml-8">
          <img className="h-full" src={ISPLogo} width={60} alt="Logo ISP" />
        </li>
        <li className="flex flex-row items-center">
        {menuItems.map((item) => (
          <p className="border-r-2 mr-4 pr-4 border-r-gray-200 text-sm font-medium text-gray-600 cursor-pointer"
          onClick={() => navigateTo(item)}
          >
            {item}
          </p>
        ))}
          <button className='bg-orange-500 h-full shadow-xl  text-white text-xs capitalize w-36 mx-4 rounded-md'>
            FAZER DOAÇÃO
          </button>
        </li>
        <li/>
      </ul>
    </nav>
    {children}
    </>
  )
}

export default HeaderComponent