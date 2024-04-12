import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="pt-4 flex flex-col justify-center items-center gap-5">
      <h1 className="text-3xl font-bold">Let's Learn React 18 Hooks</h1>
      <button className="p-2 text-white text-lg font-semibold bg-sky-600 border-2 border-black rounded-2xl cursor-pointer">
        <Link to="/useState">useState</Link>
      </button>
      <button className="p-2 text-white text-lg font-semibold bg-sky-600 border-2 border-black rounded-2xl cursor-pointer">
        <Link to="/useEffect">useEffect</Link>
      </button>
      <button className="p-2 text-white text-lg font-semibold bg-sky-600 border-2 border-black rounded-2xl cursor-pointer">
        <Link to="/useContext">useContext</Link>
      </button>
      <button className="p-2 text-white text-lg font-semibold bg-sky-600 border-2 border-black rounded-2xl cursor-pointer">
        <Link to="/useRef">useRef</Link>
      </button>
      <button className="p-2 text-white text-lg font-semibold bg-sky-600 border-2 border-black rounded-2xl cursor-pointer">
        <Link to="/useMemo">useMemo</Link>
      </button>
      <button className="p-2 text-white text-lg font-semibold bg-sky-600 border-2 border-black rounded-2xl cursor-pointer">
        <Link to="/useCallback">useCallback</Link>
      </button>
      <button className="p-2 text-white text-lg font-semibold bg-sky-600 border-2 border-black rounded-2xl cursor-pointer">
        <Link to="/useReducer">useReducer</Link>
      </button>
      {/*
      <button className="p-2 text-white text-lg font-semibold bg-sky-600 border-2 border-black rounded-2xl cursor-pointer">
        <Link to="/useTransition">useTransition</Link>
      </button>
      */}
    </main>
  );
};

export default Home;
