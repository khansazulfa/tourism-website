import MyCard from '../../components/MyCard'
import NavBar from '../../components/NavBar'
import './home.css'

function Home() {
  
  return (
    <main>
      <div className='container'>
      <NavBar />
          <header className="banner" >
           
            <h1> Explore The Beautiful Places
              <br/>
                as Easily as One Click 
            </h1>
              <p> You will see beautiful
              <br/>
              moments you never see before
              </p>
              <a className="btn-get-started ">
              Get Started
            </a>
          </header>

        <section className='section-card'>
          <h1>Popular Travel</h1>
            <p className="desc-title">Something that you never try <br/> before in this world</p>
            <MyCard location='Kraton Yogyakarta' kategori='Culture' place='src/assets/images/kraton.png' />
            <MyCard location='Pantai Parangtritis' kategori='Maritim' place='src/assets/images/pantai-parangtritis.jpg' />
            <MyCard location='Candi Prambanan' kategori='Culture' place='src/assets/images/candi-prambanan.jpg' />
            <MyCard location='Lava Tour' kategori='Mountains' place='src/assets/images/lava-tour.webp' />
        </section>
   
    
    <section className="section-networks" id="networks">
    <div className="container">
    <div className="row">
    <div className="col-md-4">
      <h2>Our Networks</h2>
      <p>Companies are trusted us
      <br />
    more than just a trip
    </p>
    </div>
    <div className="col-md-8 text-center">
    <img src="src/assets/images/partner.png" alt="logo Partner" className="img-partner"/>
    </div>
    </div>
    </div>
    </section>
    
    
    </div>
    </main>
    )
  }
  
  export default Home