import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <>
      {/** TODO: header */}
      <header className=" bg-white md:border-l border-b  border-blue-300 p-3 ">
      <Link to='/dates'><span className="text-xl font-bold">Citas</span></Link>
        
      </header>
    </>
  );
};

export default Header;
