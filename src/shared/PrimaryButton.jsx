export default function Button({ children, minWidth = null }) {
  const convertedMinWidth = minWidth ? `min-w-[${minWidth}]` : '';

  return (
    <button className={`bg-[#FFB534] p-[20px] ${convertedMinWidth} rounded-full text-white`}>{children}</button>
  )
}

