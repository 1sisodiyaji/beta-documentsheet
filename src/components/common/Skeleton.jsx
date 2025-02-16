const Skeleton = ({ limit }) => {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center gap-2 w-full">
        {[...Array(limit)].map((_, index) => (
          <div key={index} className="w-full md:w-[35vw] md:h-[35vh] rounded-md">
            <div className="w-full">
              <div className="h-[300px] w-full bg-gray-300 animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skeleton;
