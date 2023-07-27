import React from "react";

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
import AcademicAccount from "../academicAccount/academicAccount";

function Dashboard() {


    return (
        <>
            <Navbar />
            <AcademicAccount />
            <Footer />
        </>
    )
}

export default Dashboard

