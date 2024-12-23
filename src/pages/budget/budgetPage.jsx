import React from 'react'
import Container from '../../components/container/Container'
import Budget from '../../components/budget/budget'
import Footer from '../../components/footer/footerArea'

export default function BudgetPage() {
  return (
    
    <div className="budgetPage">

        <Container>

            <div className="pageTitle top__cy">

                Navigate Lagos State's Complete Data and Budget Repository

            </div>

            <Budget type = 'page' />

        </Container>

        <Footer/>
        
    </div>

    
  )
}
