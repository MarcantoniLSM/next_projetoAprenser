import Button1 from '../Button1/Button1'
import Card from '../Card/Card'
import './Section2.css'

export default function Section2(){
    return(
        <section className='section2'>
            <h1>
                Principais Cursos
            </h1>
            <div className='cards'>
                <Card 
                    src={'./imagens/curso-design.png'} 
                    alt={'capa curso design para web'}
                    title={'Design para web'}
                    description={'O curso Design para Web é perfeito para aqueles que desejam aprender a criar designs atraentes e funcionais para sites e aplicativos móveis.'}
                />
                <Card 
                    src={'./imagens/curso-design-1.png'} 
                    alt={'capa curso front end developer'}
                    title={'Front End Developer'}
                    description={'Aprenda HTML, CSS e Javascript e crei interfaces ricas e semânticas para páginas web, aplicativos on-line ou até mesmo aplicações para aparelhos celulares.'}
                />
                <Card 
                    src={'./imagens/curso-design-2.png'} 
                    alt={'capa curso back end developer'}
                    title={'Back End Developer'}
                    description={'Com este curso você vai dominar uma linguagem back-end a sua escolha, um sistema de banco de dados e aprenderá como funciona o protocolo HTTP na prática.'}
                />
            </div>
            <Button1 text ={'Ver mais cursos'}/>
        </section>
        
    )
}