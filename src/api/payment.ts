import { instanceWithToken } from '@/api/base';
import GetBillingKeysResponseDto from '@/api/dto/payment/GetBillingKeysResponseDto';
import PostBillingKeyRequestDto from '@/api/dto/payment/billingKey/post/PostBillingKeyRequestDto';
import GetStatusResponseDto from '@/api/dto/payment/status/GetStatusResponseDto';
import RefundResultDto from '@/api/dto/payment/refund/RefundResultDto';
import RefundRequestDto from '@/api/dto/payment/refund/RefundRequestDto';
import PlanResponseDto from '@/api/dto/payment/PlanResponseDto';
import SubscriptionRequestDto from '@/api/dto/payment/SubscriptionRequestDto';
import DeleteBillingKeyResponseDto from './dto/payment/billingKey/delete/DelteBillingKeyResponseDto';

const prefix = 'admin/v1/subscriptions';
const Auth = {
  /**
   * 카드 조회
   */
  async getBillingKeys() {
    try {
      const url = `${prefix}/billing-keys`;
      return await instanceWithToken.get<GetBillingKeysResponseDto[]>(url);
    } catch (err) {
      return Promise.reject(err);
    }
  },
  /**
   * 카드 삭제
   */
  async deleteBillingKeys(customerKey: string) {
    try {
      const url = `${prefix}/billing-keys/${customerKey}`;
      return await instanceWithToken.delete<DeleteBillingKeyResponseDto>(url);
    } catch (err) {
      return Promise.reject(err);
    }
  },
  /**
   * 카드 등록
   */
  async postBillingKeys(dto: PostBillingKeyRequestDto) {
    try {
      const url = `${prefix}/billing-keys`;
      return await instanceWithToken.post<GetBillingKeysResponseDto>(url, dto);
    } catch (err) {
      return Promise.reject(err);
    }
  },
  /**
   * 대표 카드 설정
   */
  async putBillingKeysDefault(customerKey: string) {
    try {
      const url = `${prefix}/billing-keys/${customerKey}/default`;
      return await instanceWithToken.put<GetBillingKeysResponseDto>(url);
    } catch (err) {
      return Promise.reject(err);
    }
  },
  /**
   * 구독 정보 조회
   * 대표카드의 customerKey 필요
   */
  async getSubscriptionStatus(customerKey: string) {
    try {
      const url = `${prefix}/status?customerKey=${customerKey}`;
      return await instanceWithToken.get<GetStatusResponseDto>(url);
    } catch (err) {
      return Promise.reject(err);
    }
  },
  /**
   * 구독 해지
   */
  async deleteSubscription(dto: RefundRequestDto) {
    try {
      const url = `${prefix}?customerKey=${dto.customerKey}&cancelReason=${dto.cancelReason}`;
      return await instanceWithToken.delete<RefundResultDto>(url);
    } catch (err) {
      return Promise.reject(err);
    }
  },
  /**
   * 구독 플랜
   */
  async getSubscriptionPlans() {
    try {
      const url = `${prefix}/plans`;
      return await instanceWithToken.get<PlanResponseDto[]>(url);
    } catch (err) {
      return Promise.reject(err);
    }
  },
  /**
   * 구독하기
   */
  async postSubscribe(dto: SubscriptionRequestDto) {
    try {
      const url = `${prefix}`;
      return await instanceWithToken.post<GetStatusResponseDto>(url, dto);
    } catch (err) {
      return Promise.reject(err);
    }
  },
};

export default Auth;
