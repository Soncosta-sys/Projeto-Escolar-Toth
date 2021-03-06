import style from './Layout.module.scss'
import Cabecalho from "../Cabecalho"
import Conteudo from "../Conteudo"
import MenuLateral from "../MenuLateral"

interface LayoutProps {
    titulo: string
    subtitulo: string
    children?: any
}

export default function Layout(props: LayoutProps) {
    return (
        <div className={style.Layout}>
            <MenuLateral />
            <div className={style.Pagina}>
                <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} />
                <Conteudo>
                    {props.children}              
                </Conteudo>
            </div>

        </div>
    )
}