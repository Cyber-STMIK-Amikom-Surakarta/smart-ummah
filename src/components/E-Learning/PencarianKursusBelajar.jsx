import PrimaryButton from '../../shared/PrimaryButton';
import SearchIcon from '../../assets/images/Search.svg';

export default function PencarianKursusBelajar() {
  return (
    <section className='flex justify-between items-center'>
      <div className='flex gap-2 items-center rounded-[50px] py-1 pl-4 pr-2 shadow-3d'>
        <img src={SearchIcon} alt='Cari' />
        <input type='text' name='pencarian-kursus' id='pencarian-kursus' className='' placeholder='Cari kursus pencarian' />
        <PrimaryButton>Cari</PrimaryButton>
      </div>

      <div>
        <PrimaryButton>Lihat Semua Kelas</PrimaryButton>
      </div>
    </section>
  )
}
