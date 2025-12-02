import React from 'react';

//essentials
import { ArrowLeft, ArrowSeparateVertical, DownloadCircle } from 'iconoir-react';
import Container from '../../../components/container/Container';
import Footer from '../../../components/footer/footerArea';
import './budget.scss';
import pdf from '../budgetDocs/pdff.png';

//pdf
import sftas_1 from './pdf/sftas/280921-2020-Revenue-and-Expenditure.pdf';
import sftas_2 from './pdf/sftas/3RD-QUARTER-FOR-Y2020.pdf';
import sftas_3 from './pdf/sftas/Lagos-State-BPR-Q2-2021-1.pdf';
import sftas_4 from './pdf/sftas/Lagos-State-Government-Q2-Y2022-BPR-SFTAS-July-27th-2022-.pdf';
import sftas_5 from './pdf/sftas/Lagos-State-Government-Q2-Y2022-BPR-SFTAS-Oct-28th-2022-.pdf';
import sftas_6 from './pdf/sftas/Lagos-State-Government-Q4-BPR-SFTAS-Jan-28th-2022.pdf';
import sftas_7 from './pdf/sftas/Lagos-State-Government-Q4-Y2022-BPR-SFTAS-Jan-28th-2023-9.50.pdf';
import sftas_8 from './pdf/sftas/LASG_QBPR-Q3_2020.pdf';
import sftas_9 from './pdf/sftas/LASG_QBPR-Q4_2020.pdf';
import sftas_10 from './pdf/sftas/Q1-2020-Budget-Performance-Report.pdf';
import sftas_11 from './pdf/sftas/Q4-2020-BPR.pdf';
import sftas_12 from './pdf/sftas/SIGNED-APPROPRIATION-LAW-2023-IN-NCoA-FORMAT-LSPC-.pdf';
import sftas_13 from './pdf/sftas/Y2022-Signed-Appropriation-Law-pages-1-4-merged-pages.pdf';
import { useNavigate } from 'react-router-dom';

const budgetDocuments = [
  {
    id: 'sftas_1',
    file: sftas_1,
    title: '2020 Revenue and Expenditure',
    category: 'Budget Documents',
    date: '28th September 2020'
  },
  {
    id: 'sftas_2',
    file: sftas_2,
    title: '3rd Quarter 2020 Budget Performance Report',
    category: 'Budget Documents',
    date: '30th September 2020'
  },
  {
    id: 'sftas_3',
    file: sftas_3,
    title: 'Lagos State BPR Q2 2021',
    category: 'Budget Documents',
    date: '30th June 2021'
  },
  {
    id: 'sftas_4',
    file: sftas_4,
    title: 'Lagos State Government Q2 2022 BPR SFTAS',
    category: 'Budget Documents',
    date: '27th July 2022'
  },
  {
    id: 'sftas_5',
    file: sftas_5,
    title: 'Lagos State Government Q2 2022 BPR SFTAS',
    category: 'Budget Documents',
    date: '28th October 2022'
  },
  {
    id: 'sftas_6',
    file: sftas_6,
    title: 'Lagos State Government Q4 BPR SFTAS',
    category: 'Budget Documents',
    date: '28th January 2022'
  },
  {
    id: 'sftas_7',
    file: sftas_7,
    title: 'Lagos State Government Q4 2022 BPR SFTAS',
    category: 'Budget Documents',
    date: '28th January 2023'
  },
  {
    id: 'sftas_8',
    file: sftas_8,
    title: 'LASG Q3 2020 BPR',
    category: 'Budget Documents',
    date: '30th September 2020'
  },
  {
    id: 'sftas_9',
    file: sftas_9,
    title: 'LASG Q4 2020 BPR',
    category: 'Budget Documents',
    date: '31st December 2020'
  },
  {
    id: 'sftas_10',
    file: sftas_10,
    title: 'Q1 2020 Budget Performance Report',
    category: 'Budget Documents',
    date: '31st March 2020'
  },
  {
    id: 'sftas_11',
    file: sftas_11,
    title: 'Q4 2020 BPR',
    category: 'Budget Documents',
    date: '31st December 2020'
  },
  {
    id: 'sftas_12',
    file: sftas_12,
    title: 'Signed Appropriation Law 2023 (NCoA Format)',
    category: 'Budget Documents',
    date: '31st December 2022'
  },
  {
    id: 'sftas_13',
    file: sftas_13,
    title: '2022 Signed Appropriation Law',
    category: 'Budget Documents',
    date: '31st December 2021'
  }
];


export default function SFTAS() {
  let navigate = useNavigate();

  return (
    <div className="resources">
      <Container>
        <div className="arrowBack" onClick={() => navigate(-1)}>
          <ArrowLeft />
        </div>

        {/* Page Title */}
        <div className="pageTitle rentFree">
          States Fiscal Transparency, Accountability, and Sustainability
        </div>

        {/* Table Headers */}
        <div className="vault">
          <div className="doc doc__top">
            <div className="doc__title flex gap__20">
              # Resource Title <ArrowSeparateVertical />
            </div>
            <div className="doc__category flex gap__20">
              Category <ArrowSeparateVertical />
            </div>
            <div className="doc__date flex gap__20">
              Last Updated <ArrowSeparateVertical />
            </div>
            <div className="doc__action">Action</div>
          </div>

          {/* Documents */}
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
                  <div className="doc__icon">
                    <img src={pdf} alt="" />
                  </div>
                  {doc.title}
                </div>
                <div className="doc__category">{doc.category}</div>
                <div className="doc__date">{doc.date}</div>
                <div className="doc__action">
                  <div className="form__button flex">
                    <DownloadCircle /> Download
                  </div>
                </div>
              </a>
            ))}
        </div>
      </Container>
      <Footer />
    </div>
  )
}
