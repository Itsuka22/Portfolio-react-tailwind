import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';
import { HiOutlineMail } from 'react-icons/hi';
// import {BsFillPersonLinesFill} from 'react-icons/bs';
import {Link} from 'react-scroll';




const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0d1930] text-gray-50">
            <div className='mx-auto'>
                <img src="/src/assets/hanlogo.svg" alt="Logo image" style={{ width: '70px' }} />
            </div>

            {/* Menu */}
            {/* <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skill</li>
                <li>Work</li>
                <li>Contact</li>
            </ul> */}


            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars/> : <FaTimes/>}
            </div>

            {/* Mobile menu */}
            <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

            {/* Social Icons */}
            <div className='flex fixed flex-col top-[35%] left-0'>
            <ul>
          <li className='w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] rounded-t-2xl duration-300 bg-[#1D345F]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/ardi-handoyo/'
            >
              Linkedin <FaLinkedin size={25} />
            </a>
          </li>
          <li className='w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#212121]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/Itsuka22'
            >
              Github <FaGithub size={25} />
            </a>
          </li>
          <li className='w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] rounded-b-2xl duration-300 bg-[#1D345F]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Email <HiOutlineMail size={25} />
            </a>
          </li>
        </ul>

            </div>


        </div>

    )
}

export default Navbar