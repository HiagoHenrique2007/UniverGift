export function WhyBox({ icon_path, text, alt }) {

  return (
    <li className="f-c">
      <div>
        <img src={ icon_path } alt={ alt } />
      </div>
      <div>
        <p className="why-text">
          { text }
        </p>
      </div>
    </li>
  )

}