// 구독 취소 사유
export type CancelType =
  | 'OTHER_SITE_BETTER' // '다른 사이트가 더 좋음'
  | 'RARELY_USED' // '자주 사용하지 않음
  | 'NOT_SATISFIED' // '서비스 불만족'
  | 'EXPENSIVE' // '가격이 비쌈'
  | 'CONTENT_INSUFFICIENT' // '콘텐츠 부족'
  | 'OTHER'; // '기타'
