import React from 'react'

//essentials

import { ArrowSeparate, ArrowSeparateVertical, Download, DownloadCircle, ArrowLeft } from 'iconoir-react'
import Container from '../../../components/container/Container'
import Footer from '../../../components/footer/footerArea'
import './budget.scss'
import pdf from '../budgetDocs/pdff.png'

//pdfs

import abl_1 from './pdf/abl/Y2024-Appropriation-Law.pdf'
import abl_2 from './pdf/abl/APPROPRIATION LAW 2023  (LSPC)  Signed.pdf'
import abl_3 from './pdf/abl/Y2022-Signed-Appropriation-Law.pdf'
import abl_4 from './pdf/abl/signed-2021-appropriation-bill.pdf'
import abl_5 from './pdf/abl/Lagos-State-Government-2021-Approved-Law-1.pdf'
import abl_6 from './pdf/abl/Appropriation-Law-in-Published-NCoA-Format-vs2-pages-1-75_80-IF_2.pdf'
import { useNavigate } from 'react-router-dom'


export default function AnnualBudgetLaw() {

  let navigate = useNavigate();

  return (

    <div className="resources">
           
      <Container>

        <div className="arrowBack" onClick={ () => navigate(-1) } > <ArrowLeft/> </div>

          {/* Page Title */}

          <div className="pageTitle rentFree"> Annual Budget Appropriation Law </div>

          {/* Table Headers */}

          <div className="vault">

              <div className="doc doc__top">
                  <div className="doc__title flex gap__20"># Resource Title  <ArrowSeparateVertical/> </div>
                  <div className="doc__category flex gap__20">Category <ArrowSeparateVertical/></div>
                  <div className="doc__date flex gap__20">Last Updated <ArrowSeparateVertical/></div>
                  <div className="doc__action">Action</div>
              </div>

              {/* Document Body Files */}

              <a href = {abl_1} download className="doc doc__body">
                  <div className="doc__title flex gap__10">
                      
                      <div className="doc__icon"><img src={pdf} alt="" /></div>
                      
                      {/* Name of file goes here */}

                      Y2024-Appropriation-Law
                  
                  </div>
                  <div className="doc__category"> Budget Documents </div>
                  <div className="doc__date"> 31st December 2023 </div>
                  <div className="doc__action"> <div className="form__button flex"> <DownloadCircle/> Download </div> </div>
              </a>

              <a href = {abl_2} download className="doc doc__body">
                  <div className="doc__title flex gap__10">
                      
                      <div className="doc__icon"><img src={pdf} alt="" /></div>
                      
                      {/* Name of file goes here */}
                      
                     Appropration Law 2023
                  
                  </div>
                  <div className="doc__category"> Budget Documents </div>
                  <div className="doc__date"> 31st December 2023 </div>
                  <div className="doc__action"> <div className="form__button flex"> <DownloadCircle/> Download </div> </div>
              </a>

              <a href = {abl_3} download className="doc doc__body">
                  <div className="doc__title flex gap__10">
                      
                      <div className="doc__icon"><img src={pdf} alt="" /></div>
                      
                      {/* Name of file goes here */}
                      
                      Y2022-Signed-Appropriation-Law
                  
                  </div>
                  <div className="doc__category"> Budget Documents </div>
                  <div className="doc__date"> 31st December 2023 </div>
                  <div className="doc__action"> <div className="form__button flex"> <DownloadCircle/> Download </div> </div>
              </a>

              <a href = {abl_4} download className="doc doc__body">
                  <div className="doc__title flex gap__10">
                      
                      <div className="doc__icon"><img src={pdf} alt="" /></div>
                      
                      {/* Name of file goes here */}
                      
                      Signed-2021-Appropriation-Bill
                  
                  </div>
                  <div className="doc__category"> Budget Documents </div>
                  <div className="doc__date"> 31st December 2023 </div>
                  <div className="doc__action"> <div className="form__button flex"> <DownloadCircle/> Download </div> </div>
              </a>

              <a href = {abl_5} download className="doc doc__body">
                  <div className="doc__title flex gap__10">
                      
                      <div className="doc__icon"><img src={pdf} alt="" /></div>
                      
                      {/* Name of file goes here */}
                      
                      Lagos-State-Government-2021-Approved-Appropriation-Law
                  
                  </div>
                  <div className="doc__category"> Budget Documents </div>
                  <div className="doc__date"> 31st December 2023 </div>
                  <div className="doc__action"> <div className="form__button flex"> <DownloadCircle/> Download </div> </div>
              </a>

              <a href = {abl_6} download className="doc doc__body">
                  <div className="doc__title flex gap__10">
                      
                      <div className="doc__icon"><img src={pdf} alt="" /></div>
                      
                      {/* Name of file goes here */}
                      
                      Appropriation-Law-in-Published-NCoA-Format-2021
                  
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
