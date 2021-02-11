import Navbar from '../component/Navbar'
import Card from '../component/card'
import Foot from '../component/footer'
import Main from './main'
import '../../app.css'

const Homepage = () => (

    <div>
        <Navbar />
        <div>
            <Main />
            <Card />
            <Foot />
        </div>
    </div>
)


export default Homepage;