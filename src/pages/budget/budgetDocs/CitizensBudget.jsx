import React from 'react';
import { ArrowLeft, ArrowSeparateVertical, DownloadCircle } from 'iconoir-react';
import Container from '../../../components/container/Container';
import Footer from '../../../components/footer/footerArea';
import './budget.scss';
import pdf from '../budgetDocs/pdff.png';

// PDF imports
import cb_1 from './pdf/cb/Y2025-Lagos-State-Citizens-Budget.pdf';
import cb_2 from './pdf/cb/Y2024-CITIZENS-BUDGET.pdf';
import cb_3 from './pdf/cb/Y2023-CITIZENS-BUDGET-FNL.pdf';
import cb_4 from './pdf/cb/Citizens-Budget-v2.pdf';
import cb_5 from './pdf/cb/LAGCTBNEW.pdf';
import cb_6 from './pdf/cb/Citizens-Accountability-Report-CAR-Updated.pdf';
import cb_7 from './pdf/cb/CITIZENS-ACCOUNTABILITY-REPORT-2020-BUDGET-Lagos-State_3.pdf';
import { useNavigate } from 'react-router-dom';

const budgetDocuments = [
  {
    id: 'cb_1',
    file: cb_1,
    title: '2025 Lagos State Citizens Budget',
    category: 'Citizens Budget',
    date: '31st December 2024'
  },
  {
    id: 'cb_2',
    file: cb_2,
    title: '2024 Citizens Budget',
    category: 'Citizens Budget',
    date: '31st December 2023'
  },
  {
    id: 'cb_3',
    file: cb_3,
    title: '2023 Citizens Budget',
    category: 'Citizens Budget',
    date: '31st December 2022'
  },
  {
    id: 'cb_4',
    file: cb_4,
    title: '2021 Citizens Budget v2',
    category: 'Citizens Budget',
    date: '31st December 2021'
  },
  {
    id: 'cb_5',
    file: cb_5,
    title: '2021 LAGCTB New',
    category: 'Citizens Budget',
    date: '31st December 2021'
  },
  {
    id: 'cb_6',
    file: cb_6,
    title: 'Citizens Accountability Report 2020',
    category: 'Accountability Reports',
    date: '31st December 2020'
  },
  {
    id: 'cb_7',
    file: cb_7,
    title: 'Citizens Accountability Report 2020 (Detailed)',
    category: 'Accountability Reports',
    date: '31st December 2020'
  }
];

export default function CitizensBudget() {
  let navigate = useNavigate();

  return (
    <div className="resources">
      <Container>
        <div className="arrowBack" onClick={() => navigate(-1)}>
          <ArrowLeft />
        </div>

        <div className="pageTitle rentFree">Citizen's Budget</div>

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

          {/* Mapped Documents */}
          {[...budgetDocuments]
            .sort((a, b) => {
              // Helper function to parse dates with ordinal indicators
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
  );
}
