import style from './Conteudo.module.scss'

interface ConteudoProps{
    children?: any
}

export default function Conteudo(props:ConteudoProps){
    return(
        <div className={style.Conteudo}>
            {props.children}
        </div>
    )
}