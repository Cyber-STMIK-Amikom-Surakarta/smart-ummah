import {
  createHashRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import Beranda from '../pages/Beranda';
import ELearning from '../pages/ELearning';

// INFO : Tambahkan halaman baru disini...
const router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Beranda />} />
      <Route path="/e-learning" element={<ELearning />} />
    </>
  )
);

export default router;
