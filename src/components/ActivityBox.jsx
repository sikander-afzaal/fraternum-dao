const ActivityBox = ({ title, place, time, img }) => {
  return (
    <div className="flex justify-between items-center gap-5 p-3 w-full border border-dashed border-[#312F62] bg-black rounded-[10px]">
      <div className="flex justify-start items-start flex-col w-max">
        <p className="text-white font-normal uppercase leading-[1] text-xl sm:text-[25px] font-alumni">
          {title}
        </p>
        <div className="flex justify-between items-center w-full gap-2">
          <p className="text-white uppercase text-base font-normal font-alumni">
            {time}
          </p>
          <p className="text-white uppercase text-base font-normal font-alumni">
            {place}
          </p>
        </div>
      </div>
      <img src={img} className="object-contain" alt="" />
    </div>
  );
};

export default ActivityBox;
