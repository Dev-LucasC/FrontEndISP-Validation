

const HeaderComponent = () => {
  let menuItems = [
    <img src="" alt="Logo" />,
    'HOME',
    'QUEM SOMOS',
    'PROJETOS',
    'GALERIA',
    'CONTATO',
    <button className='bg-orange-500 text-white mr-8 p-1 rounded-md'>
      FAZER DOAÇÃO
    </button>
  ]

  return (
    <nav>
      <ul className='w-full my-3 flex justify-between'>
        {menuItems.map((item) => (
          <li className="font-medium border-r-2 border-gray-200 border-spacing-x-2">{item}</li>
        ))}
      </ul>
    </nav>
  )
}

export default HeaderComponent