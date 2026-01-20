
const Button = ({children, onClick, variant = "primary"}) => {
  
  const styles = {
    primary : "bg-emerald-600",
    danger : "bg-red-600"
  }

  return (
      <button className={`text-5xl cursor-pointer m-2 rounded md:px-4 md:py-1 md:text-2xl px-6 py-3 mt-3 ${styles[variant]}`} onClick={onClick}>{children} </button>
  )
}

export default Button
