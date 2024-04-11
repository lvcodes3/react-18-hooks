import { useState, useEffect } from "react";

import cars from "./data/cars.json";

import { CarCard } from "./components/CarCard";

/*
interface CarProps {
  id: number;
  year: number;
  make: string;
  model: string;
  horsepower: number;
  img: string;
}
*/

const UseEffect = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // delay simulation //
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (err) {
        console.error("Unexpected error: ", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      {loading && <h1 className="text-xl font-bold">Loading...</h1>}
      {!loading && (
        <div className="w-[80%] flex flex-wrap md:flex-row flex-col justify-center items-center gap-5">
          {cars.map((car) => (
            <CarCard
              key={car.id}
              year={car.year}
              make={car.make}
              model={car.model}
              horsepower={car.horsepower}
              img={car.img}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default UseEffect;
