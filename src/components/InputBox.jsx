const InputBox = ({ label, name, placeholder, value, handler }) => {
  return (
    <div className="flex justify-start w-full items-start flex-col gap-3">
      <label
        htmlFor={label}
        className="text-white uppercase text-2xl font-alumni leading-[1]"
      >
        * {label}
      </label>
      <input
        type="text"
        id={label}
        name={name}
        value={value}
        placeholder={placeholder}
        className="w-full rounded-[10px] outline-none bg-transparent h-[45px] border border-white border-solid text-white pl-3 text-lg"
        onChange={handler}
      />
    </div>
  );
};

export default InputBox;
