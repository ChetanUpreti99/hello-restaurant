import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import Shimmer from "./Shimmer";

import { RESTAURANT_DATA_API_URL } from "../utils/constants";

const RestaurantMenu = () => {

	const [resInfo, setResInfo] = useState(null);
	const { resId } = useParams();
	console.log(resId);

	useEffect(() => {
		fetchData();
	}, []);



	const fetchData = async () => {
		const apiResponse = await fetch(RESTAURANT_DATA_API_URL + resId);
		const json = await apiResponse.json();
		const { data } = json;
		setResInfo(data);
	}

	console.log(`resInfo`, resInfo);
	let { costForTwoMessage, cuisines, name } = resInfo?.cards[0]?.card?.card?.info || {};

	const itemCards = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1].card.card.itemCards || resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1].card.card.categories || {};

	console.log('itemCards', itemCards);
	return resInfo === null ? (
		<Shimmer />
	) :
		(
			<div className="menu">
				<h1>{name}</h1>
				<h3>{cuisines.join(", ")}</h3>
				<h3>{costForTwoMessage}</h3>
				<ul>
					{
						itemCards.map(item => {
							return item?.card ?
								<li key={item?.card?.info?.id}>{item?.card?.info?.name}  -  {item?.card?.info?.price / 100}</li> : null;
						})
					}
				</ul>
			</div>
		)

}

export default RestaurantMenu;