import { menuItems } from "../../utils/menuItems"


const HeaderComponent = () => {

  return (
    <nav>
      <ul className='w-full my-3 flex justify-between'>
        <li>
          <img src="" alt="Logo ISP" />
        </li>
        <li className="flex flex-row">
        {menuItems.map((item) => (
          <p className="border-r-2 mr-4 pr-4 border-r-gray-200 border-spacing-4 text-sm font-medium text-gray-600">
            {item}
          </p>
        ))}
          <button className='bg-orange-500 shadow-xl text-white text-sm capitalize w-36 mx-4 rounded-md'>
            FAZER DOAÇÃO
          </button>
        </li>
        <li/>
      </ul>
    </nav>
  )
}

export default HeaderComponent