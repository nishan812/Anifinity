import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

function NavBar() {
  return (
    <header className="h-24 bg-[#1b1b1b] text-[#F2EFE9] flex justify-end">
      <div className="h-full w-[70%] max-w-[1200px]  flex justify-between items-center ">
        <div
          id="searchBar"
          className=" text-[#F7F5FB] w-[50%] h-9  bg-[#00171F] flex items-center border-[#878787] border rounded-xl"
        >
          <input
            type="text"
            placeholder="Search"
            className="w-[90%] h-full outline-none rounded-l-xl text-center bg-transparent"
          />
          <div className="w-[10%] h-full rounded-r-xl flex items-center justify-center hover:bg-[#3b3a3a] ">
            <FaSearch className="w-6 h-full  cursor-pointer text-[#878787]   " />
          </div>
        </div>
        <div
          id="userSection"
          className="mr-5 p-3 rounded-2xl cursor-pointer hover:bg-[#3b3a3a]"
        >
          <FaUser className="h-8 w-10 " />
        </div>
      </div>
    </header>
  );
}

export default NavBar;