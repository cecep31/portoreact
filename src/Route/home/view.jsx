import Navbar from '../component/Navbar'
import Card from '../component/card'
import Foot from '../component/footer'
import Main from '../component/main'
import Contact from '../component/contact'
import '../../App.css'
import SchoolIcon from '@material-ui/icons/School';

const Homepage = () => (

    <div>
        <Navbar />
        <div>
            <Main />
            <div className="">
                <Card/>
            </div>
            <Contact />
            <Foot />
        </div>
    </div>
)


export default Homepage;