import { TbPointFilled } from "react-icons/tb";


const List = ({list, icon}) => {
  return(
    <ul className="mt-3 flex flex-col space-y-2">
      {list.map((li, index) => (
        <li key={index} className="flex gap-1 items-center">
          {icon}
          <p className="">{li}</p>
        </li>
      ))}
    </ul>
  );
};

const ListIcon = ({list, icon}) => {
  return(
    <ul className="mt-3 flex flex-col space-y-2">
      {list.map((li, index) => (
        <li key={index} className="flex gap-1">
          <span className="mt-1">{icon}</span>
          <p className="">{li}</p>
        </li>
      ))}
    </ul>
  );
};

const ListPoint = ({list}) => {
  return(
    <ul className="flex flex-col space-y-2">
      {list.map((li, index) => (
        <li key={index} className="flex gap-1 text-primary">
          <TbPointFilled className="mt-1" style={{minHeight:14, minWidth:14, maxHeight:14, maxWidth:14}}/>
          <p className="">{li}</p>
        </li>
      ))}
    </ul>
  );
};

const ListResponsive = ({list, icon}) => {
  return(
    <div className="flex flex-wrap">
      {list.map((li, index) => (
        <div className="p-1 sm:w-1/2 w-full">
          <div className="bg-gray-100 rounded flex p-2 h-full items-center">
            {icon}
            <p className="ml-2">{li}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
const ListResponsive3Col = ({list, icon}) => {
  return(
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((li, index) => (
        <div className="p-1 w-full">
          <div className="bg-gray-100 rounded flex p-2 h-full items-center">
            {icon}
            <p className="ml-2">{li}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export {List, ListIcon, ListPoint, ListResponsive, ListResponsive3Col};