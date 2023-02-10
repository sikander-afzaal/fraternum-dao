import ChamberProposal from "../../components/ChamberProposal";

const Chamber = () => {
  return (
    <div className="flex max-w-[1300px] justify-start items-center flex-col w-full px-5 ">
      <div className="grid mt-8 grid-cols-1 lg:grid-cols-[1fr__350px] xl:grid-cols-[1fr__430px] items-start w-full gap-10">
        <div className="w-full relative flex justify-start items-center md:items-start flex-col gap-3 ">
          <h2 className="text-white font-alumni font-normal text-[40px] leading-[1] ">
            Latest Proposals
          </h2>
          <div className=" flex flex-col justify-start items-start w-full gap-5 pr-4 greenScroll max-h-[660px] overflow-y-auto">
            <ChamberProposal />
            <ChamberProposal />
          </div>
        </div>
        <div className="flex justify-start gap-4 items-start flex-col w-full">
          <div className="flex bg-black justify-start items-start flex-col border-dashed border border-[#312F62] w-full gap-2 rounded-[10px] p-5">
            <h3 className="text-[45px] xl:text-[55px] font-alumni  leading-[1] font-normal text-white ">
              CREATE PROPOSAL
            </h3>
            <h3 className="text-[30px] xl:text-[40px] leading-[1]  font-alumni font-normal opacity-90 text-white ">
              30 DAY LOCK PERIOD 11%APR
            </h3>
            <button className="border border-white my-5 border-solid rounded-[10px] w-[190px] font-abel h-[52px] text-min text-3xl text-[#FFFFFFB2] font-normal uppercase ">
              LOCK NFT
            </button>
            <div className="flex justify-center items-center gap-5 w-full">
              <button className="border text-mint border-white border-solid rounded-[10px] w-full h-[42px] text-min text-base xl:text-xl font-normal uppercase">
                LOCK TOKENS
              </button>
              <button className="bg-[#209B60] border-none rounded-[10px] w-full h-[42px] text-min text-base xl:text-xl font-normal uppercase text-mint">
                OPEN PROPOSAL
              </button>
            </div>
          </div>
          <p className="text-white font-alumni text-2xl xl:text-[32px] font-normal leading-[1.2]">
            USE YOUR FHFC AVATAR TO CREATE PROPOSALS FOR THE FHFC DAO TREASURY,
            USE $FRAT TO VOTE ON PROPOSALS
          </p>
        </div>
      </div>
      <div className="flex mt-12 xl:flex-row flex-col justify-between items-center sm:items-start gap-5 xl:gap-0 xl:items-center xl:w-full sm:w-auto w-full border border-dashed border-[#312F62] rounded-[10px] p-5">
        <div className="flex justify-start items-center sm:items-start flex-col ">
          <p className="text-[26px] font-alumni leading-[1] text-white">
            PROPOSAL VESTING PERIOD
          </p>
          <p className="text-[46px] opacity-90 leading-[1] font-alumni text-white">
            30 DAYS
          </p>
          <p className="text-[30px] font-alumni leading-[1] text-mint">
            DAILY INTEREST UNLOCKS
          </p>
        </div>
        <div className="flex justify-center items-start flex-col sm:w-auto w-full gap-3">
          <p className="text-mint font-normal text-sm">TOTAL STAKED: (USD)</p>
          <div className="flex justify-center border border-solid border-[#ffdddd] rounded-[18px] min-w-[240px] sm:w-auto w-full h-[69px] items-center gap-3">
            <p className="text-white opacity-70 text-[35px] font-abel leading-[1] font-normal relative">
              $ 4,560,000
              <p className="absolute bottom-full right-0 text-[#50E3C2] text-[11px] font-abel">
                +39.69%
              </p>
            </p>
          </div>
        </div>
        <div className="flex justify-center items-start flex-col sm:w-auto w-full  gap-3">
          <p className="text-mint font-normal text-sm">TOTAL PROPOSALS:</p>
          <div className="flex justify-center border border-solid border-[#ffdddd] rounded-[18px] min-w-[240px] sm:w-auto w-full h-[69px] items-center gap-3">
            <p className="text-white opacity-70 text-[35px] font-abel leading-[1] font-normal relative">
              420
            </p>
          </div>
        </div>
        <div className="flex justify-start  items-center gap-10">
          <div className="flex justify-center flex-col items-center gap-1">
            <img src="/nft.png" className="object-contain w-[70px]" alt="" />
            <p className="font-abel text-xl text-white opacity-70 leading-[1]">
              FRAT
            </p>
            <p className="font-abel text-[30px] text-white opacity-70 leading-[1]">
              $0.15{" "}
            </p>
          </div>
          <div className="flex justify-center flex-col items-center gap-1">
            <img src="/nft.png" className="object-contain w-[70px]" alt="" />
            <p className="font-abel text-xl text-white opacity-70 leading-[1]">
              xFRAT
            </p>
            <p className="font-abel text-[30px] text-white opacity-70 leading-[1]">
              $1,600
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chamber;
