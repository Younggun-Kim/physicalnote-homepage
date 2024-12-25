import CardView from '@/app/mypage/subscribe/components/card/CardView';

export default function Subscribe() {
  return (
    <div className={['w-full flex flex-col justify-start items-center', 'mt-10 sm:mt-12'].join(' ')}>
      <CardView alignCenter={false} />
    </div>
  );
}
