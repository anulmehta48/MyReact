import { IMG_CDN_URL } from "./config";

const RestraunCart = ({name,cuisines,cloudinaryImageId,lastMileTravel}) => {
    return (
      <div className="card">
        <img
          alt="logoi"
          src={
            IMG_CDN_URL +
            cloudinaryImageId
          }
        />
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")} </h3>
        <h5>{lastMileTravel} star</h5>
      </div>
    );
  };
  

  export default RestraunCart;