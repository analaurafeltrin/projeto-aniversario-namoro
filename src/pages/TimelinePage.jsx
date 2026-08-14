import { useState } from 'react'
import styles from '../assets/styles/TimelinePage.module.css'
import ModalMarco from '../assets/components/timeline/ModalMark.jsx'
import arq from '../assets/images/timeline-page/image-01.jpeg'
import firstDate from '../assets/images/timeline-page/image-02.jpeg'
import colacaoAreus from '../assets/images/timeline-page/image-03.jpeg'
import dating from '../assets/images/timeline-page/image-04.jpeg'
import fortaleza from '../assets/images/timeline-page/image-05.jpeg'
import uno from '../assets/images/timeline-page/image-06.jpg'
import colacaoAna from '../assets/images/timeline-page/image-07.jpg'
import onix from '../assets/images/timeline-page/image-08.jpg'
import atual from '../assets/images/timeline-page/image-09.jpg'

const marcos = [
  {
    data: '21/10/2022',
    titulo: 'Arquibancada SportsBar',
    imagem: arq,
    focoImagem: 'center 35%',
    legenda:
      'Era pra ser só um rolê normal, né? Até que eu decidi que valia a pena chegar em você, com uma cantada tenebrosa...',
  },
  {
    data: '30/10/2022',
    titulo: 'Nosso 1º date - Show dos 4 Amigos',
    imagem: firstDate,
    focoImagem: 'center 45%',
    legenda:
      'Tudo bem que você me chamou de segunda opção... Mas aposto que foi muito melhor do que teria sido a primeira!',
  },
  {
    data: '06/02/2023',
    titulo: 'Colação do homi',
    imagem: colacaoAreus,
    focoImagem: 'center 47%',
    legenda:
      'A gente ainda nem namorava, e você já me chamou pra sua colação! Eu achei desesperador, mas fui mesmo assim :)',
  },
  {
    data: '24/03/2023',
    titulo: 'Oficializou mona!!',
    imagem: dating,
    focoImagem: 'left center',
    legenda:
      'Essa foto foi tirada no dia que começamos o nosso namoro. Ou melhor, a data que decidimos começar nosso namoro, já que ninguém me fez um pedido, e nem nada, sabe...',
  },
  {
    data: '22/07/2023',
    titulo: 'Fortaleza',
    imagem: fortaleza,
    focoImagem: 'center',
    legenda:
      'Nossa primeira viagem juntos! Você gastou todo o seu dinheiro suado em passagem para conhecer meu pai. Mas foi muito legal, admita!',
  },
  {
    data: '31/08/2024',
    titulo: 'brUNO!',
    imagem: uno,
    focoImagem: 'center',
    legenda:
      'Comprou seu humilde e funcional Uno. Fiquei muito feliz pela sua conquista!',
  },
  {
    data: '12/02/2025',
    titulo: 'Colação da muié',
    imagem: colacaoAna,
    focoImagem: 'center',
    legenda:
      'Agora é minha vez! Você também esteve comigo na minha colação! Quem sabe, daqui uns 2 anos, não vai ter que presenciar mais uma... Rs',
  },
  {
    data: '22/02/2025',
    titulo: 'Samanta!',
    imagem: onix,
    focoImagem: 'left center',
    legenda:
      'Eu comprei meu lindo e maravilhoso Ônix. Você ficou feliz, hein, hein???',
  },
  {
    data: 'Atualmente',
    titulo: 'Seguimos...',
    imagem: atual,
    focoImagem: 'left center',
    legenda:
      'O tempo passou e muita coisa acontece. Coloquei algumas coisas importantes, mas a melhor de todas elas é que nós continuamos assim... Juntinhos, com muito amor',
  },
]

export default function TimelineSection() {
  const [marcoAberto, setMarcoAberto] = useState(null)

  return (
    <>
      <div className={styles.pagina}>
        <div className={styles.trilha}>
          {marcos.map((marco, i) => (
            <button
              key={i}
              onClick={() => setMarcoAberto(i)}
              className={styles.ponto}
            >
              <span className={styles.bolinha} />
              <span className={styles.data}>{marco.data}</span>
            </button>
          ))}
        </div>
      </div>

      {marcoAberto !== null && (
        <ModalMarco
          marco={marcos[marcoAberto]}
          onFechar={() => setMarcoAberto(null)}
        />
      )}
    </>
  )
}
