import "./CardTestimonial.css"


const CardTestimonial = (props) => {
    return (
        < section className='testimonial-card-section'>
            <div className='testimonial-card'>
                <div className='testimonial-content'>
                    <img className="img-avatar-testimonial" src={props.avatar} alt="avatar-dummy" />
                    <div className="testimonial-fullname">{props.fullname}</div>
                    <div className="testimonial-person">{props.testimonial}</div>
                    <hr className="line-testi" />
                    <p className="trip-to">{props.trip}</p>
                </div>
            </div>
        </section >

    )
}

export default CardTestimonial;