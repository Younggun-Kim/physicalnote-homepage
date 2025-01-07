export default function PriceContentRefundDescriptionFirst() {
  const pStyle = 'flex flex-col justify-start items-start font-sans font-normal text-gray1 text-xs';
  return (
    <p className={pStyle}>
      <span className={'font-sans font-normal text-gray1 text-2xs md:text-base'}>
        1. 서비스에 대한 환불 기준은 다음과 같습니다.
      </span>
      <span className={'font-sans font-normal text-gray1 text-2xs md:text-base'}>&middot; 월 결제 구독자:</span>
      <span className={'font-sans font-normal text-gray1 text-2xs md:text-base'}>
        &emsp;&middot; 구독 해지 시 다음 정기 결제일부터 요금이 청구되지 않으며, 그 전까지는 정상적으로 서비스를 이용할
        수 있습니다.
      </span>
      <span className={'font-sans font-normal text-gray1 text-2xs md:text-base'}>&middot; 연 결제 구독자:</span>
      <span className={'font-sans font-normal text-gray1 text-2xs md:text-base'}>
        &emsp;&middot; 중도 계약 해지 시 총 결제 금액의 20%를 위약금으로 차감하며, 위약금은 추가 할인금 10%와 법정
        위약금 10%를 포함합니다.
      </span>
      <span className={'font-sans font-normal text-gray1 text-2xs md:text-base'}>
        &emsp;&middot; 위약금을 제외한 금액은 남은 개월 수에 비례하여 환불됩니다.
      </span>
      <span className={'font-sans font-normal text-gray1 text-2xs md:text-base'}>1. 청약 철회 가능 기간</span>
      <span className={'font-sans font-normal text-gray1 text-2xs md:text-base'}>
        &middot; 구독 결제 후 7일 이내 서비스가 시작되지 않은 경우 전액 환불이 가능합니다.
      </span>
      <span className={'font-sans font-normal text-gray1 text-2xs md:text-base'}>
        &middot; (전자상거래법 제17조: 청약 철회 규정에 따름).
      </span>
      <span className={'font-sans font-normal text-gray1 text-2xs md:text-base'}>1. 예외 사항</span>
      <span className={'font-sans font-normal text-gray1 text-2xs md:text-base'}>
        &middot; 이용자가 관계법령 및 본 약관의 규정을 위반하여 회사로부터 강제 해지 처리가 되는 경우, 본 조의 환불
        규정은 적용되지 않습니다.
      </span>
    </p>
  );
}
