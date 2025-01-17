import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-black text-gray-300">
      <div className="text-xl font-bold">React-Demo</div>
      <div className='flex gap-10 px-8'>
        <Link to="/" className="mx-2 transform transition-transform duration-200 ease-in-out hover:scale-125 hover:text-white">Home</Link>
        <Link to="/about" className="mx-2 transform transition-transform duration-200 ease-in-out hover:scale-125 hover:text-white">About</Link>
        <Link to="/contact" className="mx-2 transform transition-transform duration-200 ease-in-out hover:scale-125 hover:text-white">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;