import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./config";
import Shimmer from "../components/ShimmerUI";
const ReatraMenu = () => {
  //how to read dynamic url
  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestorantInfo();
  }, []);

  async function getRestorantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.3164945&lng=78.03219179999999&restaurantId=73011&submitAction=ENTER"
    );
    const jsonData = await data.json();
    console.log(jsonData?.data);
    setRestaurant(jsonData?.data?.cards[0]?.card?.card?.info);
    console.log(restaurant)
  }

  return (
    <div className="menu">
      <div>
        <h1>Restrantnd id:{resId}</h1>
        <h2>{restaurant.name}</h2>
        {/* <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
        <h3>{restaurant.area}</h3>
        <h3>{restaurant.city}</h3>
        <h3>{restaurant.avgRating}star</h3>
        <h3>{restaurant.costForTwoMsg}</h3> */}
      </div>
      {/* <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item.resId}>{item.name}</li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default ReatraMenu;
