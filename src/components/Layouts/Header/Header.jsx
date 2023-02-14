import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Searchbar from './Searchbar';
import logo from '../../../assets/images/logo.png';
import PrimaryDropDownMenu from './PrimaryDropDownMenu';
import SecondaryDropDownMenu from './SecondaryDropDownMenu';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Model from '../../Home/Banner/Model';
import MinCategory from '../MinCategory';

const Header = () => {

  const { isAuthenticated, user } = useSelector((state) => state.user);

  const { cartItems } = useSelector(state => state.cart);

  const [togglePrimaryDropDown, setTogglePrimaryDropDown] = useState(false);
  const [toggleSecondaryDropDown, setToggleSecondaryDropDown] = useState(false);

  return (

    <header className="bg-[#C3404E]    top-0  w-full z-10 ">

      {/* <!-- navbar container --> */}
      <div className="w-full  py-0 lg:py-1  sm:px-4 m-auto flex justify-between items-center relative gap-2">
        <div className='bg-red-800 h-full'>

        <MinCategory/>
        </div>

        {/* <!-- logo & search container --> */}
        <div className="flex items-center flex-1">
          <Link className="h-7 mr-1 sm:mr-4" to="/">
            <img draggable="false" className=" h-10 md:block    relative top-0      object-center mt-[-10px] " src={logo} alt="valentinesaga Logo" />
          </Link>
         <div className='hidden lg:flex w-full'>

          <Searchbar />
         </div>
        </div>
        {/* <!-- logo & search container --> */}

        {/* <!-- right navs --> */}
        <div className="flex items-center justify-between ml-1 sm:ml-0 gap-0.5 sm:gap-7 relative">

          {isAuthenticated === false ?
            <Link to="/login" className="px-3 text-center sm:px-9 py-0.5 md:border font-medium rounded-sm cursor-pointer"><ion-icon style={{color:"white", border:"2px-solid-white"}} name="person-outline" ></ion-icon>
            
      </Link>
            :
            (
              <span className="userDropDown flex items-center text-white font-medium gap-1 cursor-pointer" onClick={() => setTogglePrimaryDropDown(!togglePrimaryDropDown)}>{user.name && user.name.split(" ", 1)}
                
                <span>{togglePrimaryDropDown ? <ExpandLessIcon sx={{ fontSize: "16px" }} /> : <ExpandMoreIcon sx={{ fontSize: "16px" }} />}</span>
              </span>
            )
          }

          {togglePrimaryDropDown && <PrimaryDropDownMenu setTogglePrimaryDropDown={setTogglePrimaryDropDown} user={user} />}

        

          {toggleSecondaryDropDown && <SecondaryDropDownMenu />}
   <div className='hidden lg:flex w-full lg:gap-10'>

          <Link to="/cart" className="flex items-center text-white font-medium gap-2 relative">
            <span><ShoppingCartIcon /></span>
            {cartItems.length > 0 &&
              <div className="w-5 h-5 p-2 bg-red-500 text-xs rounded-full absolute -top-2 left-3 flex justify-center items-center border">
                {cartItems.length}
              </div>
            }
            
          </Link>
            </div>
        </div>
    
        <Model/>
        {/* <!-- right navs --> */}

      </div>
      {/* <div className='flex justify-around lg:hidden px-1 gap-10 '>

      <Searchbar />
      <Link to="/cart" className="flex items-center text-white font-medium gap-2 relative">
            <span><ShoppingCartIcon /></span>
            {cartItems.length > 0 &&
              <div className="w-5 h-5 p-2 bg-red-500 text-xs rounded-full absolute -top-2 left-3 flex justify-center items-center border">
                {cartItems.length}
              </div>
            }
            
          </Link>
      </div> */}
      {/* <!-- navbar container --> */}
    </header>
  )
};

export default Header;
