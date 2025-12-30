const Card = ({ children, bg = 'bg-gray-100' }) => {
  return (
    // Using ${bg} to allow dynamic background color via props. You must use `` for template literals
    // Template literals allow embedded expressions, which makes it easy to create strings with dynamic content.
    <div className={`${bg} p-6 rounded-lg shadow-md`}> 
        { children }
    </div>
  )
}

export default Card