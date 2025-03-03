export function Button({ content, width, height }) {
  return (
    <div>
      <button style={{ width: width + 'rem', height: height + 'rem' }}>
        <span>
          { content }  
        </span>
        
      </button>
    </div>
  )
}