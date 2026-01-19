
const Button = ({children, onClick, variant = "primary"}) => {
  
  const styles = {
    primary : "bg-emerald-600",
    danger : "bg-red-600"
  }

  return (
      <button className={`text-2xl cursor-pointer m-2 rounded px-4 py-1 mt-3 ${styles[variant]}`} onClick={onClick}>{children} </button>
  )
}

export default Button
