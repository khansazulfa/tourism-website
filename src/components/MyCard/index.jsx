import "./MyCard.css"


const MyCard = (props) => {  
    
    return (
        <section className="section-popular-travel">
            <h1>Popular Travel</h1>
            <p className="desc-title">Something that you never try <br/> before in this world</p>
            <div className="popular-travel">
                <div className="travel-content">
                <img src="src/assets/images/kraton.png" alt="travel-popular"/>
                    <div className="travel-info">
                        <p className="travel-location">{props.kategori}</p>
                        <h4 className="travel-title">{props.location}</h4>
                        <a className="travel-btn" href="/details/">View Details</a>
                    </div>
                </div>
            
                <div className="travel-content">
                    <img src="src/assets/images/pantai-parangtritis.jpg" alt="travel-popular"/>
                    <div className="travel-info">
                        <p className="travel-location">{props.kategori}</p>
                        <h4 className="travel-title">{props.location}</h4>
                        <a className="travel-btn" href="/details/">View Details</a>
                    </div>
                </div>
                <div className="travel-content">
                    <img src="src/assets/images/candi-prambanan.jpg" alt="travel-popular"/>
                        <div className="travel-info">
                            <p className="travel-location">{props.kategori}</p>
                            <h4 className="travel-title">{props.location}</h4>
                            <a className="travel-btn" href="/details/">View Details</a>
                        </div>
                </div>
                <div className="travel-content">
                    <img src="src/assets/images/lava-tour.webp" alt="travel-popular"/>
                    <div className="travel-info">
                        <p className="travel-location">{props.kategori}</p>
                        <h4 className="travel-title">{props.location}</h4>
                        <a className="travel-btn" href="/details/">View Details</a>
                    </div>
                </div>
            </div>
        </section>
        // {/* // <section className="section-popular-content" id="popularContet">
        // // <div className="container">
        // // <div className="section-popular-travel row 
        // // justify-content-center">
        // // <div className="col-sm-6 col-md-4 col-lg-3">
        // // <div className="card-travel text-center d-flex flex-column rounded-bottom" id="rcorners2" style={{ backgroundImage:`url(${props.place})`}}>
        // // <div className="travel-country">{props.kategori}</div>
        // // <div className="travel-location">{props.location}</div>
        // // <div className="travel-button mt-auto">
        // // <a href="/details" className="btn btn-travel-details px-4">
        // // View Details
        // // </a>
        // // </div>
        // // </div>
        // // </div> 
        // // </div>
        // // </div>
        // // </section> */}
        )
    }
    
    export default MyCard;