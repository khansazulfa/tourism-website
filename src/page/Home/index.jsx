import MyCard from '../../components/MyCard'
import NavBar from '../../components/NavBar'
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
            <MyCard location='Pantai Parangtritis' kategori='Maritim' place='src/assets/images/pantai-parangtritis.jpg' />
            <MyCard location='Candi Prambanan' kategori='Culture' place='src/assets/images/candi-prambanan.jpg' />
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

        <section className='section-testimonial'>
          <div>
            <h1 className='title'>There Are Loving Us</h1>
            <p className='desc-title'> Moments were giving them <br /> the best experience</p>
          </div>
        </section>

        <section className='section-testimonial-content'>

        </section>



      </div>
    </main>
  )
}

export default Home