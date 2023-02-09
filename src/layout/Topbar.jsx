const Topbar = ({ setSidebar }) => {
  return (
    <div className="topbar px-5 w-full pt-5 flex justify-between lg:justify-center items-center">
      <svg
        onClick={() => setSidebar(true)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="white"
        className="w-8 md:hidden block h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>

      <div className="lg:w-full sm:flex hidden justify-center items-center flex-col">
        <h2 className="font-pirate leading-[1] text-3xl md:text-[45px] lg:text-[60px] xl:text-[80px] font-normal text-white">
          FRATERNUM DAO
        </h2>
        <p className="text-mint font-abel text-base md:block hidden lg:text-lg font-normal">
          Earn, Vote and Manage the future of FHFC
        </p>
      </div>
      <div className="flex justify-center lg:mr-9 cursor-pointer items-center ">
        <button className="capitalize font-bold text-white text-sm lg:text-lg rounded-[10px] bg-[#209B60] min-w-[130px] lg:min-w-[200px] h-[40px] border-none">
          connect wallet
        </button>
        <img
          src="/metamask.png"
          className="object-contain lg:block hidden -mx-8 w-[80px]"
          alt=""
        />
      </div>
    </div>
  );
};

export default Topbar;
