import { Button } from "./components/Button.jsx"
import { WhyBox } from "./components/WhyBox.jsx"

export function Home() {

  const the_whys = [
    {
      id: 1,
      icon_path: './vipIcon.png',
      text: 'EXCLUSIVA'
    },
    {
      id: 2,
      icon_path: './diamondIcon.png',
      text: 'UNICA'
    },
    {
      id: 3,
      icon_path: './beautyIcon.png',
      text: 'ALTA QUALIDADE'
    },
    {
      id: 4,
      icon_path: './fastDeliveryIcon.png',
      text: 'ENTREGA RAPIDA'
    }
  ]

  return (
    <>
      <div className="container">
        <div>
          <h1 className="uppercase text-broken ">
            <div>
              <span className="text-enfase">o que acha</span> <span>de uma</span>
            </div>
            <span>
              caneca personalidada
            </span>
            <span>
              apenas de universitario?
            </span> 
          </h1>
        </div>

        <div>
          <h2 className="text-broken no-bold">
            <span>
              Personalize ela com seu <b>nome</b> e  
            </span>
            <span>
               <b>curso</b> e <b>simbolo</b> do curso.
            </span>
          </h2>
        </div>

        <div>
          <b>
            <p className="text-broken uppercase text-md">
              <span>
                Garanta ja a sua e não perca
              </span>
              <span>
                essa chance!
              </span>
            </p>
          </b>
        </div>

        <div className="caneca-cta">
          <div>
            <img src="./caneca.png" alt="ecemplo de caneca personalizada" />
          </div>

          <div  className="f-c">
            <div>
              <b>
                <p className="uppercase text-enfase text-enfase-right text-lg">
                  não perca
                </p>
              </b>
            </div>

            <div>
              <b>
                <p className="price uppercase text-md">
                  apenas R$
                  <span className="price-colored">
                    50,00
                  </span>
                </p>
              </b>
            
            </div>

            <div>
              <Button content='garanta a sua' />
            </div>
          </div>
        </div>

        <div>
          <div>
            <h3 className="text-lg uppercase">
                <span className="text-enfase">porquê </span> <span>garantir a sua caneca</span>
            </h3>
          </div>
          <div>
            <ul>
              { the_whys.map((why) => {
                return <WhyBox key={why.id} icon_path={why.icon_path} text={why.text} />
              }) }
            </ul>
          </div>
        </div>

        <div>
          <div className="counter-screen">
            <b>
              <p className="text-broken">
                <span>Pessoas que ja</span> <span>garantiram sua</span> <span>caneca</span>
              </p>
            </b>
            <div>
              <img className="arrow" src="./arrow.png" alt="seta indicando o numero de pessoas que ja compraram" />
            </div>
            <div>
              <img src="./circleCounter.png" alt="numero de pessoas que ja compraram" />
            </div>
          </div>
        </div>

        <div>
          <div>
            <p className="text-c">
              <strong>
                MAS CORRE!
              </strong>
            </p>
            <p className="uppercase text-broken">
              <span>
                as reservas estão acabando,
              </span>
              <span>
                restam <b>menos de 200 canecas!</b>
              </span>
            </p>
          </div>
        </div>
        
        <div>
          <Button class_name='btn-cta' otherClass='btn-3' content={'garanta rapido'} />
        </div>

      </div>
    </>
  )
}
