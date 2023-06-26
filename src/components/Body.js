
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import { ALL_RESTAURANTS_API_URL } from "../utils/constants";
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';

const Body = () => {

	//NEVER USE (declare) useState hooks inside a condition.
	/**
	 * if(){
	 *  const [searchText, setSearchText] = useState("");
	 * }
	 */

	//NEVER USE (declare) useState hooks inside a loop.
	/**
	 * for(){
	 *  const [searchText, setSearchText] = useState("");
	 * }
	 */


	//NEVER USE (declare) useState hooks inside a function.
	/**
	 * function test(){
	 *  const [searchText, setSearchText] = useState("");
	 * }
	 */
	const [restaurantsData, setRestaurantsData] = useState([]);
	const [fetchRestaurantsData, setFetchRestaurantsData] = useState([]);
	const [searchText, setSearchText] = useState("");
	useEffect(() => {
		//setRestaurantsData(mockRestaurantsData);
		fetchData();
	}, []);

	const fetchData = async () => {
		const data = await fetch(ALL_RESTAURANTS_API_URL)
		const json = await data.json();
		console.log(`json`, json);

		const { data: { cards } } = json;
		let seeAllRestaurants = [];
		if (cards[2]?.length) {
			seeAllRestaurants = cards[2]?.data?.data?.cards;
		} else {
			seeAllRestaurants = cards[0]?.data?.data?.cards;
		}

		console.log(seeAllRestaurants);
		setRestaurantsData(seeAllRestaurants);
		setFetchRestaurantsData(seeAllRestaurants);

	}

	const onSearchBtnClicked = () => {
		if (searchText?.trim().length) {
			let filterList = fetchRestaurantsData.filter((restaurant) => restaurant.data.name.toLowerCase().includes(searchText.toLowerCase()));
			console.log(`filterList`, filterList);
			setRestaurantsData(filterList);
		} else {
			setRestaurantsData(fetchRestaurantsData);
		}

	}


	return (
		//conditional rendering.
		restaurantsData && restaurantsData.length == 0 ? <Shimmer /> :
			<>
				<div className="body">

					<div className="filter">
						<div className="search">
							<input type="text" onChange={(event) => {
								setSearchText(event.target.value);
							}} value={searchText}></input>
							<button onClick={onSearchBtnClicked}>Search</button>
						</div>
						<button className="filter-btn"
							onClick={() => {
								console.log('button clicked');
								let filterList = restaurantsData.filter((restaurant) => restaurant.data.avgRating > 4);
								console.log(`filterList`, filterList);
								setRestaurantsData(filterList);
							}}
						>Top Rated Restaurant</button>
					</div>
					<div className="restaurants-container">
						{
							restaurantsData?.map(restaurant => {
								return <Link key={restaurant.data.id} to={"/restaurant/" + restaurant.data.id}>
									<RestaurantCard resData={restaurant.data} ></RestaurantCard>
								</Link>

							})
						}
					</div>
				</div>
			</>
	)
}

export default Body;