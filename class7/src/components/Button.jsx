
const Button = ({children, onClick, variant = "primary"}) => {
  
  const styles = {
    primary : "bg-emerald-800 hover:bg-emerald-900 px-34",
    danger : "bg-red-800 hover:bg-red-900 px-26 md:px-24"
  }

  return (
      <button className={`text-5xl cursor-pointer rounded md:px-12 md:py-1 md:text-2xl  py-3 mt-3 ${styles[variant]}`} onClick={onClick}>{children} </button>
  )
}

export default Button
