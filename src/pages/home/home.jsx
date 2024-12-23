import React from 'react'
import Container from '../../components/container/Container'
import Button from '../../components/button/Button'
import './home.scss'
import stat from '../../assets/landing/stats.png'

// fins

import fin1 from '../../assets/fin/1.png'
import fin2 from '../../assets/fin/2.png'
import fin3 from '../../assets/fin/3.png'
import fin4 from '../../assets/fin/4.png'
import fin5 from '../../assets/fin/5.png'
import Newsroom from '../../components/newsroom/newsroom'
import Footer from '../../components/footer/footerArea'
import { ArrowRight } from 'iconoir-react'
import Budget from '../../components/budget/budget'

export default function Home() {
  return (
    <div className="home">

        <div className="tippytoe">

            <div className="lines line_a"></div>
            <div className="lines line_b"></div>
            <div className="lines line_c"></div>
            <div className="lines line_d"></div>
            <div className="lines line_e"></div>
            <div className="lines line_f"></div>

            <Container>

                <div className="landing__area">

                    <div className="text__part">

                        {/* <span className='toptap' >Ministry of Economic,Planning and Budget</span> */}

                        <h1>Building a Resilient Lagos through <span>Data-Driven Planning</span> and Effective <span>Budgeting</span></h1>
                        
                        <p>Empowering Lagos with strategic insights and responsible budgeting to ensure sustainable growth and economic resilience.</p>

                        {/* <div className="button__mobile">Explore Mepb</div> */}

                        <Button content="explore mepb" styles = {{backgroundColor : "#90ee90", color : "#131313"}} type = 'button__main' arrow = {true} arrow__type='down' to = "#quickdocs" />

                    </div>

                </div>

            </Container>

        </div>

        <Container>

            <div className="budgetting flex">

                <div className="budget__card">

                    <div className="tiny">2024 Budget Size</div>
                    <p>N2.267tn</p>
                    
                </div>

                <div className="divider"></div>

                <div className="budget__card">

                    <div className="tiny">2024 Recurrent Expenditure</div>
                    <p>N952.4bn</p>
                    
                </div>

                <div className="divider"></div>

                <div className="budget__card">

                    <div className="tiny"> 2024 Capital Expenditure</div>
                    <p>N1.332tn</p>
                    
                </div>

                <div className="divider"></div>

                <div className="budget__card">

                    <div className="tiny">2024 IGR</div>
                    <p>N1.251tn</p>
                    
                </div>
                

            </div>

            <div className="quickLinksPoint" id='quickdocs'>

                <div className="pointB">

                    <div className="topic">

                        Access Lagos State Budgets, Statistics, and Development Plans.

                        <div className="sub">
                            Empowering informed decisions with accessible data, budget transparency, and strategic planning for Lagos.
                        </div>

                        <Button content  = 'Discover More' type = 'button__main' arrow = {true} arrow__type='down' to = "#budget" />

                    </div>

                    <div className="pointA">

                        <div className="docs">

                            <a href="#">Lagos state audited statement report (financial statement) document for the year 2018</a>

                            <a href="#">Lagos state audited statement report (financial statement) document for the year 2018</a>

                            <a href="#">Lagos state audited statement report (financial statement) document for the year 2018</a>

                            <a href="#">Lagos state audited statement report (financial statement) document for the year 2018</a>

                            <a href="#">Lagos state audited statement report (financial statement) document for the year 2018</a>

                            <a href="#">Lagos state audited statement report (financial statement) document for the year 2018</a>

                            <a href="#">Lagos state audited statement report (financial statement) document for the year 2018</a>

                            <a href="#">Lagos state audited statement report (financial statement) document for the year 2018</a>

                        </div>

                    </div>

                </div>
                
            </div>

            <div className="title-cy" id='budget'>Budget Documents</div>

            <Budget/>
            
        </Container>

        <div className="news">

          <Newsroom/>

        </div>

        {/* <div className="news-flat">

            <Container>

                <Newsroom/>

            </Container>
            
        </div> */}

        <Footer/>

    </div>
  )
}
