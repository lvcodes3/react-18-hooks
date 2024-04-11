interface CarProps {
  year: number;
  make: string;
  model: string;
  horsepower: number;
  img: string;
}

export const CarCard: React.FC<CarProps> = ({
  year,
  make,
  model,
  horsepower,
  img,
}) => {
  return (
    <div className="w-80 h-64 flex flex-col border-2 border-black rounded-3xl shadow-xl">
      <h1 className="flex-1 text-center text-xl font-bold border-b-2 border-black">
        {year + " " + make + " " + model}
      </h1>
      <div className="flex-[8] flex justify-center items-center">
        <img
          src={`${process.env.PUBLIC_URL}/${img}`}
          alt={year + " " + make + " " + model}
        />
      </div>
      <p className="flex-1 text-center border-t-2 border-black">
        {horsepower} hp
      </p>
    </div>
  );
};
