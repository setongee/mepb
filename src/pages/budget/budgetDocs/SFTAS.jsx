import React from 'react'

//essentials

import { ArrowLeft, ArrowSeparate, ArrowSeparateVertical, Download, DownloadCircle } from 'iconoir-react'
import Container from '../../../components/container/Container'
import Footer from '../../../components/footer/footerArea'
import './budget.scss'
import pdf from '../budgetDocs/pdff.png'

//pdf

import sftas_1 from './pdf/sftas/280921-2020-Revenue-and-Expenditure.pdf'
import sftas_2 from './pdf/sftas/3RD-QUARTER-FOR-Y2020.pdf'
import sftas_3 from './pdf/sftas/Lagos-State-BPR-Q2-2021-1.pdf'
import sftas_4 from './pdf/sftas/Lagos-State-Government-Q2-Y2022-BPR-SFTAS-July-27th-2022-.pdf'
import sftas_5 from './pdf/sftas/Lagos-State-Government-Q2-Y2022-BPR-SFTAS-Oct-28th-2022-.pdf'
import sftas_6 from './pdf/sftas/Lagos-State-Government-Q4-BPR-SFTAS-Jan-28th-2022.pdf'
import sftas_7 from './pdf/sftas/Lagos-State-Government-Q4-Y2022-BPR-SFTAS-Jan-28th-2023-9.50.pdf'
import sftas_8 from './pdf/sftas/LASG_QBPR-Q3_2020.pdf'
import sftas_9 from './pdf/sftas/LASG_QBPR-Q4_2020.pdf'
import sftas_10 from './pdf/sftas/Q1-2020-Budget-Performance-Report.pdf'
import sftas_11 from './pdf/sftas/Q4-2020-BPR.pdf'
import sftas_12 from './pdf/sftas/SIGNED-APPROPRIATION-LAW-2023-IN-NCoA-FORMAT-LSPC-.pdf'
import sftas_13 from './pdf/sftas/Y2022-Signed-Appropriation-Law-pages-1-4-merged-pages.pdf'
import { useNavigate } from 'react-router-dom'


export default function SFTAS() {

  let navigate = useNavigate();

  return (

    <div className="resources">
       
        <Container>
            
            <div className="arrowBack" onClick={ () => navigate(-1) } > <ArrowLeft/> </div>

            {/* Page Title */}

            <div className="pageTitle rentFree"> States Fiscal Transparency, Accountability, and Sustainability  </div>

            {/* Table Headers */}

            <div className="vault">

                <div className="doc doc__top">
                    <div className="doc__title flex gap__20"># Resource Title  <ArrowSeparateVertical/> </div>
                    <div className="doc__category flex gap__20">Category <ArrowSeparateVertical/></div>
                    <div className="doc__date flex gap__20">Last Updated <ArrowSeparateVertical/></div>
                    <div className="doc__action">Action</div>
                </div>

                {/* Document Body Files */}

                <a href = {sftas_1} download className="doc doc__body">
                    <div className="doc__title flex gap__10">
                        
                        <div className="doc__icon"><img src={pdf} alt="" /></div>
                        
                        2020-Revenue-and-Expenditure
                    
                    </div>
                    <div className="doc__category"> Budget Documents </div>
                    <div className="doc__date"> 31st December 2023 </div>
                    <div className="doc__action"> <div className="form__button flex"> <DownloadCircle/> Download </div> </div>
                </a>

                <a href = {sftas_2} download className="doc doc__body">
                    <div className="doc__title flex gap__10">
                        
                        <div className="doc__icon"><img src={pdf} alt="" /></div>
                        
                        3RD-QUARTER-FOR-Y2020-QBPR
                    
                    </div>
                    <div className="doc__category"> Budget Documents </div>
                    <div className="doc__date"> 31st December 2023 </div>
                    <div className="doc__action"> <div className="form__button flex"> <DownloadCircle/> Download </div> </div>
                </a>

                <a href = {sftas_3} download className="doc doc__body">
                    <div className="doc__title flex gap__10">
                        
                        <div className="doc__icon"><img src={pdf} alt="" /></div>
                        
                        Lagos-State-BPR-Q2-2021
                    
                    </div>
                    <div className="doc__category"> Budget Documents </div>
                    <div className="doc__date"> 31st December 2023 </div>
                    <div className="doc__action"> <div className="form__button flex"> <DownloadCircle/> Download </div> </div>
                </a>

                <a href = {sftas_4} download className="doc doc__body">
                    <div className="doc__title flex gap__10">
                        
                        <div className="doc__icon"><img src={pdf} alt="" /></div>
                        
                        Lagos-State-Government-Q2-Y2022-BPR-SFTAS-July-27th-2022
                    
                    </div>
                    <div className="doc__category"> Budget Documents </div>
                    <div className="doc__date"> 31st December 2023 </div>
                    <div className="doc__action"> <div className="form__button flex"> <DownloadCircle/> Download </div> </div>
                </a>

                <a href = {sftas_5} download className="doc doc__body">
                    <div className="doc__title flex gap__10">
                        
                        <div className="doc__icon"><img src={pdf} alt="" /></div>
                        
                        Lagos-State-Government-Q2-Y2022-BPR-SFTAS-Oct-28th-2022
                    
                    </div>
                    <div className="doc__category"> Budget Documents </div>
                    <div className="doc__date"> 31st December 2023 </div>
                    <div className="doc__action"> <div className="form__button flex"> <DownloadCircle/> Download </div> </div>
                </a>

                <a href = {sftas_6} download className="doc doc__body">
                    <div className="doc__title flex gap__10">
                        
                        <div className="doc__icon"><img src={pdf} alt="" /></div>
                        
                        Lagos-State-Government-Q4-BPR-SFTAS-Jan-28th-2022
                    
                    </div>
                    <div className="doc__category"> Budget Documents </div>
                    <div className="doc__date"> 31st December 2023 </div>
                    <div className="doc__action"> <div className="form__button flex"> <DownloadCircle/> Download </div> </div>
                </a>

                <a href = {sftas_7} download className="doc doc__body">
                    <div className="doc__title flex gap__10">
                        
                        <div className="doc__icon"><img src={pdf} alt="" /></div>
                        
                        Lagos-State-Government-Q4-Y2022-BPR-SFTAS
                    
                    </div>
                    <div className="doc__category"> Budget Documents </div>
                    <div className="doc__date"> 31st December 2023 </div>
                    <div className="doc__action"> <div className="form__button flex"> <DownloadCircle/> Download </div> </div>
                </a>

                <a href = {sftas_8} download className="doc doc__body">
                    <div className="doc__title flex gap__10">
                        
                        <div className="doc__icon"><img src={pdf} alt="" /></div>
                        
                        LASG_QBPR-Q3_2020
                    
                    </div>
                    <div className="doc__category"> Budget Documents </div>
                    <div className="doc__date"> 31st December 2023 </div>
                    <div className="doc__action"> <div className="form__button flex"> <DownloadCircle/> Download </div> </div>
                </a>

                <a href = {sftas_9} download className="doc doc__body">
                    <div className="doc__title flex gap__10">
                        
                        <div className="doc__icon"><img src={pdf} alt="" /></div>
                        
                        LASG_QBPR-Q4_2020
                    
                    </div>
                    <div className="doc__category"> Budget Documents </div>
                    <div className="doc__date"> 31st December 2023 </div>
                    <div className="doc__action"> <div className="form__button flex"> <DownloadCircle/> Download </div> </div>
                </a>

                <a href = {sftas_10} download className="doc doc__body">
                    <div className="doc__title flex gap__10">
                        
                        <div className="doc__icon"><img src={pdf} alt="" /></div>
                        
                        Q1-2020-Budget-Performance-Report
                    
                    </div>
                    <div className="doc__category"> Budget Documents </div>
                    <div className="doc__date"> 31st December 2023 </div>
                    <div className="doc__action"> <div className="form__button flex"> <DownloadCircle/> Download </div> </div>
                </a>

                <a href = {sftas_11} download className="doc doc__body">
                    <div className="doc__title flex gap__10">
                        
                        <div className="doc__icon"><img src={pdf} alt="" /></div>
                        
                        Q4-2020-BPR
                    
                    </div>
                    <div className="doc__category"> Budget Documents </div>
                    <div className="doc__date"> 31st December 2023 </div>
                    <div className="doc__action"> <div className="form__button flex"> <DownloadCircle/> Download </div> </div>
                </a>

                <a href = {sftas_12} download className="doc doc__body">
                    <div className="doc__title flex gap__10">
                        
                        <div className="doc__icon"><img src={pdf} alt="" /></div>
                        
                        SIGNED-APPROPRIATION-LAW-2023-IN-NCoA-FORMAT
                    
                    </div>
                    <div className="doc__category"> Budget Documents </div>
                    <div className="doc__date"> 31st December 2023 </div>
                    <div className="doc__action"> <div className="form__button flex"> <DownloadCircle/> Download </div> </div>
                </a>

                <a href = {sftas_13} download className="doc doc__body">
                    <div className="doc__title flex gap__10">
                        
                        <div className="doc__icon"><img src={pdf} alt="" /></div>
                        
                        Y2022-Signed-Appropriation-Law
                    
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
