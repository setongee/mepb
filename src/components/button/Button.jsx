import { ArrowDown, ArrowRight, ArrowUp } from 'iconoir-react'
import './button.scss'

export default function Button({content, type, arrow, arrow__type, to, styles}) {
  return (
    <div className={`button ${type ? type : ''}` } onClick={ () => window.location.href = to } style={styles} >
        {
          !arrow ? <div>{content}</div> 
          : 
          <div className="arrowType"> 

            {content} 
            <div className="icon"> { arrow__type === 'down' ? <ArrowDown/> : <ArrowRight/> } </div>
            
          </div>
        }
    </div>
  )
}