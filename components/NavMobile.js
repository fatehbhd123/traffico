import Link from 'next/link';

const NavMobile = ({ navData }) => {
  return (
    <nav className='bg-accent w-full p-4'>
      {/* nav list */}
      <ul className='flex flex-col gap-y-6'>
        {navData.map((item, idx) => {
          // destructure item
          const { name, href } = item;
          return (
            <li key={idx}>
              <a
                onClick={(e) => {
                  document.getElementById(href).scrollIntoView({
                    behavior: 'smooth'
                  })
                }}
                className='text-white hover:text-accent'>{name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMobile;