import "./MyCard.css"


const MyCard = (props) => {

    return (
        <section className="section-popular-travel">
            <div className="popular-travel">
                <div className="travel-content">
                    <img src={props.place} alt="travel-popular" />
                    <div className="travel-info">
                        <div className="travel-title">{props.kategori}</div>
                        <div className="travel-location">{props.location}</div>
                        <div className="travel-btn">
                            <a href="/details/">View Details</a>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    )
}

export default MyCard;