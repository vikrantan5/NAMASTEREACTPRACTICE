


const Card = (props, key) => {
    console.log(props)
    const {name,cloudinaryImageId , locality,areaName,cuisines,avgRating,costForTwo} =props.prod.card.card.info
    const shortName =
    name.split(" ").slice(0, 5).join(" ") +
    (name.split(" ").length > 5 ? "..." : "");

    return (
        <div className="card">

            <div className="cardimage">
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/" + cloudinaryImageId} alt="food" />
            </div>

            <div className="content">

                <h2 className="defi">
                    {shortName}
                </h2>

                <div className="section">

                    <div className="left">
                        <p>{cuisines}</p>
                        <p>{areaName}</p>
                        <p>{avgRating}</p>
                    </div>

                    <div className="right">
                        <p>{locality}</p>
                        <p>{costForTwo}</p>
                        <div className="buy">
                            <h1>Buy</h1>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};
export default Card