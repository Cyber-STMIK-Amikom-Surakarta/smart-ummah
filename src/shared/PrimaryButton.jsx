export default function Button({ children, className = '', minWidth = null }) {
  const convertedMinWidth = minWidth ? `min-w-[${minWidth}]` : '';

  return (
    <button className={`bg-[#FFB534] p-[20px] ${convertedMinWidth} rounded-full text-white ${className}`}>{children}</button>
  )
}

