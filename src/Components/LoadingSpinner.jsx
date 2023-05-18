const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-68px)] ">
      <div className="w-10 h-10 border-8 border-dashed rounded-full animate-spin mt-5 border-[#4acdd5] "></div>
    </div>
  );
};

export default LoadingSpinner;
