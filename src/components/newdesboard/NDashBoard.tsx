

import Footer from '../../common/footer/Footer'
import Navbar from '../../common/navbar/Navbar'
import '../newdesboard/Ndashboard.scss'
import UserProfile from '../userprofile/userprofile'
import Accessing from '../accessingCMS/accessing'
import '../../css/global.scss'
import Academics from '../academic/academic'
import Finance from '../financesAccount/finances'
import StudentService from '../studentService/studentservice'
import Courses from '../courses/courses'

function Dashboard() {


    return (
        <>
            <Navbar />
            <Courses />
            <Footer />
        </>
    )
}

export default Dashboard

