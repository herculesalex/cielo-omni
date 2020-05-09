import { CustomerModel } from "../customer.model";
import { PhysicalPaymentRequestModel } from "../physical-payment.model";

export interface TransactionPhysicalCreditCardRequestModel {
  merchantOrderId: string;
  // customer: CustomerModel;
  payment: PhysicalPaymentRequestModel;
}
