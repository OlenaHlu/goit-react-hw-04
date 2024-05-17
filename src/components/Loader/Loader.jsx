import { RotatingLines } from "react-loader-spinner";

const Loader = (isVisible) => {
  return (
    <div>
      <RotatingLines
        visible={isVisible}
        height="96"
        width="96"
        color="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
