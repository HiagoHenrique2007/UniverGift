export function Button({ content, otherClass }) {
  return (
    <div>
      <button className={`btn-blue ${ otherClass ? otherClass : '' } `} >
        <span className="uppercase">
          { content }  
        </span>
        
      </button>
    </div>
  )
}