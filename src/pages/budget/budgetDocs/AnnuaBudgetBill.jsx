import React from 'react';

//essentials
import { ArrowLeft, ArrowSeparateVertical, DownloadCircle } from 'iconoir-react';
import Container from '../../../components/container/Container';
import Footer from '../../../components/footer/footerArea';
import './budget.scss';
import pdf from '../budgetDocs/pdff.png';

//pdfs
import aab_1 from './pdf/aab/Y-2024-Appropriation-law-in-Published-NCoA-format.pdf';
import aab_2 from './pdf/aab/APPROPRIATION LAW 2023  (LSPC)  Signed.pdf';
import aab_3 from './pdf/aab/Y2022-Signed-Appropriation-Law.pdf';
import aab_4 from './pdf/aab/signed-2021-appropriation-bill.pdf';
import aab_5 from './pdf/aab/Y2022-Signed-Appropriation-Law-pages-1-4-merged-pages.pdf';
import aab_6 from './pdf/aab/Minute-of-The-Consultative-Forum-2022.pdf';
import { useNavigate } from 'react-router-dom';

const budgetDocuments = [
  {
    id: 'aab_1',
    file: aab_1,
    title: '2024 Appropriation Bill (NCoA Format)',
    category: 'Budget Documents',
    date: '31st December 2023'
  },
  {
    id: 'aab_2',
    file: aab_2,
    title: '2023 Appropriation Bill',
    category: 'Budget Documents',
    date: '31st December 2022'
  },
  {
    id: 'aab_6',
    file: aab_6,
    title: 'Minute of The Consultative Forum 2022',
    category: 'Meeting Minutes',
    date: '30th June 2022'
  },
  {
    id: 'aab_3',
    file: aab_3,
    title: '2022 Signed Appropriation Law',
    category: 'Budget Documents',
    date: '31st December 2021'
  },
  {
    id: 'aab_5',
    file: aab_5,
    title: '2022 Signed Appropriation Law (Merged Pages)',
    category: 'Budget Documents',
    date: '31st December 2021'
  },
  {
    id: 'aab_4',
    file: aab_4,
    title: 'Signed 2021 Appropriation Bill',
    category: 'Budget Documents',
    date: '31st December 2020'
  }
];



export default function AnnuaBudgetBill() {
  let navigate = useNavigate();

  return (
    <div className="resources">
      <Container>
        <div className="arrowBack" onClick={() => navigate(-1)}>
          <ArrowLeft />
        </div>

        {/* Page Title */}
        <div className="pageTitle rentFree">
          Annual Budget Appropiation Bill
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
  );
}
