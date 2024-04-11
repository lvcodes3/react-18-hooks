import { useState } from "react";

const UseState = () => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-5">
      <button
        className="p-2 text-white text-lg font-semibold bg-sky-600 border-2 border-black rounded-2xl cursor-pointer"
        onClick={() => setVisible(!visible)}
      >
        Toggle Visible State
      </button>
      {visible && (
        <img
          src={`${process.env.PUBLIC_URL}/doggo.jpg`}
          alt="dog"
          className="w-48 h-48"
        />
      )}
    </div>
  );
};

export default UseState;
