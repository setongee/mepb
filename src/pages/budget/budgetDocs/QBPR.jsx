import React from 'react'

//essentials

import { ArrowSeparate, ArrowSeparateVertical, Download, DownloadCircle, ArrowLeft } from 'iconoir-react'
import Container from '../../../components/container/Container'
import Footer from '../../../components/footer/footerArea'
import './budget.scss'
import pdf from '../budgetDocs/pdff.png'

//pdfs
import qbpr_1 from './pdf/qbpr/Lagos-State-BPR-Q3-P1.pdf'
import qbpr_2 from './pdf/qbpr/Lagos_State_2024_Q2_BPR_Publication.pdf'
import qbpr_3 from './pdf/qbpr/Lagos State 2024 Q1 BPR.pdf'
import qbpr_4 from './pdf/qbpr/BPR4-LAGOS-STATE-GOVERNMENT-Q4-270124-CR-fm.pdf'
import qbpr_5 from './pdf/qbpr/Y2023-Q3-Lagos-State-Budget-Performance-Report.pdf'
import qbpr_6 from './pdf/qbpr/Y2023-BUDGET-PERFORMANCE-REPORT-Q2.pdf'
import qbpr_7 from './pdf/qbpr/LASG-Q1-2023-BPR.pdf'
import qbpr_10 from './pdf/qbpr/Lagos-State-Government-Q4-BPR-SFTAS-Jan-28th-2022.pdf'
import { useNavigate } from 'react-router-dom'

export default function QBPR() {

  let navigate = useNavigate();

  return (
    
    <div className="resources">
               
        <Container>

            <div className="arrowBack" onClick={ () => navigate(-1) } > <ArrowLeft/> </div>

            {/* Page Title */}

            <div className="pageTitle rentFree"> Quarterly Budget Performance Reviews </div>

            {/* Table Headers */}

            <div className="vault">

                <div className="doc doc__top">
                    <div className="doc__title flex gap__20"># Resource Title  <ArrowSeparateVertical/> </div>
                    <div className="doc__category flex gap__20">Category <ArrowSeparateVertical/></div>
                    <div className="doc__date flex gap__20">Last Updated <ArrowSeparateVertical/></div>
                    <div className="doc__action">Action</div>
                </div>

                {/* Document Body Files */}

                <a href = {qbpr_1} download className="doc doc__body">
                    <div className="doc__title flex gap__10">
                        
                        <div className="doc__icon"><img src={pdf} alt="" /></div>
                        
                        Lagos-State-BPR-Q3-2024
                    
                    </div>
                    <div className="doc__category"> Budget Documents </div>
                    <div className="doc__date"> 31st December 2023 </div>
                    <div className="doc__action"> <div className="form__button flex"> <DownloadCircle/> Download </div> </div>
                </a>

                <a href = {qbpr_2} download className="doc doc__body">
                    <div className="doc__title flex gap__10">
                        
                        <div className="doc__icon"><img src={pdf} alt="" /></div>
                        
                        Lagos_State_2024_Q2_BPR
                    
                    </div>
                    <div className="doc__category"> Budget Documents </div>
                    <div className="doc__date"> 31st December 2023 </div>
                    <div className="doc__action"> <div className="form__button flex"> <DownloadCircle/> Download </div> </div>
                </a>

                <a href = {qbpr_3} download className="doc doc__body">
                    <div className="doc__title flex gap__10">
                        
                        <div className="doc__icon"><img src={pdf} alt="" /></div>
                        
                        Lagos State 2024 Q1 BPR
                    
                    </div>
                    <div className="doc__category"> Budget Documents </div>
                    <div className="doc__date"> 31st December 2023 </div>
                    <div className="doc__action"> <div className="form__button flex"> <DownloadCircle/> Download </div> </div>
                </a>

                <a href = {qbpr_4} download className="doc doc__body">
                    <div className="doc__title flex gap__10">
                        
                        <div className="doc__icon"><img src={pdf} alt="" /></div>
                        
                        BPR4-LAGOS-STATE-GOVERNMENT-Q4-2023
                    
                    </div>
                    <div className="doc__category"> Budget Documents </div>
                    <div className="doc__date"> 31st December 2023 </div>
                    <div className="doc__action"> <div className="form__button flex"> <DownloadCircle/> Download </div> </div>
                </a>

                <a href = {qbpr_5} download className="doc doc__body">
                    <div className="doc__title flex gap__10">
                        
                        <div className="doc__icon"><img src={pdf} alt="" /></div>
                        
                        Y2023-Q3-Lagos-State-Budget-Performance-Report
                    
                    </div>
                    <div className="doc__category"> Budget Documents </div>
                    <div className="doc__date"> 31st December 2023 </div>
                    <div className="doc__action"> <div className="form__button flex"> <DownloadCircle/> Download </div> </div>
                </a>

                <a href = {qbpr_6} download className="doc doc__body">
                    <div className="doc__title flex gap__10">
                        
                        <div className="doc__icon"><img src={pdf} alt="" /></div>
                        
                        Y2023-BUDGET-PERFORMANCE-REPORT-Q2
                    
                    </div>
                    <div className="doc__category"> Budget Documents </div>
                    <div className="doc__date"> 31st December 2023 </div>
                    <div className="doc__action"> <div className="form__button flex"> <DownloadCircle/> Download </div> </div>
                </a>

                <a href = {qbpr_7} download className="doc doc__body">
                    <div className="doc__title flex gap__10">
                        
                        <div className="doc__icon"><img src={pdf} alt="" /></div>
                        
                        LASG-Q1-2023-BPR
                    
                    </div>
                    <div className="doc__category"> Budget Documents </div>
                    <div className="doc__date"> 31st December 2023 </div>
                    <div className="doc__action"> <div className="form__button flex"> <DownloadCircle/> Download </div> </div>
                </a>

                <a href = {qbpr_10} download className="doc doc__body">
                    <div className="doc__title flex gap__10">
                        
                        <div className="doc__icon"><img src={pdf} alt="" /></div>
                        
                        Lagos-State-Government-Q4-BPR-2022
                    
                    </div>
                    <div className="doc__category"> Budget Documents </div>
                    <div className="doc__date"> 31st December 2023 </div>
                    <div className="doc__action"> <div className="form__button flex"> <DownloadCircle/> Download </div> </div>
                </a>

                

            </div>

        </Container>

        <Footer/>
    
        </div>

  )
}
