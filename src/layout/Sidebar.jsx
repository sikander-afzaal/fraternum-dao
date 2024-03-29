import { Link, NavLink } from "react-router-dom";

const Sidebar = ({ sidebar, setSidebar }) => {
  return (
    <>
      {sidebar && (
        <div onClick={() => setSidebar(false)} className="overlay z-[88]"></div>
      )}
      <div
        className={`sidebar flex px-6 justify-start items-center flex-col py-7  top-0 h-full md:h-auto md:max-h-screen overflow-y-auto  gap-10  transition-all md:max-w-none max-w-[350px] duration-1000 z-[90]  border-r-[3px] border-solid border-darkGreen w-full  bg-black md:sticky fixed ${
          sidebar ? "left-0" : "-left-[900px]"
        }`}
      >
        <svg
          onClick={() => setSidebar(false)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="cursor-pointer w-7 h-7 md:hidden block absolute top-3 right-3 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>

        <div className="flex justify-start items-center flex-col gap-4">
          <Link onClick={() => setSidebar(false)} to={"/"}>
            <img
              src="/logo.png"
              className="max-w-[150px] md:max-w-[200px] object-contain"
              alt=""
            />
          </Link>
        </div>
        <div className="flex justify-start items-center flex-col w-full gap-2">
          <NavLink
            onClick={() => setSidebar(false)}
            to={"/"}
            className={({ isActive }) =>
              `w-full flex py-2 px-3 rounded-lg  justify-start  items-center gap-7 md:gap-5 ${
                isActive ? "bg-darkGreen" : "bg-transparent"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke={isActive ? "#53EA62" : "white"}
                  className="min-w-6 min-h-6 h-7 w-7 md:h-6 md:w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>

                <button
                  className={`textbase ${
                    isActive ? "text-[#53EA62]" : "text-white"
                  }
                   uppercase  font-normal  rounded-[10px]   h-[40px] md:h-[32px]`}
                >
                  Home
                </button>
              </>
            )}
          </NavLink>
          <NavLink
            onClick={() => setSidebar(false)}
            to={"/dashboard"}
            className={({ isActive }) =>
              `w-full flex py-2 px-3 rounded-lg  justify-start  items-center gap-7 md:gap-5 ${
                isActive ? "bg-darkGreen" : "bg-transparent"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke={isActive ? "#53EA62" : "white"}
                  className="min-w-6 min-h-6 h-7 w-7 md:h-6 md:w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>{" "}
                <button
                  className={`textbase ${
                    isActive ? "text-[#53EA62]" : "text-white"
                  }
                 uppercase  font-normal  rounded-[10px]   h-[40px] md:h-[32px]`}
                >
                  DASHBOARD
                </button>
              </>
            )}
          </NavLink>
          <NavLink
            onClick={() => setSidebar(false)}
            to={"/chambers"}
            className={({ isActive }) =>
              `w-full flex py-2 px-3 rounded-lg  justify-start  items-center gap-7 md:gap-5 ${
                isActive ? "bg-darkGreen" : "bg-transparent"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke={isActive ? "#53EA62" : "white"}
                  className="min-w-6 min-h-6 h-7 w-7 md:h-6 md:w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                  />
                </svg>{" "}
                <button
                  className={`textbase ${
                    isActive ? "text-[#53EA62]" : "text-white"
                  }
                   uppercase  font-normal  rounded-[10px]   h-[40px] md:h-[32px]`}
                >
                  CHAMBERS
                </button>
              </>
            )}
          </NavLink>
          <NavLink
            onClick={() => setSidebar(false)}
            to={"/sanctum"}
            className={({ isActive }) =>
              `w-full flex py-2 px-3 rounded-lg  justify-start  items-center gap-7 md:gap-5 ${
                isActive ? "bg-darkGreen" : "bg-transparent"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke={isActive ? "#53EA62" : "white"}
                  className="min-w-6 min-h-6 h-7 w-7 md:h-6 md:w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                  />
                </svg>{" "}
                <button
                  className={`textbase ${
                    isActive ? "text-[#53EA62]" : "text-white"
                  }
                 uppercase  font-normal  rounded-[10px]  h-[40px] md:h-[32px]`}
                >
                  SANCTUM
                </button>
              </>
            )}
          </NavLink>
          <NavLink
            onClick={() => setSidebar(false)}
            to={"/treasury"}
            className={({ isActive }) =>
              `w-full flex py-2 px-3 rounded-lg  justify-start  items-center gap-7 md:gap-5 ${
                isActive ? "bg-darkGreen" : "bg-transparent"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke={isActive ? "#53EA62" : "white"}
                  className="min-w-6 min-h-6 h-7 w-7 md:h-6 md:w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                  />
                </svg>{" "}
                <button
                  className={`textbase ${
                    isActive ? "text-[#53EA62]" : "text-white"
                  }
                 uppercase  font-normal  rounded-[10px]  h-[40px] md:h-[32px]`}
                >
                  TREASURY
                </button>
              </>
            )}
          </NavLink>
          <NavLink
            onClick={() => setSidebar(false)}
            to={"/ino"}
            className={({ isActive }) =>
              `w-full flex py-2 px-3 rounded-lg  justify-start  items-center gap-7 md:gap-5 ${
                isActive ? "bg-darkGreen" : "bg-transparent"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke={isActive ? "#53EA62" : "white"}
                  className="min-w-6 min-h-6 h-7 w-7 md:h-6 md:w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25"
                  />
                </svg>{" "}
                <button
                  className={`textbase ${
                    isActive ? "text-[#53EA62]" : "text-white"
                  }
                 uppercase  font-normal  rounded-[10px]   h-[40px] md:h-[32px]`}
                >
                  INOs
                </button>
              </>
            )}
          </NavLink>
        </div>
        <div className="flex justify-start items-start flex-col w-full gap-2">
          <a href="#" className="text-green uppercase text-base font-normal">
            Github
          </a>
          <a href="#" className="text-green uppercase text-base font-normal">
            DOCS
          </a>
          <a href="#" className="text-green uppercase text-base font-normal">
            $frat <span className="text-white ml-2">$10.00</span>
          </a>
          <a href="#" className="text-green uppercase text-base font-normal">
            $FTM <span className="text-white ml-2">$10.00</span>
          </a>
        </div>
        <div className="flex   justify-start items-start md:items-center flex-col gap-4 w-full rounded-[10px] ">
          <h4 className="uppercase text-xl font-abel font-normal text-center text-white">
            Join our community
          </h4>
          <div className="grid place-items-center gap-6 grid-rows-2 grid-cols-3">
            <img
              src="/discord.png"
              className="h-[30px] object-contain"
              alt=""
            />
            <img
              src="/twitter.png"
              className="h-[37px] object-contain"
              alt=""
            />
            <img src="/yt.png" className="h-[30px] object-contain" alt="" />
            <img src="/twitch.png" className="h-[30px] object-contain" alt="" />
            <img
              src="/telegram.png"
              className="h-[30px] object-contain"
              alt=""
            />
            <img src="/medium.png" className="h-[30px] object-contain" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
