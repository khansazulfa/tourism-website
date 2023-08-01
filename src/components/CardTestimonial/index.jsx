import "./CardTestimonial.css"


const CardTestimonial = (props) => {
    return (
        < section className='testimonial-card-section'>
            <div className='testimonial-card'>
                <div className='testimonial-content'>
                    <img className="img-avatar-testimonial" src={props.avatar} alt="avatar-dummy" />
                    <div className="testimonial-desc">
                        <h3>{props.fullname}</h3>
                        <p>{props.testimonial}</p>
                        <hr />
                        <p>{props.trip}</p>
                    </div>
                </div>


            </div>
        </section >
    )
}

export default CardTestimonial;