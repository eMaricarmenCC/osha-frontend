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

const ListResponsive = ({list, icon}) => {
  return(
    <div class="flex flex-wrap">
      {list.map((li, index) => (
        <div class="p-1 sm:w-1/2 w-full">
          <div class="bg-gray-100 rounded flex p-2 h-full items-center">
            {icon}
            <p className="ml-2">{li}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export {List, ListResponsive};