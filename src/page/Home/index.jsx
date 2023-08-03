import MyCard from '../../components/MyCard'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import CardTestimonial from '../../components/CardTestimonial'
import './home.css'


function Home() {

  return (
    <main>
      <div className='container'>
        <NavBar />
        <header className="banner" >

          <h1> Explore beautiful places
            <br />
            as Easy as One Click
          </h1>
          <p> You will see beautiful
            <br />
            moments you never see before
          </p>
          <a href='#bagian1' className="btn-get-started ">
            Get Started
          </a>
        </header>

        <section className='section-card'>
          <div>
            <h1 id='#bagian1' className='title'>Popular Travel Search</h1>
            <p className="desc-title">Something that you never try <br /> before in this world</p>
          </div>
          <div className='card-list'>
            <MyCard location='Kraton Yogyakarta' kategori='Culture' place='src/assets/images/kraton.png' />
            <MyCard location='Parangtritis Beach' kategori='Maritim' place='src/assets/images/pantai-parangtritis.jpg' />
            <MyCard location='Prambanan Temple' kategori='Culture' place='src/assets/images/candi-prambanan.jpg' />
            <MyCard location='Lava Tour' kategori='Mountains' place='src/assets/images/lava-tour.webp' />
          </div>
        </section>

        <section className="section-networks">
          <div className="content-networks">
            <h2 className='heading-content-networks'>Our Networks</h2>
            <p>Companies are trusted us
              <br />
              more than just a trip
            </p>
          </div>
          <div className="content-logo-networks">
            <img src="src/assets/images/partner.png" alt="logo Partner" className="img-partner" />
          </div>
        </section>

        <section className='section-testimonials'>
          <div className='testimonial-title'>
            <h1 className='title'>There Are Loving Us</h1>
            <p className='desc-title'> Moments were giving them <br /> the best experience</p>
          </div>
          <div className='card-list-testimonials'>
            <CardTestimonial avatar='src/assets/images/avatar-1.png' fullname='Dias More' testimonial='Historic tourist attractions in Yogyakarta' trip='Trip to Kraton Yogyakarta' />
            <CardTestimonial avatar='src/assets/images/avatar-2.png' fullname='George Rug' testimonial='Beautiful view of the temple
              Love the atmosphere here.' trip='Trip to Prambanan Temple' />
            <CardTestimonial avatar='src/assets/images/avatar-3.png' fullname='Shabrina Michel' testimonial='“ I loved it when the waves was shaking harder — I was scared too “' trip='Trip to Parangtriris' />
          </div>
        </section>

        <hr className='separation-line' />

        <section>
          <Footer />
        </section>
        <hr />
        <div className="container-fluid">
          <div className="row border-top justify-content-center 
    align-items-center pt-4">
            <div className="col-auto text-gray-500 font-weight-light">
              2021 Copyright Yogyatorism . All right reserved . Made in Yogyakarta
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}

export default Home