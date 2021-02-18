import Navbar from '../component/Navbar'
import Card from '../component/card'
import Foot from '../component/footer'
import Main from '../component/main'
import '../../App.css'
import SchoolIcon from '@material-ui/icons/School';

const Homepage = () => (

    <div>
        <Navbar />
        <div>
            <Main />
            <div className="md:flex md:justify-between md:mt-5">

                <Card title="Study On Progress"/>
                <Card title="Last Study"/>
            </div>
            <Foot />
        </div>
    </div>
)


export default Homepage;