import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./config";
import Shimmer from "../components/ShimmerUI";
const ReatraMenu = () => {
  const params = useParams();
  const { id } = params;

  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestorantInfo();
  }, []);

  async function getRestorantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.624480699999999&menuId="+id
    );
    const jsonData = await data.json();
    // console.log(jsonData.data);
    setRestaurant(jsonData.data);
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restrantnd id:{id}</h1>
        <h2>{restaurant.name}</h2>
        <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
        <h3>{restaurant.area}</h3>
        <h3>{restaurant.city}</h3>
        <h3>{restaurant.avgRating}</h3>
        <h3>{restaurant.costForTwoMsg}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          <div>
            <ul>
              {Object.values(restaurant?.menu?.items).map((item) => (
                <li key={item?.id}>{item?.name}</li>
              ))}
            </ul>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default ReatraMenu;
