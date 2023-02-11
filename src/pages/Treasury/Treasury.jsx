import ActivityBox from "../../components/ActivityBox";

const Treasury = () => {
  return (
    <div className="flex max-w-[1300px] justify-start items-center flex-col w-full px-5 ">
      <h2 className="font-pirate uppercase text-[40px] font-normal mt-5 md:self-start text-white">
        TREASURY
      </h2>
      <div className="flex mt-5 xl:flex-row flex-col justify-between items-center sm:items-start gap-5 xl:gap-0 xl:items-center xl:w-full sm:w-auto w-full border border-dashed border-[#312F62] rounded-[10px] p-5">
        <div className="flex justify-center items-start flex-col sm:w-auto w-full gap-3">
          <p className="text-mint font-normal text-sm">
            TOTAL TREASURY VALUE: (USD)
          </p>
          <div className="flex justify-center border border-solid border-[#ffdddd] rounded-[18px] min-w-[240px] sm:w-auto w-full h-[69px] items-center gap-3">
            <p className="text-white opacity-70 text-[35px] font-abel leading-[1] font-normal relative">
              $ 4,560,000
              <span className="absolute bottom-full right-0 text-[#50E3C2] text-[11px] font-abel">
                +39.69%
              </span>
            </p>
          </div>
        </div>
        <div className="flex justify-center items-start flex-col sm:w-auto w-full  gap-3">
          <p className="text-mint font-normal text-sm">TOTAL NFTS:</p>
          <div className="flex justify-center border border-solid border-[#ffdddd] rounded-[18px] min-w-[240px] sm:w-auto w-full h-[69px] items-center gap-3">
            <p className="text-white opacity-70 text-[35px] font-abel leading-[1] font-normal relative">
              420
            </p>
          </div>
        </div>
        <div className="flex justify-center items-start flex-col sm:w-auto w-full  gap-3">
          <p className="text-mint font-normal  text-sm">
            Deposit NFTs for Shares
          </p>
          <div className="flex justify-center  bg-dashBox border border-solid border-white rounded-[18px] min-w-[240px] sm:w-auto w-full h-[69px] items-center gap-3">
            <p className="text-white text-lg  leading-[1] font-bold">
              DEPOSIT NFT
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
      <div className="grid grid-cols-1 xl:grid-cols-[1fr__400px] w-full mt-8 sm:mt-4 gap-10">
        <div className="flex justify-start items-start flex-col w-full gap-4">
          <div className="flex sm:flex-row flex-col justify-between items-center w-full gap-1">
            <h4 className="text-white font-alumni text-[40px] leading-[1] font-normal">
              NFT TREASURY
            </h4>
            <p className="flex justify-center items-center gap-3 leading-[1] text-white font-alumni text-[30px] ">
              Filter by:{" "}
              <span className="capitalize text-xl">Recently Added</span>{" "}
            </p>
          </div>
          <div className="flex justify-center flex-wrap items-center w-full gap-5">
            <img
              src="/dash-nft.png"
              className="object-contain  min-w-[110px]"
              alt=""
            />
            <img
              src="/dash-nft.png"
              className="object-contain  min-w-[110px]"
              alt=""
            />
            <img
              src="/dash-nft.png"
              className="object-contain  min-w-[110px]"
              alt=""
            />
            <img
              src="/dash-nft.png"
              className="object-contain  min-w-[110px]"
              alt=""
            />
            <img
              src="/dash-nft.png"
              className="object-contain  min-w-[110px]"
              alt=""
            />
            <img
              src="/dash-nft.png"
              className="object-contain  min-w-[110px]"
              alt=""
            />
            <img
              src="/dash-nft.png"
              className="object-contain  min-w-[110px]"
              alt=""
            />
            <img
              src="/dash-nft.png"
              className="object-contain  min-w-[110px]"
              alt=""
            />
            <img
              src="/dash-nft.png"
              className="object-contain  min-w-[110px]"
              alt=""
            />
            <img
              src="/dash-nft.png"
              className="object-contain  min-w-[110px]"
              alt=""
            />
            <img
              src="/dash-nft.png"
              className="object-contain  min-w-[110px]"
              alt=""
            />
            <img
              src="/dash-nft.png"
              className="object-contain  min-w-[110px]"
              alt=""
            />
            <img
              src="/dash-nft.png"
              className="object-contain  min-w-[110px]"
              alt=""
            />
            <img
              src="/dash-nft.png"
              className="object-contain  min-w-[110px]"
              alt=""
            />
            <img
              src="/dash-nft.png"
              className="object-contain  min-w-[110px]"
              alt=""
            />
            <img
              src="/dash-nft.png"
              className="object-contain  min-w-[110px]"
              alt=""
            />
            <img
              src="/dash-nft.png"
              className="object-contain  min-w-[110px]"
              alt=""
            />
            <img
              src="/dash-nft.png"
              className="object-contain  min-w-[110px]"
              alt=""
            />
            <img
              src="/dash-nft.png"
              className="object-contain  min-w-[110px]"
              alt=""
            />
            <img
              src="/dash-nft.png"
              className="object-contain  min-w-[110px]"
              alt=""
            />
          </div>
          {/* pagination --------------------- */}
          <div className="flex justify-center gap-4 mt-3 items-center w-full">
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
          <p className="w-full font-alumni mt-3 text-xl font-normal text-white text-center leading-[1.2]">
            The FRATERNUM DAO NFT Treasury is managed by $FRAT Token holders and
            FHFC Avatar holders, create a proposal to buy, sell or deposit NFTs
            in return you will recieve rewards in $FRAT{" "}
          </p>
        </div>
        <div className="flex justify-start items-center xl:items-start flex-col w-full">
          <h4 className="text-white font-alumni text-[40px] font-normal">
            ACTIVITY:
          </h4>
          <div className="greenScroll max-h-[500px] pr-3 overflow-y-auto flex justify-start items-start flex-col gap-4 w-full">
            <ActivityBox
              title="DEPOSIT: ORDER OF THE EYE #433"
              time="10 days ago"
              place="treasury"
              img="/user-img.png"
            />
            <ActivityBox
              title="DEPOSIT: ORDER OF THE EYE #433"
              time="10 days ago"
              place="treasury"
              img="/user-img.png"
            />
            <ActivityBox
              title="DEPOSIT: ORDER OF THE EYE #433"
              time="10 days ago"
              place="treasury"
              img="/user-img.png"
            />
            <ActivityBox
              title="DEPOSIT: ORDER OF THE EYE #433"
              time="10 days ago"
              place="treasury"
              img="/user-img.png"
            />
            <ActivityBox
              title="DEPOSIT: ORDER OF THE EYE #433"
              time="10 days ago"
              place="treasury"
              img="/user-img.png"
            />
            <ActivityBox
              title="DEPOSIT: ORDER OF THE EYE #433"
              time="10 days ago"
              place="treasury"
              img="/user-img.png"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-[0.6fr__0.4fr] mt-8 w-full gap-4">
            <div className="flex justify-start items-start gap-1 flex-col ">
              <p className="text-white font-alumni text-xl">
                BUY & SELL NFTs AS A COLLECTIVE
              </p>
              <button className="flex justify-center  bg-dashBox border border-solid border-white rounded-[18px] w-full h-[69px] items-center gap-3">
                <p className="text-white uppercase text-lg  leading-[1] font-bold">
                  Create proposal
                </p>
              </button>
            </div>
            <div className="flex gap-1 justify-start items-start flex-col ">
              <p className="text-white font-alumni text-xl">PURCHASE NFT</p>
              <button className="flex justify-center  bg-dashBox border border-solid border-white rounded-[18px] w-full h-[69px] items-center gap-3">
                <p className="text-white text-lg uppercase  leading-[1] font-bold">
                  NFTKEY
                </p>
              </button>
            </div>
          </div>
          <div className="flex justify-center w-full mt-8 items-center gap-3">
            <p className="text-[40px] font-alumni text-white">Powered by:</p>
            <img src="/logo.png" className="object-contain w-[138px]" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Treasury;
