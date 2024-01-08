export default function ProgressBar({ max, value, className, height = 14 }) {
  const widthBar = (max / value) * 100

  return (
    <div className='relative rounded-full bg-white shadow-3d'>
      <div className={`rounded-full ${className}`} style={{ width: `${widthBar}%`, height: height }}></div>
    </div>
  )
}
