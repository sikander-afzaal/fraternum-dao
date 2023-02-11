import CryptBox from "../../components/CryptBox";

const Ino = () => {
  return (
    <div className="flex max-w-[1300px] justify-start items-center flex-col w-full px-5 ">
      <h2 className="font-pirate uppercase text-[40px] font-normal mt-5 md:self-start text-white">
        CRYPT <span className="font-alumni">(30 day lock)</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-20 mt-14 w-full grid-rows-none auto-rows-fr xl:grid-rows-2">
        <CryptBox />
        <CryptBox />
        <CryptBox />
        <CryptBox />
        <CryptBox />
        <CryptBox />
      </div>
      {/* pagination --------------------- */}
      <div className="flex justify-center gap-4 mt-8 items-center w-full">
        <p className="text-white font-abel text-xl font-normal cursor-pointer select-none">
          {"<"}
        </p>
        <p className="text-white font-abel text-xl font-normal cursor-pointer select-none">
          1
        </p>
        <p className="text-white font-abel text-xl font-normal cursor-pointer select-none">
          2
        </p>
        <p className="text-white font-abel text-xl font-normal cursor-pointer select-none">
          3
        </p>
        <p className="text-white font-abel text-xl font-normal cursor-pointer select-none">
          4
        </p>
        <p className="text-white font-abel text-xl font-normal cursor-pointer select-none">
          5
        </p>
        <p className="text-white font-abel text-xl font-normal cursor-pointer select-none">
          6
        </p>
        <p className="text-white font-abel text-xl font-normal cursor-pointer select-none">
          {">"}
        </p>
      </div>
      <p className="text-center max-w-[570px] font-alumni text-white text-xl leading-[1.2] mt-4">
        Eearn xFRAT for staking NFTs in the CRYPT, stake xFRAT to earn Frat, 2%
        withdrawal fee on all staked assets burnt forever.
      </p>
    </div>
  );
};

export default Ino;
