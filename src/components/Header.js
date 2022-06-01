import { Link } from "react-router-dom";
import {MdOutlineFavorite} from 'react-icons/md'
import { useStore,useSelector} from "react-redux";

const Header = () => {
    const favoritesCount = useSelector(state=>state.movies.length);

    return (
        <header className="z-10">
          
            <div className="flex text-center bg-black text-white py-4 justify-between px-10 py-3 content-center">
                  <Link to="/">
                <h1 className="font-bold text-2xl font-montserrat">FILM</h1>
            </Link>
            <Link to="/favorites">
                <div className="relative">
                <div className="absolute top-[20px] left-[9px] text-[10px]">{favoritesCount}</div>
                <MdOutlineFavorite className="text-red-500 text-2xl pt-1"/>
                </div>
            </Link>

            </div>
        </header>
    )
}

export default Header;