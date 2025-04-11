export const Loading = () => {
  return(
    <div className="w-full h-full">
      <div className="mx-auto mt-5 flex flex-col gap-5 items-center justify-center">
        <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-sky-600" />
        <p>Cargando...</p>
      </div>
    </div>
  );
};