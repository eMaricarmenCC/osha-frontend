const OneLine = () => {
  return(
    <div className="bg-secondary h-1 w-20"></div>
  );
};

const Linea = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-2 gap-2">
      <div className="bg-primary p-1 w-[100%] sm:w-[80%] lg:w-[60%] rounded-full"></div>
      <div className="bg-secondary p-1 w-[70%] sm:w-[50%] lg:w-[40%] rounded-full"></div>
    </div>
  );
};

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
    <div className="flex flex-row mt-2 mb-4">
      <div className={`${bgColorClass} h-2 w-6 lg:w-10`}></div>
      <div className="bg-white h-1 w-3"></div>
      <div className={`${bgColorClass} h-2 w-24`}></div>
    </div>
  );
};

const Line = () => {
  return (
    <div className="flex">
      <div className="bg-secondary h-1 w-5"></div>
      <div className="bg-white h-1 w-2"></div>
      <div className="bg-secondary h-1 w-20"></div>
    </div>
  );
};

const Title = ({}) => {
  return(
    <div className="mt-2 rounded-full border-gradient border-8 border-primary p-2">
      <div className="rounded-full border-4 border-primary p-2">
        <h1 className="text-center font-bold uppercase text-secondary w-auto text-xl lg:text-3xl">{t("accreditationDegrees.title")}</h1>
      </div>
    </div>
  );
};

export { OneLine, Linea, Line1, Line2, Line };