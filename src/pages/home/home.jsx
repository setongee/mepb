import React from 'react'
import Container from '../../components/container/Container'
import Button from '../../components/button/Button'
import './home.scss'
import stat from '../../assets/landing/stats.png'

// pdf

import CB_2024 from "../../pages/budget/budgetDocs/pdf/cb/Y2024-CITIZENS-BUDGET.pdf"
import AB_2024 from "../../pages/budget/budgetDocs/pdf/aab/Y-2024-Appropriation-law-in-Published-NCoA-format.pdf"
import FIN_2023 from "../../pages/budget/budgetDocs/pdf/afs/YEAR-2023-FINANCIAL-STATEMENT.pdf"
import QBPR_Q3 from "../../pages/budget/budgetDocs/pdf/qbpr/Y2023-Q3-Lagos-State-Budget-Performance-Report.pdf"
import QBPR_Q2 from "../../pages/budget/budgetDocs/pdf/qbpr/Lagos_State_2024_Q2_BPR_Publication.pdf"
import QBPR_Q1 from "../../pages/budget/budgetDocs/pdf/qbpr/Lagos State 2024 Q1 BPR.pdf"
import FIN_2022 from "../../pages/budget/budgetDocs/pdf/afs/2022-LASG-IPSAS-FINANCIAL-STATEMENTS-2021.pdf"
import AB_2023 from "../../pages/budget/budgetDocs/pdf/aab/APPROPRIATION LAW 2023  (LSPC)  Signed.pdf"



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

                            <a href={CB_2024} download > Y2024 Lagos State Approved Citizen's Budget </a>

                            <a href={AB_2024} download > Y2024 Lagos State Signed Appropriation Bill </a>

                            <a href={FIN_2023} download > Y2023 Lagos State Audited Financial Statement</a>

                            <a href={QBPR_Q3} download > Y2024 Lagos State Quarterly Budget Performance Review (Q3) </a>

                            <a href={QBPR_Q2} download > Y2024 Lagos State Quarterly Budget Performance Review (Q2) </a>

                            <a href={QBPR_Q1} download > Y2024 Lagos State Quarterly Budget Performance Review (Q1) </a>

                            <a href={FIN_2022} download > Y2022 Lagos State Audited FInancial Statement</a>

                            <a href={AB_2023} download > Y2023 Lagos State Signed Appropriation Bill </a>

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
