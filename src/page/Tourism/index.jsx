import MyCard from "../../components/MyCard"
import NavBar from "../../components/NavBar"
import "./Tourism.css"


function CategoryTourism() {
    return (
        <>
            <div>
                <NavBar />
                <section className='section-card'>
                    <div>
                        <h1 id='#bagian1' className='title'>All Tours</h1>
                        <p className="desc-title">Something that you never try <br /> before in this world</p>
                    </div>
                    <div className='card-list'>
                        <MyCard location='Kraton Yogyakarta' kategori='Culture' place='src/assets/images/kraton.png' />
                        <MyCard location='Parangtritis Beach' kategori='Maritim' place='src/assets/images/pantai-parangtritis.jpg' />
                        <MyCard location='Prambanan Temple' kategori='Culture' place='src/assets/images/candi-prambanan.jpg' />
                        <MyCard location='Lava Tour' kategori='Mountains' place='src/assets/images/lava-tour.webp' />
                        <MyCard location='Sindu Kusuma Edupark' kategori='Education' place='src/assets/images/bianglala.jpg' />
                        <MyCard location='Monument Yogya Kembali' kategori='Culture' place='src/assets/images/monumen-yogya-kembali.jpg' />
                        <MyCard location='Pok Tunggal Beach' kategori='Maritim' place='src/assets/images/pok-tunggal-beach.jpg' />
                        <MyCard location='Ratu Boko Temple' kategori='Culture' place='src/assets/images/ratu-boko-temple.jpg' />
                        <MyCard location='Museum Benteng Vredeburg' kategori='Culture' place='src/assets/images/benteng-vredeburg-1.jpg' />
                        <MyCard location='Taman Sari' kategori='Culture' place='src/assets/images/tm-sr.jpg' />
                        <MyCard location='Taman Pintar' kategori='Education' place='src/assets/images/taman-pintar.jpg' />
                        <MyCard location='Museum Ullen Sentalu' kategori='Education' place='src/assets/images/museum-ullen-sentalu.jpeg' />
                    </div>
                </section>
            </div>
        </>
    )
}

export default CategoryTourism