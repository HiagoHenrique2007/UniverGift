import { Button } from "./Button/Button.jsx"

export function Home() {

  return (
    <>
      <div>
        <div>
          <h1 className="uppercase text-broken text-lg">
            <span>
              <span className="text-enfase">o que acha</span> de uma
            </span>
            <span>
              caneca personalidada de
            </span>
            <span>
              universitario?
            </span> 
          </h1>
        </div>

        <div>
          <h2 className="text-broken no-bold">
            <span>
              Personalize ela com seu nome e  
            </span>
            <span>
               curso, dando seu toque unico.
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
              <Button content='garanta a sua' width={7.6} height={2} />
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
