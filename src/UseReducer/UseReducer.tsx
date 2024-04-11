import { useReducer } from "react";

type State = {
  count: number;
};

function reducer(state: State, action: any) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div className="w-full h-full pt-5 flex justify-center items-start gap-x-2">
      <button
        className="p-1 text-white text-lg font-semibold bg-sky-600 border-2 border-black rounded-2xl cursor-pointer"
        onClick={() => dispatch({ type: "increment" })}
      >
        +
      </button>
      <h1 className="text-lg text-semibold">{state.count}</h1>
      <button
        className="p-1 text-white text-lg font-semibold bg-sky-600 border-2 border-black rounded-2xl cursor-pointer"
        onClick={() => dispatch({ type: "decrement" })}
      >
        -
      </button>
    </div>
  );
};

export default UseReducer;
