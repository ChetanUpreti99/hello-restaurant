import { CDN_URL } from '../utils/constants'


const styleCard = {
    backgroundColor: "#f0f0f0"
}

const RestaurantCard = (props) => {
    let { resData: { name, cloudinaryImageId, cuisines, avgRating, costForTwoString, travelTime } } = props;
    return (
        <div className="restaurant-card" style={styleCard}>
            <img className="restaurant-logo" alt="res logo" src={`${CDN_URL}/${cloudinaryImageId}`} />
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>*{avgRating}</h4>
            <h4>{costForTwoString}</h4>
        </div>
    )
}

export default RestaurantCard;