import React from "react";

//essentials
import {
  ArrowSeparate,
  ArrowSeparateVertical,
  Download,
  DownloadCircle,
  ArrowLeft,
} from "iconoir-react";
import Container from "../../../components/container/Container";
import Footer from "../../../components/footer/footerArea";
import "./budget.scss";
import pdf from "../budgetDocs/pdff.png";

//pdfs
import qbpr_1 from "./pdf/qbpr/Lagos-State-BPR-Q3-P1.pdf";
import qbpr_2 from "./pdf/qbpr/Lagos_State_2024_Q2_BPR_Publication.pdf";
import qbpr_3 from "./pdf/qbpr/Lagos State 2024 Q1 BPR.pdf";
import qbpr_4 from "./pdf/qbpr/BPR4-LAGOS-STATE-GOVERNMENT-Q4-270124-CR-fm.pdf";
import qbpr_5 from "./pdf/qbpr/Y2023-Q3-Lagos-State-Budget-Performance-Report.pdf";
import qbpr_6 from "./pdf/qbpr/Y2023-BUDGET-PERFORMANCE-REPORT-Q2.pdf";
import qbpr_7 from "./pdf/qbpr/LASG-Q1-2023-BPR.pdf";
import qbpr_10 from "./pdf/qbpr/Lagos-State-Government-Q4-BPR-SFTAS-Jan-28th-2022.pdf";
import qbpr_11 from "./pdf/qbpr/LAGOS_Y2025_Q3- Budget Implementation Report.pdf";
import qbpr_12 from "./pdf/qbpr/LAGOS-STATE-Y2025-BUDGET-IMPLEMENTATION-REPORT-Q2-2025.pdf";
import qbpr_13 from "./pdf/qbpr/Y2004-Lagos-State-BPR-Q4-F.pdf";
import qbpr_14 from "./pdf/qbpr/Y2025-Lagos-State-Budget-Implementation-Report-Q1-2025.pdf";

import { useNavigate } from "react-router-dom";

const budgetDocuments = [
  {
    id: "qbpr_1",
    file: qbpr_1,
    title: "Lagos State BPR Q3 P1",
    category: "Budget Documents",
    date: "30th September 2024",
  },
  {
    id: "qbpr_2",
    file: qbpr_2,
    title: "Lagos State 2024 Q2 BPR Publication",
    category: "Budget Documents",
    date: "30th June 2024",
  },
  {
    id: "qbpr_3",
    file: qbpr_3,
    title: "Lagos State 2024 Q1 BPR",
    category: "Budget Documents",
    date: "31st March 2024",
  },
  {
    id: "qbpr_4",
    file: qbpr_4,
    title: "Lagos State Government Q4 BPR",
    category: "Budget Documents",
    date: "27th January 2024",
  },
  {
    id: "qbpr_5",
    file: qbpr_5,
    title: "2023 Q3 Lagos State Budget Performance Report",
    category: "Budget Documents",
    date: "30th September 2023",
  },
  {
    id: "qbpr_6",
    file: qbpr_6,
    title: "2023 Budget Performance Report Q2",
    category: "Budget Documents",
    date: "30th June 2023",
  },
  {
    id: "qbpr_7",
    file: qbpr_7,
    title: "LASG Q1 2023 BPR",
    category: "Budget Documents",
    date: "31st March 2023",
  },
  {
    id: "qbpr_10",
    file: qbpr_10,
    title: "Lagos State Government Q4 BPR 2022",
    category: "Budget Documents",
    date: "28th January 2022",
  },
  {
    id: "qbpr_11",
    file: qbpr_11,
    title: "LAGOS Y2025 Q3 Budget Implementation Report",
    category: "Budget Documents",
    date: "30th September 2025",
  },
  {
    id: "qbpr_12",
    file: qbpr_12,
    title: "LAGOS STATE Y2025 BUDGET IMPLEMENTATION REPORT Q2 2025",
    category: "Budget Documents",
    date: "30th June 2025",
  },
  {
    id: "qbpr_13",
    file: qbpr_13,
    title: "2004 Lagos State BPR Q4",
    category: "Budget Documents",
    date: "31st December 2004",
  },
  {
    id: "qbpr_14",
    file: qbpr_14,
    title: "2025 Lagos State Budget Implementation Report Q1 2025",
    category: "Budget Documents",
    date: "31st March 2025",
  },
];

export default function QBPR() {
  let navigate = useNavigate();

  return (
    <div className="resources">
      <Container>
        <div className="arrowBack" onClick={() => navigate(-1)}>
          <ArrowLeft />
        </div>

        {/* Page Title */}
        <div className="pageTitle rentFree">
          Quarterly Budget Performance Reviews
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
          {[...budgetDocuments].sort((a, b) => {
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
