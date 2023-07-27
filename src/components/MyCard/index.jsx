import "./MyCard.css"


const MyCard = (props) => {  
    
    return (
        <section className="section-popular-travel">
            <div className="popular-travel">
                <div className="travel-content">
                {/* <img src={props.place} alt="travel-popular"/> */}
                    <div className="travel-info">
                        <div className="travel-title">{props.kategori}</div>
                        <div className="travel-location">{props.location}</div>
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