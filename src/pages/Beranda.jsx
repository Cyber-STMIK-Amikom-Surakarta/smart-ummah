import ProgramKami from "./../components/Beranda/ProgramKami";
import Kursus from "./../components/Beranda/kursus";
import BannerBeranda from "../components/Beranda/Banner";
import Navbar from "./../components/Beranda/Navbar";
import Podcast from "./../components/Beranda/Podcast";
import Event from "./../components/Beranda/EventKami";
import Donasi from "./../components/Beranda/Donasi";
import Mitra from "./../components/Beranda/Mitra";
import Kontak from "./../components/Beranda/kontak";
import Blog from "./../components/Beranda/Blog";
import PodcastData from '../dummy/Podcast';
import EventData from '../dummy/EventKami';
import donasi from '../dummy/Donasi';
import blog from '../dummy/Blog';
import Footer from "../components/Beranda/footer";


export default function Beranda() {
  return (
    <div>
      <Navbar></Navbar>
      <BannerBeranda></BannerBeranda>
      <ProgramKami></ProgramKami>
      <Kursus></Kursus>
      <Podcast podcast={PodcastData}></Podcast>
      <Event EventKami={EventData} ></Event>   
      <Donasi donasi={donasi}></Donasi>
      <Mitra></Mitra>
      <Kontak></Kontak>
      <Blog blog={blog}></Blog> 
      <Footer></Footer>
    </div>
  );
}