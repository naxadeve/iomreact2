import React, { Component } from 'react';
import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer';
import Openspace from '../Home/OpenSpace'
import { Row, Col, Tab, Nav } from 'react-bootstrap'

import one from '../../img/1.png'
import two from '../../img/2.png'
import three from '../../img/3.png'
import four from '../../img/4.png'
import five from '../../img/5.png'
import bannerShape from '../../img/banner-shape.png'

export default class About extends Component {
    render() {
        return (
            <>
                <Navbar />
                <div class="breadcrumb">
                    <div class="container">
                        <h1>About</h1>
                        <p>Open Spaces Mapping for Humanitarian Purposes</p>

                    </div>
                </div>
                <main class="main-content">
                    <Openspace />
                    {/* <section class="video-section ptb-150">
                <div class="container">
                    <div class="video" style="background:url(images/video.jpg)">
                        <div class="overlay"></div>
                        <a class="material-icons" href="">play_circle_filled</a>
                    </div>
                </div>
            </section> */}
                    <section class="about-section about-video">
                        <div class="container">
                            <div class="title">
                                <h3 class="openspace-title">Why map open spaces ?</h3>
                                <p>There is vital importance of open space areas that can be utilized as safe and secure housing
                                    and for relief distribution during and after disastrous events. The identified open spaces
                            can be used not only during disaster but for other humanitarian purposes as well.</p>
                            </div>
                            <div class="row">
                                <div class="col-lg-4 col-md-6">
                                    <div class="about-item">
                                        <figure>
                                            <img src={one} alt="" />
                                        </figure>
                                        <h4>Safe and secure place that can be used during disaster</h4>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="about-item">
                                        <figure>
                                            <img src={two} alt="" />
                                        </figure>
                                        <h4>Temporary shelter for people affected by disaster</h4>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="about-item">
                                        <figure>
                                            <img src={three} alt="" />
                                        </figure>
                                        <h4>Logistic Hub for retaliation against disaster</h4>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="about-item">
                                        <figure>
                                            <img src={four} alt="" />
                                        </figure>
                                        <h4>Relief distribution and necessary coordination</h4>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="about-item">
                                        <figure>
                                            <img src={five} alt="" />
                                        </figure>
                                        <h4>Cultural and entertainment programs</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="tab-section">
                        <div className="container">
                            <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
                                <div class="title">
                                    <h3 class="openspace-title">Open Spaces Selection Criteria</h3>
                                    <p>Open spaces for humanitarian purposes are selected in consultation with a multitude of
                                        stakeholders including local communities, humanitarian agencies, local disaster risk
                                        management committees, ward presidents, security forces among others. Open spaces failing to
                                        meet the below criteria may cause further distress to the disaster affected and displaced
                                        population. Identification of flat and large open spaces in the hilly terrain of Nepal is
                                        itself a challenge however, the following criteria are considered for identifying open
                                        spaces for humanitarian purposes and providing refuge to displaced population.
                        </p>
                                </div>
                                <div class="about-tab">
                                <div class="row">
                                    <Row>
                            <div class="col-md-4">
                                <ul class="tab-list">
                                        {/* <Col sm={3}> */}
                                            <Nav variant="pills" className="flex-column">
                                                <li>
                                                <Nav.Item>
                                                <Nav.Link eventKey="first"><small>1</small><span>Accessibility </span></Nav.Link>
                                                </Nav.Item>
                                                </li>
                                                <li>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="second"><small>2</small><span>Security </span></Nav.Link>
                                                </Nav.Item>
                                                </li>
                                                <li>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="third"><small>3</small><span>Access to resources and water </span></Nav.Link>
                                                </Nav.Item></li>
                                                <li>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="fourth"><small>4</small><span>Land availability and topography </span></Nav.Link>
                                                </Nav.Item>
                                                </li>
                                                {/* <Nav.Item>
                                                    <Nav.Link eventKey="second"><small>5</small><span>Environmental Concerns </span></Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="second"><small>6</small><span>Size </span></Nav.Link>
                                                </Nav.Item> */}
                                            </Nav>
                                          
                                        {/* </Col> */}
                                        </ul>
                                        </div>
                                        <div class="col-md-8">
                                        {/* <Col sm={9}> */}
                                        <div class="about-tab-content">
                                            <Tab.Content>
                                                <Tab.Pane eventKey="first">
                                                    <ul>
                                                        <li>
                                                            Accessibility is a critical factor for open space identification. Many open areas have restricted road access which impacts on the establishment of the camps, movement of IDP to the camps, food supply and other camp necessities.</li>
                                                        <li> Open spaces should be easily accessible in all seasons.  </li>
                                                        <li>
                                                            The mobility of the displaced population, supply of goods/ services, access to critical services in the surroundings –hospital, market, school among others are ensured while selecting an open space. </li>
                                                        <li>Access to livelihoods is considered for open spaces identification. </li>
                                                    </ul>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="second">

                                                    <ul>
                                                        <li>
                                                            Security is likely to be a key issue in high density camp.  Existing security features are explained as these will assist with open space identification and camp management.</li>
                                                        <li> Natural and man-made hazards. Example: Existence of industrial areas in the proximities of the open spaces are avoided.  </li>
                                                        <li>
                                                            Extreme climatic conditions. Example: Open spaces at risk of flooding, high winds or landslides are avoided. Similarly, open spaces with high intensity electric wires are also avoided.   </li>
                                                        <li>Environmental and health conditions. Example: Health risk typical for the open spaces are assessed example- malaria zones and cholera risk areas are avoided. </li>
                                                        <li> There should be evacuation routes.</li>
                                                    </ul>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="third">

                                                    <ul>
                                                        <li>
                                                            Availability of water is an important aspect that needs to be considered for selecting open spaces. </li>
                                                        <li> Water needs to be available in sufficient quantity in all seasons, taking into consideration the level of water during the dry season, as well as the basic needs of the displaced population (calculated as 7.5-15 litres per person per day).   </li>


                                                    </ul>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="fourth">

                                                    <ul>
                                                        <li>
                                                            According to the Sphere standard, the minimum surface area is 30- 45 sq. meters per person.  </li>
                                                      <li>The possibility of expansion is also considered.</li>  
                                                      <li>    A gentle terrain slope of 1-5 degrees is considered.</li>  
                                                      <li>   Open spaces that could become marshy and water logged during rainy reason should be avoided.</li>  
                                                      <li>  Open spaces that are excessively rocky should be avoided as they hamper toilet or camp construction.</li>  
                                         
                                         
</ul>
                                                </Tab.Pane>
     
                                            </Tab.Content>
                                            </div>
                                        {/* </Col> */}
                                        </div>
                                    </Row>
                                    </div>
                                </div>
                            </Tab.Container>
                        </div>
                    </section>

                    {/* <section class="tab-section">
                <div class="container">
                    <div class="title">
                        <h3 class="openspace-title">Open Spaces Selection Criteria</h3>
                        <p>Open spaces for humanitarian purposes are selected in consultation with a multitude of
                            stakeholders including local communities, humanitarian agencies, local disaster risk
                            management committees, ward presidents, security forces among others. Open spaces failing to
                            meet the below criteria may cause further distress to the disaster affected and displaced
                            population. Identification of flat and large open spaces in the hilly terrain of Nepal is
                            itself a challenge however, the following criteria are considered for identifying open
                            spaces for humanitarian purposes and providing refuge to displaced population.
                        </p>
                    </div>
                    <div class="about-tab">
                        <div class="row">
                            <div class="col-md-4">
                                <ul class="tab-list">
                                    <li class="active">
                                        <a href="#"><small>1</small><span>Accessibility </span></a>
                                    </li>
                                    <li>
                                        <a href="#"><small>2</small><span>Security </span></a>
                                    </li>
                                    <li>
                                        <a href="#"><small>3</small><span>Access to resources and water </span></a>
                                    </li>
                                    <li>
                                        <a href="#"><small>4</small><span>Land availability and topography </span></a>
                                    </li>
                                    <li>
                                        <a href="#"><small>5</small><span>Environmental Concerns </span></a>
                                    </li>
                                    <li>
                                        <a href="#"><small>5</small><span>Size </span></a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-8">
                                <div class="about-tab-content">
                                    <p>Security is likely to be a key issue in high density camp. Existing security
                                        features are explained as these will assist with open space identification and
                                        camp management.</p>
                                    <ul>
                                        <li>Accessibility is a critical factor for open space identification. Many open
                                            areas have restricted road access which impacts on the establishment of the
                                            camps, movement of IDP to the camps, food supply and other camp necessities
                                        </li>
                                        <li>Extreme climatic conditions. Example: Open spaces at risk of flooding, high
                                            winds or landslides are avoided. Similarly, open spaces with high intensity
                                            electric wires are also avoided. 
                                        </li>
                                        <li>Environmental and health conditions. Example: Health risk typical for the open spaces are assessed example- malaria zones and cholera risk areas are avoided. </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
                </main>
                <footer
                    className="site-footer pt-150"
                    style={{ backgroundImage: `url(${bannerShape})` }}
                >
                    <Footer />
                </footer>
            </>
        )
    }
}