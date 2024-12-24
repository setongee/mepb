import React from 'react'

//essentials

import { ArrowLeft, ArrowSeparate, ArrowSeparateVertical, Download, DownloadCircle } from 'iconoir-react'
import Container from '../../../components/container/Container'
import Footer from '../../../components/footer/footerArea'
import './budget.scss'
import pdf from '../budgetDocs/pdff.png'

//pdfs
import aab_1 from './pdf/aab/Y-2024-Appropriation-law-in-Published-NCoA-format.pdf'
import aab_2 from './pdf/aab/APPROPRIATION LAW 2023  (LSPC)  Signed.pdf'
import aab_3 from './pdf/aab/Y2022-Signed-Appropriation-Law.pdf'
import aab_4 from './pdf/aab/signed-2021-appropriation-bill.pdf'
import { useNavigate } from 'react-router-dom'



export default function AnnuaBudgetBill() {

  let navigate = useNavigate();

  return (

    <div className="resources">
       
        <Container>

            <div className="arrowBack" onClick={ () => navigate(-1) } > <ArrowLeft/> </div>

            {/* Page Title */}

            <div className="pageTitle rentFree"> Annual Budget Appropiation Bill </div>

            {/* Table Headers */}

            <div className="vault">

                <div className="doc doc__top">
                    <div className="doc__title flex gap__20"># Resource Title  <ArrowSeparateVertical/> </div>
                    <div className="doc__category flex gap__20">Category <ArrowSeparateVertical/></div>
                    <div className="doc__date flex gap__20">Last Updated <ArrowSeparateVertical/></div>
                    <div className="doc__action">Action</div>
                </div>

                {/* Document Body Files */}

                <a href = {aab_1} download className="doc doc__body">
                    <div className="doc__title flex gap__10">
                        
                        <div className="doc__icon"><img src={pdf} alt="" /></div>
                        
                        2024 Appropriation Bill NCoA-Format
                    
                    </div>
                    <div className="doc__category"> Budget Documents </div>
                    <div className="doc__date"> 31st December 2023 </div>
                    <div className="doc__action"> <div className="form__button flex"> <DownloadCircle/> Download </div> </div>
                </a>

                <a href = {aab_2} download className="doc doc__body">
                    <div className="doc__title flex gap__10">
                        
                        <div className="doc__icon"><img src={pdf} alt="" /></div>
                        
                        2023 Appropriation Bill
                    
                    </div>
                    <div className="doc__category"> Budget Documents </div>
                    <div className="doc__date"> 31st December 2023 </div>
                    <div className="doc__action"> <div className="form__button flex"> <DownloadCircle/> Download </div> </div>
                </a>

                <a href = {aab_3} download className="doc doc__body">
                    <div className="doc__title flex gap__10">
                        
                        <div className="doc__icon"><img src={pdf} alt="" /></div>
                        
                        2022 Appropriation Bill
                    
                    </div>
                    <div className="doc__category"> Budget Documents </div>
                    <div className="doc__date"> 31st December 2023 </div>
                    <div className="doc__action"> <div className="form__button flex"> <DownloadCircle/> Download </div> </div>
                </a>

                <a href = {aab_4} download className="doc doc__body">
                    <div className="doc__title flex gap__10">
                        
                        <div className="doc__icon"><img src={pdf} alt="" /></div>
                        
                         Signed 2021 Appropriation Bill
                    
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
