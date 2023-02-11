import { Link } from "react-router-dom";
import ActivityBox from "../../components/ActivityBox";

const ProposalDetails = () => {
  return (
    <div className="flex max-w-[1300px] justify-start items-center flex-col w-full px-5 ">
      <h2 className="font-pirate uppercase text-[40px] font-normal mt-5 md:self-start text-white">
        Chambers
      </h2>
      <div className="grid grid-cols-1 sm:mt-0 mt-7 xl:grid-cols-[1fr__330px] w-full gap-8 xl:gap-12">
        <div className="w-full flex justify-start items-start flex-col gap-3">
          <div className="w-full flex justify-between items-center gap-2">
            <h3 className="font-alumni text-[30px] sm:text-[40px] text-white font-normal">
              DETAILS:
            </h3>
            <Link
              to={"/chambers"}
              className="text-white flex justify-start items-center gap-2 font-alumni text-[30px] sm:text-[40px] font-normal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
              ALL PROPOSALS
            </Link>
          </div>
          <div className="flex justify-start items-start flex-col gap-8 w-full bg-black border border-dashed border-[#312F62] p-5 rounded-[10px]">
            <div className="w-full sm:flex-row flex-col gap-4 sm:gap-0 flex justify-between items-center sm:text-left text-center sm:items-start">
              <div className="flex justify-start items-center sm:items-start flex-col gap-1">
                <p className="text-[30px] font-pirate text-white leading-[1]">
                  MEMBER PROPOSAL
                </p>
                <p className="text-[30px] font-alumni text-lightGreen leading-[1]">
                  BorrowLucid Membership Proposal
                </p>
              </div>
              <p className="text-white leading-[1] font-alumni text-[30px]">
                PASSED: 11 DAYS AGO
              </p>
            </div>
            <p className="text-2xl sm:text-left text-center sm:text-[30px] font-alumni text-white leading-[1.3]">
              “As I lay with my head in your lap, Camerado, The confession I
              made I resume—what I said to you in the open air I resume: I know
              I am restless, and make others so; I know my words are weapons,
              full of danger, full of death; (Indeed I am myself the real
              soldier;
            </p>
            <div className="flex justify-start items-start flex-col gap-1">
              <p className="text-white leading-[1] font-normal text-[30px] font-alumni">
                LINK:
              </p>
              <a
                href="#"
                target={"blank"}
                className="text-lightGreen leading-[1] font-normal text-xl sm:text-[30px] font-alumni"
              >
                forum.daohaus.club/t/borrowlucid-membership-proposal/11124
              </a>
            </div>
            <div className="flex sm:flex-row flex-col justify-between w-full items-start gap-4 max-w-[90%]">
              <div className="flex justify-start items-center sm:w-auto w-full sm:items-start flex-col gap-2">
                <p className="text-white font-alumni text-[30px] font-normal leading-[1]">
                  TRIBUTE OFFERED
                </p>
                <p className="text-white flex justify-start items-center gap-2 leading-[1] font-alumni text-[30px] font-normal">
                  4987 FRAT{" "}
                  <img
                    src="/nft.png"
                    className="w-[40px] object-contain"
                    alt=""
                  />
                </p>
              </div>
              <div className="flex justify-start items-center sm:w-auto w-full sm:items-end flex-col gap-2">
                <p className="text-white font-alumni text-[30px] font-normal leading-[1]">
                  SHARES REQUESTED
                </p>
                <p className="text-white font-alumni text-[30px] font-normal leading-[1]">
                  1
                </p>
              </div>
            </div>
            <div className="flex bg-gray px-3 py-2 sm:w-auto w-full justify-center sm:justify-start items-center gap-10">
              <div className="flex  justify-start items-start flex-col">
                <p className="text-white font-alumni text-xl">SUBMITTED BY</p>
                <div className="flex justify-start items-center gap-2">
                  <img
                    src="/user-img.png"
                    className="w-[30px] aspect-square object-contain rounded-full"
                    alt=""
                  />
                  <p className="text-white font-alumni text-lg">BorrowLucid</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="black"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex  justify-start items-start flex-col">
                <p className="text-white font-alumni text-xl">SUBMITTED BY</p>
                <div className="flex justify-start items-center gap-2">
                  <img
                    src="/user-img.png"
                    className="w-[30px] aspect-square object-contain rounded-full"
                    alt=""
                  />
                  <p className="text-white font-alumni text-lg">BorrowLucid</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="black"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-start items-center xl:items-start flex-col w-full">
          <h4 className="text-white uppercase font-alumni text-[40px] font-normal">
            Actions:
          </h4>
          <div className="flex w-full justify-center items-center flex-col bg-black border border-dashed border-[#312F62] px-5 py-3 mb-5 rounded-[10px] gap-5">
            <h4 className="text-white leading-[1] text-[30px] font-normal font-alumni">
              PASSED
            </h4>
            <div className="w-[90%] h-[15px] rounded-full bg-progressFill"></div>
            <div className="flex w-full justify-between items-center gap-4">
              <p className="text-white font-alumni text-[30px] leading-[1]">
                21 YES
              </p>
              <p className="text-white font-alumni text-[30px] leading-[1]">
                0 NO
              </p>
            </div>
          </div>
          <h4 className="text-white font-alumni text-[40px] font-normal">
            ACTIVITY:
          </h4>
          <div className="greenScroll max-h-[350px] pr-3 overflow-y-auto flex justify-start items-start flex-col gap-4 w-full">
            <ActivityBox
              title="FTMZOMBIE VOTED YES"
              time="10 days ago"
              img="/user-img.png"
            />
            <ActivityBox
              title="FTMZOMBIE VOTED YES"
              time="10 days ago"
              img="/user-img.png"
            />
            <ActivityBox
              title="FTMZOMBIE VOTED YES"
              time="10 days ago"
              img="/user-img.png"
            />
            <ActivityBox
              title="FTMZOMBIE VOTED YES"
              time="10 days ago"
              img="/user-img.png"
            />
            <ActivityBox
              title="FTMZOMBIE VOTED YES"
              time="10 days ago"
              img="/user-img.png"
            />
            <ActivityBox
              title="FTMZOMBIE VOTED YES"
              time="10 days ago"
              img="/user-img.png"
            />
          </div>
        </div>
      </div>
      <div className="flex mt-8 sm:mt-16 xl:flex-row flex-col justify-between items-center sm:items-start gap-5 xl:gap-0 xl:items-center xl:w-full sm:w-auto w-full border border-dashed border-[#312F62] rounded-[10px] p-5">
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
    </div>
  );
};

export default ProposalDetails;
