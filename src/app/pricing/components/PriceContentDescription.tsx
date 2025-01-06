export default function PriceContentDescription() {
  return (
    <div className="flex flex-col gap-4">
      <h6 className="font-sans font-bold text-xl text-black">피지컬 노트 이용시 혜택</h6>
      <p className="flex flex-col gap-[2.5] font-sans font-medium text-black text-base">
        <span>
          1. 기간 한정 이용 시(25.00.00 ~ 00.00) <span className="font-bold text-primary">10% 할인</span>
        </span>
        <span>
          2. 1년 단위로 결제 했을 경우 추가 <span className="font-bold text-primary">10% 할인</span>
        </span>
        <span>
          3. <span className="font-bold text-primary">오프라인 교육</span> 1회 가능
        </span>
      </p>
    </div>
  );
}
