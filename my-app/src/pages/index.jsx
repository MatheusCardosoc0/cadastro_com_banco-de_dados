import Link from 'next/link'
import style from '../styles/text.module.css'

export default function principal() {
  return (
    <div>
      <h2
        style={{
          fontSize: '5rem'
        }}
      >
        eae
      </h2>
      <div className={style.navigation}>
        <Link href={'/text'}>text</Link>
        <Link href={'/clients'}>clients</Link>
        <Link href={'/clients/Cadastros'} >Cadastros</Link>
        <Link href={'/clients/sp-34/8755'} >Cliente 1</Link>
      </div>
    </div>
  )
}
