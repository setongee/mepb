import React from 'react'

//essentials

import { ArrowSeparate, ArrowSeparateVertical, Download, DownloadCircle, ArrowLeft } from 'iconoir-react'
import Container from '../../../components/container/Container'
import Footer from '../../../components/footer/footerArea'
import './budget.scss'
import pdf from '../budgetDocs/pdff.png'

//pdfs

import afs_1 from './pdf/afs/YEAR-2023-FINANCIAL-STATEMENT.pdf';
import afs_2 from './pdf/afs/2022-LASG-IPSAS-FINANCIAL-STATEMENTS-2021.pdf';
import { useNavigate } from 'react-router-dom'


export default function AuditedFinancialStatement() {

  let navigate = useNavigate();

  return (

    <div className="resources">
           
        <Container>

          <div className="arrowBack" onClick={ () => navigate(-1) } > <ArrowLeft/> </div>

            {/* Page Title */}

            <div className="pageTitle rentFree"> Audited Financial Statement </div>

            {/* Table Headers */}

            <div className="vault">

                <div className="doc doc__top">
                    <div className="doc__title flex gap__20"># Resource Title  <ArrowSeparateVertical/> </div>
                    <div className="doc__category flex gap__20">Category <ArrowSeparateVertical/></div>
                    <div className="doc__date flex gap__20">Last Updated <ArrowSeparateVertical/></div>
                    <div className="doc__action">Action</div>
                </div>

                {/* Document Body Files */}

                <a href = {afs_1} download className="doc doc__body">
                    <div className="doc__title flex gap__10">
                        
                        <div className="doc__icon"><img src={pdf} alt="" /></div>
                        
                        YEAR-2023-FINANCIAL-STATEMENT
                    
                    </div>
                    <div className="doc__category"> Budget Documents </div>
                    <div className="doc__date"> 31st December 2023 </div>
                    <div className="doc__action"> <div className="form__button flex"> <DownloadCircle/> Download </div> </div>
                </a>

                <a href = {afs_2} download className="doc doc__body">
                    <div className="doc__title flex gap__10">
                        
                        <div className="doc__icon"><img src={pdf} alt="" /></div>
                        
                        2022-LASG-IPSAS-FINANCIAL-STATEMENT
                    
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
