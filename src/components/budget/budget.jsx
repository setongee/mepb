import React from 'react'
import './budget.scss'
import { ArrowRight } from 'iconoir-react'
import Button from '../button/Button'

export default function Budget({type}) {

  return (
    
    <div className="budgets__cat flex" id = {`${type === 'page' ? 'page' : 'component'}`} >

        <div className="bud__cat">

            <img src="https://openstates.ng/latest/assets/img/implemantation.png" alt="" />

            <div className="naming">

                <p>Budget Implementation Report <ArrowRight width={18} /></p>

                <span>Periodical reports detailing the progress made by the government in executing the projects and objectives outlined in the approved budget</span>

                <div className="butt">
                    <Button content  = 'View Document' type = 'button__main' />
                </div>

            </div>
            
        </div>

        <div className="bud__cat">

            <img src="https://openstates.ng/latest/assets/img/Audited.png" alt="" />

            <div className="naming">

                <p>Audited Statement <ArrowRight width={18} /></p>

                <span>This contains the consolidated statement of actual state revenues and expenditure as well as the independent opinion of the state’s...</span>

                <div className="butt">
                    <Button content  = 'View Document' type = 'button__main' />
                </div>

            </div>
            
        </div>

        <div className="bud__cat">

            <img src="https://openstates.ng/approved.png" alt="" />

            <div className="naming">

                <p>Approved Budget<ArrowRight width={18} /></p>

                <span>This is the product of the State Assembly’s discussions on the executive budget proposal. The assembly makes modifications...</span>

                <div className="butt">
                    <Button content  = 'View Document' type = 'button__main' />
                </div>

            </div>
            
        </div>

        <div className="bud__cat">

            <img src="https://openstates.ng/latest/assets/img/proposed.png" alt="" />

            <div className="naming">

                <p>Proposed Budget<ArrowRight width={18} /></p>

                <span>The government’s revenue generation and spending plan as prepared by MDAs and the budget office/ministry...</span>

                <div className="butt">
                    <Button content  = 'View Document' type = 'button__main' />
                </div>

            </div>
            
        </div>

        <div className="bud__cat">

            <img src="https://openstates.ng/latest/assets/img/citizen.png" alt="" />

            <div className="naming">

                <p>Citizen Budget<ArrowRight width={18} /></p>

                <span>A visual and simplified version of the approved budget produced with citizen’s understanding and engagement...</span>

                <div className="butt">
                    <Button content  = 'View Document' type = 'button__main' />
                </div>

            </div>
            
        </div>

        <div className="bud__cat">

            <img src="https://openstates.ng/latest/assets/img/policy.png" alt="" />

            <div className="naming">

                <p>Policy Statement<ArrowRight width={18} /></p>

                <span>Documents outlining policy directions and specifics of the state. This can include the Medium Term Expenditure Framework, long term visioning...</span>

                <div className="butt">
                    <Button content  = 'View Document' type = 'button__main' />
                </div>

            </div>
            
        </div>

    </div>

  )
}
