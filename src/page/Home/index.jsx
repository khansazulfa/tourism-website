import MyCard from '../../components/MyCard'
import NavBar from '../../components/NavBar'

function Home() {

  return (
    <main>
      <div className='container'>
        
      <NavBar />
        <MyCard location='Kraton Yogyakarta' kategori='pantai' place='src/assets/images/kraton.png' />
        {/* <MyCard location='Kraton Solo' kategori='pegunungan' /> */}
        
       <section className="section-popular" id="popular">
      <div className="container">
       
          <div className="col text-center section-popular-heading">
            <h2 id="bagian1"> Wisata Popular Search</h2>
            <p>
              Something that you never try
              <br />
              before in this world
            </p>
          </div>
        
      </div>
        </section>

      <section className="section-networks" id="networks">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h2>Our Networks</h2>
                <p>
                  Companies are trusted us
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