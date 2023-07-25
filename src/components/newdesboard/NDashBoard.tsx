

import Footer from '../../common/footer/Footer'
import Navbar from '../../common/navbar/Navbar'
import '../newdesboard/Ndashboard.scss'
import UserProfile from '../userprofile/userprofile'
import Accessing from '../accessingCMS/accessing'
import '../../css/global.scss'
function Dashboard() {


    return (
        <>
            <Navbar />
            <UserProfile />
            <Footer />
        </>
    )
}

export default Dashboard

