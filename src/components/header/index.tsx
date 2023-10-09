

const HeaderComponent = () => {
  let menuItems = [
    <img src="" alt="Logo" />,
    'HOME',
    'QUEM SOMOS',
    'PROJETOS',
    'GALERIA',
    'CONTATO',
    <button className='bg-orange-600 text-white mr-8'>
      FAZER DOAÇÃO
    </button>
  ]

  return (
    <nav>
      <ul className='w-full my-3 flex justify-between border-r-1 border-r-gray-500'>
        {menuItems.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </nav>
  )
}

export default HeaderComponent