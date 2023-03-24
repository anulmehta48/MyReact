import RestraunCart from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./ShimmerUI";
import { Link } from "react-router-dom";

function filterData(searchText, restrauntList) {
  const filterData = restrauntList.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );
  return filterData;
}

const Body = () => {
  const [allrestaurants, setAllrestaurants] = useState([]);
  const [filteredrestaurants, setFilteredRestaraunts] = useState([]);
  const [searchText, setSearchText] = useState();

  useEffect(() => {
    getApiData();
  }, []);

  async function getApiData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    console.log(jsonData);
    setAllrestaurants(jsonData.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaraunts(jsonData.data?.cards[2]?.data?.data?.cards);
  }

  if (!allrestaurants) return null;

  // if(filteredrestaurants?.length==0) return <h1>No restaurant match your filter</h1>

  return allrestaurants?.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            //filder the data
            const data = filterData(searchText, allrestaurants);
            //update the state
            setFilteredRestaraunts(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="rastaurant-list">
        {filteredrestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restrant/"+restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestraunCart {...restaurant.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
