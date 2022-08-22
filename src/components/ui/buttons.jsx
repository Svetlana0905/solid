export const BigBtn = (props) => {
  const btnText = () => props.text || "default";
  const handleClick = () => props.click;
  return (
    <button
      onClick={() => handleClick()}
      class="w-64 px-8 h-10 text-white font-semibold bg-gradient-to-r from-greenbg-100 to-greenbg-200 rounded-lg hover:from-greenbg-300 hover:to-greenbg-400"
    >
      {btnText}
    </button>
  );
};

export const SmallBtn = (props) => {
  const btnText = () => props.text || "Click";
  return (
    <button
      onClick={() => props.click}
      type="submit"
      class="w-40 px-2 h-10 text-white font-semibold bg-gradient-to-r from-greenbg-100 to-greenbg-200 rounded-lg hover:from-greenbg-300 hover:to-greenbg-400"
    >
      {btnText}
    </button>
  );
};
