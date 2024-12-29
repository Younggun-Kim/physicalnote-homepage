export interface GetBillingKeysResponseDto {
  customerKey: string;
  cardNumber: string;
  formattedCardNumber: string;
  cardType: string;
  cardOwnerType: string;
  issuerCode: string;
  issuerName: string;
  createdDate: string;
  active: 'YES' | 'NO';
  isDefault: 'YES' | 'NO';
}

export default GetBillingKeysResponseDto;
