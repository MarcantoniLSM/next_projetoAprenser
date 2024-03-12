import Button1 from '../Button1/Button1'
import './Section1.css'

export default function Section1(){
    return(
        <section className='section1'>
            <div className='left'>
                <h1>O saber é o que transforma nosso SER</h1>
                <div>
                    
                </div>
                <Button1 text = {'saiba mais'}/>
            </div>            
            <img src="./imagens/HeroImage.png" alt="modelo 'inspire others everyday'"/>
        </section>
    )
}