import React from 'react'
import Container from '../../components/container/Container'
import './about.scss'
import Footer from '../../components/footer/footerArea'

export default function Responsibilities() {

  return (
    
        <div className="about__sections">

            <Container>

                 <div className="title">

                    <h1>Roles and Responsibilities: Understanding Core Functions, Duties, and Key Roles</h1>

                    <span>Mandates, duties, and functions assigned to government officials in this ministry.</span>

                </div>
                
                <div className="holder">

                    <div className="mda__head">

                        <div className="mda__info">

                            <div className="lead">Responsibilities of the Ministry of Planning & Budget </div>

                            <div className="backups">The Lagos State Ministry of Economic Planning and Budget (MEPB) was created in June 1999 out of the erstwhile Plans, Programmes and Budget Bureau (PPBB) by the administration of Asiwaju Bola Ahmed Tinubu, Governor of Lagos State. The upgrading of the defunct PPBB to a ministerial status was informed by the policy thrust of the Tinubu Administration as enunciated in its blueprint in which planning and popular participation were placed at the centre stage of governance and development.:</div>
                        </div>
                    </div>

                    <div className="mda__content">
                        <p>1. Preparation of Annual Budget of the State Government and processing of Annual Budget of Parastatals Organizations.</p>

                        <p>2. Advisory services on Local Government Budget. </p>

                        <p>3. Preparation of supplementary estimates. </p>

                        <p>4. Budgetary Controls. </p>
                        
                        <p>5. Budgetary Instructions.</p>

                        <p>6.  Arranging and following up Governor’s coordinating meetings with Ministries, Office. </p>

                        <p>7. Liaison with Ministry of Finance on budgetary and financial matters.</p>

                        <p>8. Offering advice to Government on implementation of project and programmes.</p>

                        <p>9. Production of statistical data on the activities of the State Government. </p>

                        <p>10. Technical assistance and coordination on aid matters. </p>

                    </div>
                    
                </div>

                {/* <div className="otherLinks">
                    <p>See also : </p>
                    <div className="links__quick">
                        <span> Vision, Mission & Structure </span>
                    </div>
                </div> */}
            </Container>

            <Footer/>
        </div>

  )

}
