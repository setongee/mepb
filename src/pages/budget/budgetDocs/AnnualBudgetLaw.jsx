import React from 'react';

//essentials
import { ArrowLeft, ArrowSeparateVertical, DownloadCircle } from 'iconoir-react';
import Container from '../../../components/container/Container';
import Footer from '../../../components/footer/footerArea';
import './budget.scss';
import pdf from '../budgetDocs/pdff.png';

//pdfs
import abl_1 from './pdf/abl/Y2024-Appropriation-Law.pdf';
import abl_2 from './pdf/abl/APPROPRIATION LAW 2023  (LSPC)  Signed.pdf';
import abl_3 from './pdf/abl/Y2022-Signed-Appropriation-Law.pdf';
import abl_4 from './pdf/abl/signed-2021-appropriation-bill.pdf';
import abl_5 from './pdf/abl/Lagos-State-Government-2021-Approved-Law-1.pdf';
import abl_6 from './pdf/abl/Appropriation-Law-in-Published-NCoA-Format-vs2-pages-1-75_80-IF_2.pdf';
import abl_7 from './pdf/abl/Appropriation-2025.pdf';
import abl_8 from './pdf/abl/LAGOS-STATE-2025-Appropriation-Law-1.pdf';
import abl_9 from './pdf/abl/Lagos-State-Y2025-Budget-NCOA-1.pdf';
import abl_10 from './pdf/abl/Y-2024-Appropriation-law-in-Published-NCoA-format.pdf';
import abl_11 from './pdf/abl/Y2022-Signed-Appropriation-Law-NCoA-Format.pdf';
import { useNavigate } from 'react-router-dom';

const budgetDocuments = [
  {
    id: 'abl_8',
    file: abl_8,
    title: 'Lagos State 2025 Appropriation Law',
    category: 'Budget Documents',
    date: '31st December 2024'
  },
  {
    id: 'abl_7',
    file: abl_7,
    title: '2025 Appropriation Law',
    category: 'Budget Documents',
    date: '31st December 2024'
  },
  {
    id: 'abl_9',
    file: abl_9,
    title: 'Lagos State Y2025 Budget NCoA',
    category: 'Budget Documents',
    date: '31st December 2024'
  },
  {
    id: 'abl_10',
    file: abl_10,
    title: '2024 Appropriation Law (NCoA Format)',
    category: 'Budget Documents',
    date: '31st December 2023'
  },
  {
    id: 'abl_1',
    file: abl_1,
    title: '2024 Appropriation Law',
    category: 'Budget Documents',
    date: '31st December 2023'
  },
  {
    id: 'abl_2',
    file: abl_2,
    title: 'Appropriation Law 2023',
    category: 'Budget Documents',
    date: '31st December 2022'
  },
  {
    id: 'abl_11',
    file: abl_11,
    title: '2022 Signed Appropriation Law (NCoA Format)',
    category: 'Budget Documents',
    date: '31st December 2021'
  },
  {
    id: 'abl_3',
    file: abl_3,
    title: '2022 Signed Appropriation Law',
    category: 'Budget Documents',
    date: '31st December 2021'
  },
  {
    id: 'abl_4',
    file: abl_4,
    title: 'Signed 2021 Appropriation Bill',
    category: 'Budget Documents',
    date: '31st December 2020'
  },
  {
    id: 'abl_5',
    file: abl_5,
    title: 'Lagos State Government 2021 Approved Law',
    category: 'Budget Documents',
    date: '31st December 2020'
  },
  {
    id: 'abl_6',
    file: abl_6,
    title: 'Appropriation Law in Published NCoA Format',
    category: 'Budget Documents',
    date: '31st December 2020'
  }
];


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

              {[...budgetDocuments]
                .sort((a, b) => {
                  // Convert date strings to Date objects for comparison
                  const parseDate = (dateStr) => {
                    // Remove 'st', 'nd', 'rd', 'th' from the day
                    const cleanDateStr = dateStr.replace(/\b(\d+)(?:st|nd|rd|th)\b/, '$1');
                    return new Date(cleanDateStr);
                  };
                  return parseDate(b.date) - parseDate(a.date);
                })
                .map((doc) => (
                  <a key={doc.id} href={doc.file} download className="doc doc__body">
                    <div className="doc__title flex gap__10">
                      <div className="doc__icon"><img src={pdf} alt="" /></div>
                      {doc.title}
                    </div>
                    <div className="doc__category">{doc.category}</div>
                    <div className="doc__date">{doc.date}</div>
                    <div className="doc__action">
                      <div className="form__button flex">
                        <DownloadCircle/> Download
                      </div>
                    </div>
                  </a>
                ))}

          </div>

      </Container>

      <Footer/>

    </div>

  )

}
