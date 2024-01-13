import Button from '../../shared/PrimaryButton';

export default function Beranda() {
  return (
    <div className='bg-banner bg-center bg-cover h-screen flex flex-col items-center justify-center gap-[42px]'>
      <div className='flex flex-col items-center justify-center gap-[8px] w-[500px] text-center text-white'>
        <h1 className='text-[60px]'>Smart Ummah</h1>
        <p className='text-[20px]'>
          Kami hadir untuk membantu memperkaya pengetahuan Islami dan membimbing langkah Anda menuju kesuksesan yang berkelanjutan.
        </p>
      </div>
      <Button>Gabung Bersama Kami</Button>
    </div>
  ) 
} 
