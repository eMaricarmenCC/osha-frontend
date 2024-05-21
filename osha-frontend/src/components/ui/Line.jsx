
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
    <div className="flex flex-row">
      <div className={`${bgColorClass} h-1 w-6"`}></div>
      <div className="bg-white h-1 w-4"></div>
      <div className={`${bgColorClass} h-1 w-20`}></div>
    </div>
  );
};

export { Line1, Line2 };