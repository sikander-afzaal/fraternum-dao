const Home = () => {
  return (
    <div className="flex justify-start items-center flex-col w-full px-5">
      <div className="flex mt-7 xl:flex-row flex-col justify-center items-start gap-5">
        <div className="flex justify-center items-center flex-col w-full gap-3">
          <p className="text-mint font-normal text-sm">TOTAL $FRAT BURNT</p>
          <div className="flex justify-center border border-solid border-[#ffdddd] rounded-[18px] min-w-[240px] h-[69px] items-center gap-3">
            <img src="/nft.png" className="w-[70px] object-contain" alt="" />
            <p className="text-white opacity-70 text-[35px] font-abel leading-[1] font-normal relative">
              690,000
              <p className="absolute bottom-full right-0 text-[#50E3C2] text-[11px] font-abel">
                +39.69%
              </p>
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col w-full gap-3">
          <p className="text-mint font-normal text-sm">TOTAL VALUE LOCKED:</p>
          <div className="flex justify-center border border-solid border-[#ffdddd] rounded-[18px] min-w-[240px] h-[69px] items-center gap-3">
            <p className="text-white opacity-70 text-[35px] font-abel leading-[1] font-normal relative">
              $ 4,560,000
              <p className="absolute bottom-full right-0 text-[#50E3C2] text-[11px] font-abel">
                +39.69%
              </p>
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col w-full gap-3">
          <p className="text-mint font-normal text-sm">
            CURRENT $FRAT + $xFRAT PRICE:
          </p>
          <div className="flex justify-center border border-solid border-[#ffdddd] rounded-[18px] min-w-[240px] h-[69px] items-center gap-3">
            <div className="flex justify-center items-center flex-col">
              <img src="/nft.png" className="w-[70px] object-contain" alt="" />
              <p className="text-white -translate-y-3 opacity-70  font-normal text-xl font-abel">
                $0.15
              </p>
            </div>
            <div className="flex justify-center items-center flex-col">
              <img src="/nft.png" className="w-[70px] object-contain" alt="" />
              <p className="text-white -translate-y-3 opacity-70  font-normal text-xl font-abel">
                $1,600
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center lg:flex-row flex-col gap-10 lg:gap-20 mt-8">
        <div className="flex justify-start items-center flex-col gap-5">
          <div className="relative">
            <img src="/nft.png" className="w-[150px] object-contain" alt="" />
            <div className="flex justify-start items-center gap-0 absolute top-[65%] left-[70%]">
              <img
                src="/metamask.png"
                className="object-contain w-[41px]"
                alt=""
              />
              <h2 className="font-pirate text-[40px] font-normal text-white">
                +
              </h2>
            </div>
          </div>
          <p className="text-mint font-abel text-lg ">BUY $FRAT TOKENS</p>
        </div>
        <div className="flex justify-start items-center flex-col gap-5">
          <div className="relative flex justify-center items-center">
            <img
              src="/nft.png"
              className="w-[150px] -mr-7 object-contain"
              alt=""
            />
            <img
              src="/nft.png"
              className="w-[150px] object-contain -ml-7 -z-10"
              alt=""
            />
            <div className="flex justify-start items-center gap-0 absolute top-[65%] left-[80%]">
              <img
                src="/metamask.png"
                className="object-contain w-[41px]"
                alt=""
              />
              <h2 className="font-pirate text-[40px] font-normal text-white">
                +
              </h2>
            </div>
          </div>
          <p className="text-mint font-abel text-lg ">
            ZAP IN TO $FRAT-FTM LP POOL
          </p>
        </div>
        <div className="flex justify-start items-center flex-col gap-5">
          <div className="relative">
            <img src="/nft.png" className="w-[150px] object-contain" alt="" />
            <div className="flex justify-start items-center gap-0 absolute top-[65%] left-[70%]">
              <img
                src="/metamask.png"
                className="object-contain w-[41px]"
                alt=""
              />
              <h2 className="font-pirate text-[40px] font-normal text-white">
                +
              </h2>
            </div>
          </div>
          <p className="text-mint font-abel text-lg ">BUY $xFRAT</p>
        </div>
      </div>
      <div className="flex justify-center flex-wrap xl:flex-col mt-10 items-center flex-row gap-5 w-full max-w-[1224px]">
        <div className="flex xl:flex-row flex-col justify-between items-center sm:items-start gap-5 xl:gap-0 xl:items-center xl:w-full sm:w-auto w-full border border-dashed border-[#312F62] rounded-[10px] p-5">
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
                <span className="absolute bottom-full right-0 text-[#50E3C2] text-[11px] font-abel">
                  +39.69%
                </span>
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
        <div className="flex xl:flex-row flex-col justify-between items-center sm:items-start gap-5 xl:gap-0 xl:items-center xl:w-full sm:w-auto w-full border border-dashed border-[#312F62] rounded-[10px] p-5">
          <div className="flex justify-start items-center sm:items-start flex-col ">
            <p className="text-[26px] font-alumni leading-[1] text-white">
              LATEST TOKEN VAULTS
            </p>
            <p className="text-[46px] opacity-90 leading-[1] font-alumni text-white">
              30 DAYS
            </p>
            <p className="text-[30px] font-alumni leading-[1] text-mint">
              DAILY INTEREST UNLOCKS
            </p>
          </div>
          <div className="flex justify-center items-start flex-col sm:w-auto w-full gap-3">
            <p className="text-mint font-normal text-sm">POOLS:</p>
            <div className="flex justify-center border border-solid border-[#ffdddd] rounded-[18px] min-w-[240px] sm:w-auto w-full h-[69px] items-center gap-3">
              <p className="text-white opacity-70 text-[35px] font-abel leading-[1] font-normal relative">
                FRAT-FTM LP
              </p>
            </div>
          </div>
          <div className="flex justify-center items-start flex-col sm:w-auto w-full  gap-3">
            <p className="text-mint font-normal text-sm">CURRENT APR</p>
            <div className="flex justify-center border border-solid border-[#ffdddd] rounded-[18px] min-w-[240px] sm:w-auto w-full h-[69px] items-center gap-3">
              <p className="text-white opacity-70 text-[35px] font-abel leading-[1] font-normal relative">
                37%
              </p>
            </div>
          </div>
          <div className="flex justify-center items-start flex-col sm:w-auto w-full  gap-3">
            <p className="text-mint font-normal text-sm">TVL</p>
            <div className="flex justify-center border border-solid border-[#ffdddd] rounded-[18px] min-w-[240px] sm:w-auto w-full h-[69px] items-center gap-3">
              <p className="text-white opacity-70 text-[35px] font-abel leading-[1] font-normal relative">
                $42,690,000
              </p>
            </div>
          </div>
        </div>
        <div className="flex xl:flex-row flex-col justify-between items-center sm:items-start gap-5 xl:gap-0 xl:items-center xl:w-full sm:w-auto w-full border border-dashed border-[#312F62] rounded-[10px] p-5">
          <div className="flex justify-start items-center sm:items-start flex-col ">
            <p className="text-[26px] font-alumni leading-[1] text-white">
              LATEST NFT STAKING POOL
            </p>
            <p className="text-[46px] opacity-90 leading-[1] font-alumni text-white">
              30 DAYS
            </p>
            <p className="text-[30px] font-alumni leading-[1] text-mint">
              DAILY INTEREST UNLOCKS
            </p>
          </div>
          <div className="flex justify-center items-start flex-col sm:w-auto w-full gap-3">
            <p className="text-mint font-normal text-sm">POOLS:</p>
            <div className="flex justify-center border border-solid border-[#ffdddd] rounded-[18px] min-w-[240px] sm:w-auto w-full h-[69px] items-center gap-3">
              <p className="text-white opacity-70 text-lg font-abel leading-[1] font-normal relative">
                CREATURES OF THE NIGHT
              </p>
            </div>
          </div>
          <div className="flex justify-center items-start flex-col sm:w-auto w-full  gap-3">
            <p className="text-mint font-normal text-sm">CURRENT POOL SIZE</p>
            <div className="flex justify-center border border-solid border-[#ffdddd] rounded-[18px] min-w-[240px] sm:w-auto w-full h-[69px] items-center gap-3">
              <p className="text-white opacity-70 text-[35px] font-abel leading-[1] font-normal relative">
                10,000 <span className="text-sm">$FRAT</span>
              </p>
            </div>
          </div>
          <div className="flex justify-center items-start flex-col sm:w-auto w-full  gap-3">
            <p className="text-mint font-normal text-sm">TVL</p>
            <div className="flex justify-center border border-solid border-[#ffdddd] rounded-[18px] min-w-[240px] sm:w-auto w-full h-[69px] items-center gap-3">
              <p className="text-white opacity-70 text-[35px] font-abel leading-[1] font-normal relative">
                $42,690,000
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center sm:flex-row flex-col items-center w-full mt-10 lg:gap-0 gap-8 sm:gap-4">
        <div className="flex justify-center items-center w-full flex-col text-center sm:text-left lg:text-center">
          <p className="text-mint font-abel text-lg lg:text-[22px] leading-[1.1]">
            Stake LP tokens, NFTs, <br />
            Create proposals and participate in Initial NFT Offerings <br />
            with the Fantom Haunted Frat Club{" "}
          </p>
        </div>
        <div className="flex justify-center items-center gap-2 border border-[#FFDDDD] rounded-[10px] h-[40px] min-w-[282px] relative border-solid ">
          <img
            src="/symbol.png"
            className="absolute left-[2%] w-[67px] object-contain"
            alt=""
          />
          <p className="text-mint font-abel pl-16 text-[20px] leading-[1]">
            PURCHASE FHFC AVATAR
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
