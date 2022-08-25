import Link from 'next/link'
import styles from '../../styles/text.module.css'

export default function Layaut(props) {
  return (
    <div>
      <header className={styles.cabecalho}>
        <Link href="/">voltar a pagina principal</Link>
      </header>
      <div className={styles.conteudo}>
        {props.children}
      </div>
    </div>
  )
}
