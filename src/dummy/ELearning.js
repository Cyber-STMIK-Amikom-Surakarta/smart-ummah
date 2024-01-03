import IlmuTajwid1 from '../assets/images/e-learning/ilmu-tajwid/1.jpg'
import IlmuTajwid2 from '../assets/images/e-learning/ilmu-tajwid/2.jpg'
import IlmuTajwid3 from '../assets/images/e-learning/ilmu-tajwid/3.jpg'

import NamaAllah1 from '../assets/images/e-learning/nama-besar-allah/1.jpg'
import NamaAllah2 from '../assets/images/e-learning/nama-besar-allah/2.jpg'
import NamaAllah3 from '../assets/images/e-learning/nama-besar-allah/3.jpg'

import TataCaraWudhu1 from '../assets/images/e-learning/tata-cara-wudhu/1.jpg'
import TataCaraWudhu2 from '../assets/images/e-learning/tata-cara-wudhu/2.jpg'
import TataCaraWudhu3 from '../assets/images/e-learning/tata-cara-wudhu/3.jpg'

import TataCaraSholat1 from '../assets/images/e-learning/tata-cara-sholat/1.jpg'
import TataCaraSholat2 from '../assets/images/e-learning/tata-cara-sholat/2.jpg'
import TataCaraSholat3 from '../assets/images/e-learning/tata-cara-sholat/3.jpg'

const courses = [
  {
    title: 'Ilmu Tajwid',
    description: 'Dirancang khusus untuk membantu Anda memahami dan menguasai kaidah-kaidah bacaan Al-Qur\'an dengan benar',
    imgs: [
      IlmuTajwid1, IlmuTajwid2, IlmuTajwid3,
    ],
    tags: ['4 Minggu', 'Pemula'],
    author: 'Ustadz Adi Hidayat',
    kurikulum: [
      'Dasar Dasar Tajwid',
      'Kitabah',
      'Teori Tajwid',
      'Praktik Tajwid',
    ]
  },
  {
    title: 'Mengenal Nama Kebesaran Allah',
    description: 'Pelajari masing-masing Asmaul Husna, pemaknaannya, serta bagaimana setiap nama mencerminkan sifat-sifat Allah yang luar biasa.',
    imgs: [
      NamaAllah1, NamaAllah2, NamaAllah3,
    ],
    tags: ['2 Minggu', 'Pemula'],
    author: 'Ustadz Adi Hidayat',
    kurikulum: [
      '99 Nama kebesaran Allah dan Maknanya',
      'Penerapan dalam Perilaku',
      'Penerapan dalam Doa',
    ]
  },
  {
    title: 'Tatacara Wudhu',
    description: 'Penjelasan mendalam tentang setiap langkah wudhu, mulai dari niat hingga menyeka kaki, dengan panduan yang akurat dan sesuai sunnah.',
    imgs: [
      TataCaraWudhu1, TataCaraWudhu2, TataCaraWudhu3,
    ],
    tags: ['1 Minggu', 'Pemula'],
    author: 'Ustadz Adi Hidayat',
    kurikulum: [
      'Apa itu Wudhu',
      'Jenis Jenis air untuk menyucikan',
      'Tata Cara Wudhu sesuai sunnah',
    ]
  },
  {
    title: 'Tatacara Sholat',
    description: 'Memberikan pemahaman mendalam tentang setiap tahap dalam tata cara sholat, mulai dari niat hingga salam.',
    imgs: [
      TataCaraSholat1, TataCaraSholat2, TataCaraSholat3,
    ],
    tags: ['6 Minggu', 'Pemula'],
    author: 'Ustadz Adi Hidayat',
    kurikulum: [
      'Dasar Dasar Tajwid',
      'Kitabah',
      'Teori Tajwid',
      'Praktik Tajwid',
      'Ujian',
    ]
  },
]

export default courses;
