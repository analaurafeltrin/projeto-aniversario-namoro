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
import fantasia from '../assets/images/timeline-page/image-10.jpg'
import portao from '../assets/images/timeline-page/image-11.jpg'
import natal from '../assets/images/timeline-page/image-12.jpg'
import uberabs from '../assets/images/timeline-page/image-13.jpg'
import festa from '../assets/images/timeline-page/image-14.jpg'
import casamento from '../assets/images/timeline-page/image-15.jpg'
import copa from '../assets/images/timeline-page/image-16.jpg'

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
    data: '28/10/2023',
    titulo: 'OS MELHORES',
    imagem: fantasia,
    focoImagem: 'center 18%',
    legenda:
      'Nosso primeiro Halloween, e nossa melhor fantasia. Não é atoa que ganhamos o concurso, né?',
  },
   {
    data: '01/09/2024',
    titulo: 'O fatídico... O fatídico dia...',
    imagem: portao,
    focoImagem: 'center 43%',
    legenda:
      'Ai ai ai... O que mais eu posso dizer sobre essa foto? Acho que jamais esqueceremos.',
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
    data: '24/12/2024',
    titulo: 'Natal',
    imagem: natal,
    focoImagem: 'center 35%',
    legenda:
      'Nosso 1º natal juntos, uhul 🎅',
  },
  {
    data: '21/01/2025',
    titulo: 'Te visitei em Uberaba',
    imagem: uberabs,
    focoImagem: 'center',
    legenda:
      'Não deixa de ser o momento em que o meninão virou independente, né? Morando fora, sozinho, pra ganhar dinheiro (não que tenha ganhado muita coisa nesse trabalho.. (Desculpa Cazão) ',
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
    data: '27/03/2026',
    titulo: 'Festa Surpresa de 16 anos',
    imagem: festa,
    focoImagem: 'center 15%',
    legenda:
      'Sua primeira festa surpresa da vida.. Own.. Só 10 anos atrasado! Mas foi fera',
  },
  {
    data: '19/04/2026',
    titulo: 'É... Padrinhos?',
    imagem: casamento,
    focoImagem: 'center 30%',
    legenda:
      'Bom. A primeira vez na vida que fomos padrinhos. DEFINITIVAMENTE, nunca esqueceremos desse casório, não é? 😫',
  },
   {
    data: '05/07/2026',
    titulo: 'Copa',
    imagem: copa,
    focoImagem: 'center 30%',
    legenda:
      'Nossa 2ª copa juntos, porém, 1ª copa namorando! Pelo menos, estávamos na praia com nossos amigos quando o Brasil perdeu feio. Consigo imaginar dias piores!',
  },
  {
    data: 'Atualmente',
    titulo: 'Seguimos...',
    imagem: atual,
    focoImagem: 'left center',
    legenda:
      'O tempo passou e muita coisa acontece. Coloquei algumas coisas, mas a melhor de todas elas é que nós continuamos assim... Juntinhos, com muito amor',
  },
]

const MARCOS_POR_LINHA = 8 // mude aqui para ter mais ou menos pontos por linha

function dividirEmLinhas(lista, tamanho) {
  const linhas = []
  for (let i = 0; i < lista.length; i += tamanho) {
    linhas.push(lista.slice(i, i + tamanho))
  }
  return linhas
}

export default function TimelineSection() {
  const [marcoAberto, setMarcoAberto] = useState(null)
  const linhas = dividirEmLinhas(marcos, MARCOS_POR_LINHA)

  return (
    <>
      <div className={styles.pagina}>
        <header className={styles.cabecalho}>
          <h1 className={styles.titulo}>Linha do Tempo!</h1>
          <p className={styles.subtitulo}>
            Cada ponto é um - dos muitos - momentos que marcaram a nossa
            jornada.
          </p>
        </header>

        <div className={styles.linhas}>
          {linhas.map((linha, indiceLinha) => (
            <div key={indiceLinha} className={styles.trilha}>
              {linha.map((marco, i) => {
                // índice real do marco na lista completa (abre o modal certo)
                const indiceReal = indiceLinha * MARCOS_POR_LINHA + i
                return (
                  <button
                    key={indiceReal}
                    onClick={() => setMarcoAberto(indiceReal)}
                    className={styles.ponto}
                  >
                    <span className={styles.bolinha} />
                    <span className={styles.data}>{marco.data}</span>
                  </button>
                )
              })}
            </div>
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
