
function Question({text, content, iconA, iconQ}) {
  return(
    <li className="text-left mb-10">
      <div className="flex flex-row items-start mb-5">
        <div className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
          {iconQ}
        </div>
        <div className="bg-gray-100 p-5 px-10 w-full flex items-center">
          <h4 className="text-md leading-6 font-medium text-gray-900">{text}</h4>
        </div>
      </div>
      <div className="flex flex-row items-start">
        <div className="bg-indigo-100 p-5 px-10 w-full flex items-center">
          <p className="text-gray-700 text-sm">{content}
          </p>
        </div>
        <div className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
          {iconA}
        </div>
      </div>
    </li>
  );
};

function Email({key, text, content, email, icon}) {
  return(
    <div className="text-left mb-3">
      <div className="mt-2 flex flex-row items-center">
        <div className="items-center justify-center p-3 ml-3 rounded-full bg-primary text-white border-4 border-white text-xl font-semibold">
          {icon}
        </div>
        <div className="bg-sky-100 p-3 px-10 w-full flex flex-col md:flex-row justify-between rounded-lg">
          <p className=""><b>{text}</b></p>
          <p className="text-primary"><b>{email}</b></p>
        </div>
      </div>
      <div className="mt-2 bg-gray-100 py-2 px-5 w-full rounded-lg">
        <p className="">{content}</p>
      </div>
    </div>
  );
};


export { Question, Email };