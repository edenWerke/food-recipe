/* eslint-disable react/prop-types */
const BackgroundImage = ({ src, className, height = "550px" }) => {
  return (
    <div
      className={`w-full bg-cover opacity-3 bg-center ${className}`}
      style={{ backgroundImage: `url(${src})`, height }} // Using dynamic height
    ></div>
  );
};

export default BackgroundImage;
