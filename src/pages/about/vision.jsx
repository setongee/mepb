import React from 'react'
import './about.scss'
import Container from '../../components/container/Container'
import Button from '../../components/button/Button'
import Footer from '../../components/footer/footerArea'

//bidget images

import one from '../../assets/mepb/Intersection -1.png'
import two from '../../assets/mepb/Intersection 4.png'
import three from '../../assets/mepb/Intersection 5.png'
import four from '../../assets/mepb/Intersection 6.png'
import five from '../../assets/mepb/Intersection 7.png'

export default function Vision() {
  return (
    <div className="about">

      <Container>

        <div className="title plaq" style={{border : 'none'}}>

            <h1>Vision, Mission, and Goals: Defining Purpose, Direction, and Key Objectives</h1>

            <span>Aligning Identity, Purpose, Direction, and Objectives for Sustainable Growth and Success</span>

        </div>

      </Container>

       <div className="more__about">

          <Container>

            <div className="areas flex">

              <div className="scope">

                  <div className="content__text">

                    <div className="main">Our Vision</div>
                    <div className="tag text__trend font__12">Who we are</div>
                    <div className="sub__text">To be the primary agency of government that facilitates efficient and effective mobilisation, planning, allocation and utilization of resources for socio-economic transformation of Lagos State.</div>

                  </div>

              </div>

              <div className="lineform"></div>

              <div className="scope">

                  <div className="content__text">

                    <div className="main">Our Mission</div>
                    <div className="tag text__trend font__12">What we do</div>
                    <div className="sub__text">Ensuring continuous and dynamic socio-economic policies through prudent and equitable resource management in Lagos State.</div>

                  </div>

              </div>

            </div>

          </Container>

       </div>

        <div className="floating__pictures flex">

            <div className="photo__float">
              <img src={five} alt="" />
            </div>

            <div className="photo__float">
              <img src={two} alt="" />
            </div>

            <div className="photo__float">
              <img src={three} alt="" />
            </div>

            <div className="photo__float">
              <img src={four} alt="" />
            </div>

            <div className="photo__float">
              <img src={one} alt="" />
            </div>

        </div>

        <Container>

            <div className="about__details">

                The Lagos State Ministry of Economic Planning and Budget (MEPB) was created in June 1999 out of the erstwhile Plans, Programmes and Budget Bureau (PPBB) by the administration of Asiwaju Bola Ahmed Tinubu, Governor of Lagos State. The upgrading of the defunct PPBB to a ministerial status was informed by the policy thrust of the Tinubu Administration as enunciated in its blueprint in which planning and popular participation were placed at the centre stage of governance and development.

                {<br></br>}{<br></br>}

                Prior to this time, economic planning or development had been an appendage to other ministerial folio such as Finance and Establishment. Thus, the appearance of the MEPB was a deliberate attempt by the State Government to ensure that governance is rooted in planning. In this regard, the assignment of ministerial responsibility of the Ministry of Economic Planning and Budget (MEPB) are, as spelt out in the State Government Gazette, No18. Vol.32 of 1st, July, 1999.

                {<br></br>}{<br></br>}

                The Ministry of Economic Planning and Budget could be said to have its root in the first Economic Development Plan of Lagos State. Following the creation of the State in 1967, the founders deemed it fit to first of all come up with a 5 year development plan, called “The 1970 – 75 Development Plan” with a planned expenditure of Fifty Four Million, two hundred and Fifty Thousand Naira only (₦54.25m).

                {<br></br>}{<br></br>}

                Officially, the State Government established the Plans, Programmes, and Budget Department (PPBD) in the Ministry of Finance in 1976, following the Jerome Udoji Commission’s Report (Nigerian Public Service Reforms, 1974) which among other things recommended that States should do away with the then incremental budgeting and commenced the “program-based” budgeting approach in financial management. The Reform followed closely the Nigerian Enterprises Promotion Decree of 1972 otherwise called the Indigenization Decree.

                {<br></br>}{<br></br>}

                Recognising the importance of Economic Planning to good governance and people oriented projects and programmes, the Second Republic Governor of Lagos State, Alh. Lateef Kayode Jakande moved the Plans, Programmes and Budget Department (PPBD) to the Governor’s office on March 28, 1980 and appointed a Permanent Secretary, Dr. R.A. Soule, as its head.

                {<br></br>}{<br></br>}

                It was to the credit of the Jakande Administration that the department was transformed to a full – fledged ‘Ministry of Economic Planning and Land Matters’ with Alhaji Ganiu Olatunde Osuneye as its Honourable Commissioner. The Ministry was saddled, among others, with responsibility “for the economic planning of the state, gathering and utilization of economic intelligence, collection and dissemination of statistical data and maintenance of relations with National Population Council…Other assignments of the Ministry include Preparation, Monitoring  and Revision of Development Plan, external technical assistance, periodic reports on plan implementation as well co-ordination of economic matters and manpower development.

                {<br></br>}{<br></br>}

                In executing its mandate, it had among others, the divisions of Development Planning, Statistics, as well as Economic and Social Services which were “placed under the directorate of economic planning for the purpose of effective monitoring and execution of various economic projects of the Government’.

                {<br></br>}{<br></br>}

                However, It was rechristened as Plans, Programmes, and Budget Bureau (PPBB) at the commencement of the Third Republic under Sir Michael Agbolade Otedola and the situation remained until the Asiwaju Bola Ahmed Tinubu administration created the Ministry of Economic Planning and Budget and assigned responsibilities as enunciated in the State Government Gazette, No 18. Vol.32 of 1st July, 1999. This exercise was informed by that Administration’s policy thrust which placed planning and popular participation at the centre stage of governance and development.

                {<br></br>}{<br></br>}

                It envisions “To be the primary agency of government that facilitates efficient and effective mobilisation, planning, allocation and utilisation of resources for socio-economic transformation of Lagos State”, and has set the mission of   “Ensuring continuous and dynamic socio-economic policies through prudent and equitable resource management in Lagos state” for itself.

                {<br></br>}{<br></br>}

                Since it came on board, the Ministry has taken steps to timeously and efficiently prepare the state’s budget ensure and In line with modern trends in global budget implementation and monitoring and its drive at steering the State’s economy towards the attainment of   the State’s Overall Policy Thrust of“Poverty Alleviation and Sustainable Economic Growth” undertake regular quarterly review of its performance.

                {<br></br>}{<br></br>}

                Currently, it has adopted internationally accepted budgeting tools of MTBF, MTEF, and the MTSS in preparing the state’s budgets.

                {<br></br>}{<br></br>}

                The Ministry currently have seven (7) Departments and three (4) Units to attain its assigned responsibilities viz:  Economic Planning, Budget, Accounts and Administration & Human Resources, Bureau of Statistics, Monitoring and Evaluation and the Development Partnership Departments.  The Units include Public Affairs, Audit, the ICT/Resource Centre and Procurement.

            </div>

        </Container>

        <Footer/>

    </div>
  )
}
