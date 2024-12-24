import HomeFirst from './components/home/HomeFirst';
import HomeSecond from './components/home/HomeSecond';
import HomeThird from './components/home/HomeThird';

export default function HomePage() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start">
      <HomeFirst />
      <HomeSecond />
      <HomeThird />
    </div>
  );
}
