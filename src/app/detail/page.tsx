'use client';
import DetailFirst from './components/detail/DetailFirst';
import DetailSecond from './components/detail/DetailSecond';
import DetailThird from './components/detail/DetailThird';
import DetailFourth from './components/detail/DetailFourth';
import DetailFifth from './components/detail/DetailFifth';
import DetailSix from './components/detail/DetailSix';

export default function Detail() {
  return (
    <div className="w-full">
      <DetailFirst />
      <DetailSecond />
      <DetailThird />
      <DetailFourth />
      <DetailFifth />
      <DetailSix />
    </div>
  );
}
