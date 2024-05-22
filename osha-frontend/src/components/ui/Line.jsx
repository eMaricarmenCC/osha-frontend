
const Line2 = ({bgColorClass1, bgColorClass2}) => {
  return (
    <div className="flex flex-col justify-center items-center mt-2">
      <div className={`${bgColorClass1} h-1 w-80`}></div>
      <div className={`${bgColorClass2} h-1 w-40 mt-2`}></div>
    </div>
  );
};

const Line1 = ({bgColorClass}) => {
  return (
    <div className="flex flex-row mt-2">
      <div className={`${bgColorClass} h-2 w-6`}></div>
      <div className="bg-white h-1 w-3"></div>
      <div className={`${bgColorClass} h-2 w-24`}></div>
    </div>
  );
};

export { Line1, Line2 };