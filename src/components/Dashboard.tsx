
import Navbar from '../common/navbar/Navbar'
import './Dashboard.scss'
import profile from '../assets/images/userProfile.png'
import IcnLeft from '../assets/icons/IcnEdit'
import IcnRight from '../assets/icons/IcnRight'

import imageGooleGmail from '../assets/images/imageGooleGmail.png'
import imageGoogleDrive from '../assets/images/imageGoogleDrive.png'
import imageGoogleSlide from '../assets/images/imageGoogleSlide.png'
import imageGoogleDoc from '../assets/images/imageGoogleDoc.png'
import imageGoogleSheet from '../assets/images/imageGoogleSheet.png'

import imageMapPin from '../assets/images/imageMapPin.png'
import imagePhone from '../assets/images/imagePhone.png'
import imageClock from '../assets/images/imageClock.png'
import imageEmail from '../assets/images/imageEmail.png'

import imageParamoutCapitalGroup from '../assets/images/imageParamoutCapitalGroup.png'
import imageEye from '../assets/images/imageEye.png'

function Dashboard() {
    const data = [
        { name: "Dot Examination FAQ" },
        { name: "AM - ASR Notice of Availabity" },
        { name: "AM - Criminal Background Screening" },
        { name: "AM - High School GED Request Online" },
        { name: "AM - PreEmploy Authorization" },
        { name: "AM - Veterans Affairs Program Disclosure" },
    ];
    const surveyData = [
        { title: "Lorem Ipsum is simplydummy text", name: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita…" },
        { title: "Maecenas metus velit, facilisis pretium", name: "Fusce molestie condimentum lectus. Aliquam iaculis purus justo, at interdum felis varius sed. In fermentum venenatis egestas. Morbi accumsan arcu nec augue facilisis, non ornare nulla faucibus. Cras sapien ante, ullamcorper id…" },
    ];

    return (
        <div className='contact-form'>
            <Navbar />

            <div className='main-contact-form'>

                <div className='left-contact-form'>

                    {/* --------------------------------------user profile-------------------------------------------- */}
                    <div className='userProfile-main-container'>
                        <div className='userProfile-inner-container-left'>

                            <div className='userProfile-row-container-inner-left'>

                                <div className='userProfile-image-container'>
                                    <img className='userProfile-image' src={profile} />
                                </div>

                                <div className='userProfile-name-container'>

                                    <div className='userProfile-name-header-container'>
                                        <label className='userProfile-txt-type'>Hello!</label>
                                        <label className='userProfile-txt-name'>William Edward</label>
                                        <label className='txt-lable'>Student# :
                                            {
                                                <label className='txt-value'> 13256901</label>
                                            }
                                        </label>
                                    </div>

                                    <div className='userProfile-name-footer-container'>
                                        <div className='userProfile-btn-edit'>
                                            <IcnLeft width={16} height={16} />
                                            <button className='userProfile-btn-edit-button'> Edit Profile</button>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className='userProfile-row-container-inner-right'>

                                <div className='userProfile-name-header-container'>
                                    <label className='txt-lable1'>Campus :</label>
                                    <label className='txt-value1'>ONL - Miller Motte Online Programs</label>

                                    <label className='txt-lable1'>Student Status :</label>
                                    <label className='txt-value1'>Enroll - Being Processed</label>

                                    <label className='txt-lable1'>Program :</label>
                                    <label className='txt-value1'>AAS Business Administration</label>
                                </div>

                                <div className='userProfile-name-header-container'>
                                    <label className='txt-lable1'>GPA :</label>
                                    <label className='txt-value1'>0</label>

                                    <label className='txt-lable1'>Complete Credit Hours :</label>
                                    <label className='txt-value1'>0</label>

                                    <label className='txt-lable1'>Remaining Credit Hours :</label>
                                    <label className='txt-value1'>0</label>
                                </div>


                            </div>

                        </div>
                    </div>

                    {/* --------------------------------------requiredDocuments-------------------------------------------- */}
                    <div className='requiredDocuments-main-container'>
                        <label>Required Documents</label>
                        <div className='announcements-line-container' />

                        <div className='announcements-list-title-container'>
                            <label>Document</label>
                            <label>Status</label>
                        </div>

                        <div className="users">
                            {data.map((user) => (
                                <div className='announcements-list-container'>
                                    <label>{user.name}</label>
                                    <label>Required</label>
                                </div>

                                // <div className="user">{user.name}</div>
                            ))}
                        </div>


                    </div>

                </div>

                <div className='right-contact-form'>
                    <div className='announcements-main-container'>
                        <label>Announcements</label>
                    </div>
                </div>

            </div>

            <div className='myResources-main-container'>

                <div className='myResources-inner-main-container'>
                    <label className='myPayments-inner-main-container-txt'>My Resources</label>
                    <div className='announcements-line-container' />
                    <div className='commonboxLine'>
                        <div className='myResources-list-container'>
                            <label>Office 365</label>
                        </div>

                        <div className='myResources-list-container'>
                            <label>Protect Your Account</label>
                        </div>
                    </div>

                    <div className='myResources-list-bottom-line'>
                        <label>My Google Apps</label>
                    </div>

                    <div className='myResources-image-container'>
                        <img className='myResources-image1' src={imageGooleGmail} />
                        <img className='myResources-image1' src={imageGoogleDrive} />
                        <img className='myResources-image2' src={imageGoogleSlide} />
                        <img className='myResources-image2' src={imageGoogleDoc} />
                        <img className='myResources-image2' src={imageGoogleSheet} />
                    </div>

                </div>

                <div className='myPayments-inner-main-container'>
                    <label className='myPayments-inner-main-container-txt'>My Payments</label>
                    <div className='announcements-line-container' />

                    <div className='commonboxLine'>
                        <div className='myPayments-row-container'>
                            <div className='myPayments-colom1-container'>
                                <label className='txt-lable1'>Packaged Amount :</label>
                                <label className='txt-value1'>$50</label>

                                <label className='txt-lable1'>Minimum Payment Due :</label>
                                <label className='txt-value1'>$00</label>
                            </div>
                            <div className='myPayments-colom1-container'>
                                <label className='txt-lable1'>Outstanding Balance :</label>
                                <label className='txt-value1'>$50</label>

                                <label className='txt-lable1'>Payment Due Date :</label>
                                <label className='txt-value1'>12/09/2023</label>
                            </div>
                        </div>
                    </div>

                    <div className='common-btn-submit-countener'>
                        <div className='common-btn-submit'>
                            <button className='common-btn-submit-button'>Make Payment</button>
                            <IcnRight width={10} height={10} />
                        </div>
                    </div>

                </div>

                <div className='myBookStore-inner-main-container'>
                    <label className='myPayments-inner-main-container-txt'>My Bookstore</label>
                    <div className='announcements-line-container' />
                    <div className='commonboxLine'>
                        <label className='txt-value2'>To access the online bookstore please click the link below.</label>
                    </div>
                </div>

            </div>

            <div className='myResources-main-container'>

                <div className='my-campus-inner-main-container'>
                    <label className='my-campus-inner-main-container-txt'>My Campus</label>
                    <div className='announcements-line-container' />

                    <div className='commonboxLineSecond'>
                        <label className='txt-value3'>ONL- Miller-Motte Online Programs (CHAT)</label>

                        <div className='my-campus-row'>
                            <img className='item-image' src={imageMapPin} />
                            <label className='txt-value4'>6397 Lee Highway #100, Chattanooga, TN 37421</label>
                        </div>

                        <div className='my-campus-row-inner'>
                            <div className='my-campus-row'>
                                <img className='item-image' src={imagePhone} />
                                <label className='txt-value4'>(423)510-9675</label>
                            </div>
                            <div className='my-campus-row'>
                                <img className='item-image' src={imageClock} />
                                <label className='txt-value4'>00 : 00</label>
                            </div>
                        </div>
                    </div>

                    <label className='txt-value5'>Admission Rep:</label>
                    <label className='txt-value6'>Hector Morales-Gonzalez</label>
                    <div className='my-campus-mobile'>
                        <img className='item-image-second' src={imageEmail} />
                        <label className='txt-value7'>Hector.Morales@miller-motte.edu</label>
                    </div>

                </div>

                <div className='my-campus-inner-main-container'>
                    <label className='my-campus-inner-main-container-txt'>Tech Support</label>
                    <div className='announcements-line-container' />

                    <div className='commonboxLineSecond'>
                        <div className='my-campus-row'>
                            <img className='item-image' src={imagePhone} />
                            <label className='txt-value8'>855-335-8248</label>
                        </div>

                        <div className='my-campus-row'>
                            <img className='item-image' src={imageMapPin} />
                            <label className='txt-value4'>Monday - Friday: 8:00am - 12am EST Saturday - Sunday: 9:00am - 6:00pm EST</label>
                        </div>
                    </div>

                    <div className='common-btn-submit-countener'>
                        <div className='common-btn-submit'>
                            <button className='common-btn-submit-button'>Submit a Support Ticket</button>
                            <IcnRight width={10} height={10} />
                        </div>
                    </div>


                </div>

                <div className='my-campus-inner-main-container'>
                    <label className='my-campus-inner-main-container-txt'>Paramount Student Loans</label>
                    <div className='announcements-line-container' />

                    <div className='commonboxLineSecond'>
                        <img className='item-image-therd' src={imageParamoutCapitalGroup} />
                        <label className='txt-value2'>To access Paramount Student Loans please click the link below. For information on how to use Paramount Student Loans, click HERE.</label>
                    </div>

                    <div className='common-btn-submit-countener'>
                        <div className='common-btn-submit'>
                            <button className='common-btn-submit-button'>Access Paramount</button>
                            <IcnRight width={10} height={10} />
                        </div>
                    </div>


                </div>

            </div>

            <div className='mySurvey-main-contact-form'>

                {/* --------------------------------------My Survey-------------------------------------------- */}
                <div className='mySurvey-left-contact-form'>
                    <div className='mySurvey-main-container'>
                        <label className='mySurvey-main-container-label'>My Survey</label>
                        <div className='announcements-line-container' />

                        <div className='mySurvey-list-title-container'>
                            <label className='mySurvey-list-title-container-label1'>Survey</label>
                            <label className='mySurvey-list-title-container-label2'>Survey Description</label>
                        </div>

                        {surveyData.map((user) => (
                            <div className='mySurvey-list-container'>
                                <label className='mySurvey-list-container-label1'>{user.title}</label>
                                <label className='mySurvey-list-container-label2'>{user.name}</label>
                                <div className='item-image-container'>
                                    <img src={imageEye} />
                                </div>
                            </div>

                            // <div className="user">{user.name}</div>
                        ))}


                    </div>
                </div>

                <div className='mySurvey-right-contact-form'>
                    <div className='mySurvey-main-container'>
                        <label className='mySurvey-main-container-label'>Driver Profile</label>
                        <div className='announcements-line-container' />

                        <label className='mySurvey-list-container-label3'>
                            We've partnered with CDLcom to give you access to important driver resources. With CDL.com you can find the job you are looking for with top companies across the U.S. and create a driver profile to let them help you find your next job.
                        </label>
                        <label className='mySurvey-list-container-label4'>
                            Driver profile benefits include:
                        </label>

                        <label className='mySurvey-list-container-label5'>
                            - Access to recruiters hiring across the U.S.
                        </label>
                        <label className='mySurvey-list-container-label5'>
                            - Apply to more than one job with one click
                        </label>
                        <label className='mySurvey-list-container-label5'>
                            - Easily apply for jobs on your mobile device
                        </label>
                    </div>
                </div>

            </div>

            <div className='btn-submit'>
                <button className='common-btn-submit-button'>Copyright © 2023 ANCORA. All rights reserved.</button>
            </div>

        </div >
    )
}

export default Dashboard

