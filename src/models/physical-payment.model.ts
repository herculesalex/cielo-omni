import { AirlineDataModel } from './airline-data.model';
import { PhysicalCreditCardModel } from './physical-credit-card.model';
import { EnumPaymentInterest, EnumPhysicalCardType } from "../enums";
import { RecurrentPaymentModel } from './recurrent-payment';

export interface PhysicalPaymentRequestModel {
  /**
   * Número de Parcelas.
   */
  installments: number;
  /**
   * Tipo de parcelamento - Loja (ByMerchant) ou Cartão (ByIssuer).
   */
  interest?: EnumPaymentInterest;
  /**
   * Booleano que identifica que a autorização deve ser com captura automática.
   */
  capture?: boolean;
    /**
   * Data e Hora da captura da transação
   */
  paymentDateTime: string;
  /**
   * Texto impresso na fatura bancaria comprador - Exclusivo para VISA/MASTER - não permite caracteres especiais - Ver Anexo
   */
  softDescriptor: string;
  /**
   * Dados do cartão
   */
  creditCard: PhysicalCreditCardModel;
  /**
   * Tipo do Meio de Pagamento.
   */
  type: EnumPhysicalCardType;
  /**
   * Valor do Pedido (ser enviado em centavos).
   */
  amount: number;
}