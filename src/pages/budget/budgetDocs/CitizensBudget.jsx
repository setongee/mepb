import React from 'react'

//essentials

import { ArrowSeparate, ArrowSeparateVertical, Download, DownloadCircle, ArrowLeft } from 'iconoir-react'
import Container from '../../../components/container/Container'
import Footer from '../../../components/footer/footerArea'
import './budget.scss'
import pdf from '../budgetDocs/pdff.png'

//pdfs
import cb_1 from './pdf/cb/Y2024-CITIZENS-BUDGET.pdf'
import cb_3 from './pdf/cb/Citizens-Budget-v2.pdf'
import cb_4 from './pdf/cb/LAGCTBNEW.pdf'
import cb_5 from './pdf/cb/Citizens-Accountability-Report-CAR-Updated.pdf'
import cb_6 from './pdf/cb/CITIZENS-ACCOUNTABILITY-REPORT-2020-BUDGET-Lagos-State_3.pdf'
import { useNavigate } from 'react-router-dom'


export default function CitizensBudget() {

  let navigate = useNavigate();

  return (

    <div className="resources">
           
        <Container>

            <div className="arrowBack" onClick={ () => navigate(-1) } > <ArrowLeft/> </div>

            {/* Page Title */}

            <div className="pageTitle rentFree"> Citizen's Budget </div>

            {/* Table Headers */}

            <div className="vault">

                <div className="doc doc__top">
                    <div className="doc__title flex gap__20"># Resource Title  <ArrowSeparateVertical/> </div>
                    <div className="doc__category flex gap__20">Category <ArrowSeparateVertical/></div>
                    <div className="doc__date flex gap__20">Last Updated <ArrowSeparateVertical/></div>
                    <div className="doc__action">Action</div>
                </div>

                {/* Document Body Files */}

                <a href = {cb_1} download className="doc doc__body">
                    <div className="doc__title flex gap__10">
                        
                        <div className="doc__icon"><img src={pdf} alt="" /></div>
                        
                        Y2024-CITIZENS-BUDGET

                    </div>
                    <div className="doc__category"> Budget Documents </div>
                    <div className="doc__date"> 31st December 2023 </div>
                    <div className="doc__action"> <div className="form__button flex"> <DownloadCircle/> Download </div> </div>
                </a>

                <a href = {cb_3} download className="doc doc__body">
                    <div className="doc__title flex gap__10">
                        
                        <div className="doc__icon"><img src={pdf} alt="" /></div>
                        
                        Y2021-Citizens-Budget-v2
                    
                    </div>
                    <div className="doc__category"> Budget Documents </div>
                    <div className="doc__date"> 31st December 2023 </div>
                    <div className="doc__action"> <div className="form__button flex"> <DownloadCircle/> Download </div> </div>
                </a>

                <a href = {cb_4} download className="doc doc__body">
                    <div className="doc__title flex gap__10">
                        
                        <div className="doc__icon"><img src={pdf} alt="" /></div>
                        
                        2021_LAGCTBNEW
                    
                    </div>
                    <div className="doc__category"> Budget Documents </div>
                    <div className="doc__date"> 31st December 2023 </div>
                    <div className="doc__action"> <div className="form__button flex"> <DownloadCircle/> Download </div> </div>
                </a>

                <a href = {cb_5} download className="doc doc__body">
                    <div className="doc__title flex gap__10">
                        
                        <div className="doc__icon"><img src={pdf} alt="" /></div>
                        
                        Citizens-Accountability-Report-2020
                    
                    </div>
                    <div className="doc__category"> Budget Documents </div>
                    <div className="doc__date"> 31st December 2023 </div>
                    <div className="doc__action"> <div className="form__button flex"> <DownloadCircle/> Download </div> </div>
                </a>

                <a href = {cb_6} download className="doc doc__body">
                    <div className="doc__title flex gap__10">
                        
                        <div className="doc__icon"><img src={pdf} alt="" /></div>
                        
                        CITIZENS-ACCOUNTABILITY-REPORT-2020-BUDGET-Lagos-State
                    
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
