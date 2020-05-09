import { CardOnFileModel } from './card-on-file.model';
import { EnumBrands, EnumSecurityCodeStatus, EnumInputMode, EnumAuthenticationMethod } from "../enums";

export interface PhysicalCreditCardModel {
    /**
     * 	Número do Cartão do Comprador.
     */
    cardNumber?: string;
    /**
     * Data de validade impresso no cartão.
     */
    expirationDate?: string;
    /**
   * Status da coleta de código de segurança (CVV).
   */
    SecurityCodeStatus: EnumSecurityCodeStatus;
    /**
     * Código de segurança impresso no verso do cartão - Ver Anexo.
     */
    securityCode?: string;
    /**
     * Identificação da bandeira obtida através do campo BrandId da PRODUCT TABLE.
     */
    brandId?: number;
    /**
     * Código do emissor obtido através do campo IssuerId da BIN TABLE.
     */
    issuerId?: number;
    /**
   * Identificação do modo de captura do cartão na transação. Essa informação deve ser obtida através do retorno da função PP_GetCard da BC.
   */
    inputMode?: EnumInputMode;
    /**
    * Método de autenticação.
    * - Se o cartão foi lido a partir da digitação verificar o bit 3 do atributo confParamOp04 das tabelas binTable, parameterTable e issuerTable. Se todos estiverem habilitados, a senha deve ser capturada e o authenticationMethod assume valor 2. Caso contrário, assume valor 1;
    * - Se o cartão foi lido a partir da trilha verificar o bit 3 do atributo confParamOp04 das tabelas binTable, parameterTable e issuerTable. Se todos estiverem habilitados, deve ser verificado o bit 2 do mesmo campo. Se este estiver com valor 1 deve ser capturada a senha. Se estiver com valor 0 a captura da senha vai depender do último dígito do service code;
    * - Se o cartão foi lido através do chip EMV, o authenticationMethod será preenchido com base no retorno da função PP_GoOnChip(). No resultado PP_GoOnChip(), onde se o campo da posição 003 do retorno da PP_GoOnChip() estiver com valor 1 indica que o pin foi validado off-line, o authenticationMethod será 3. Se o campo da posição 003 e o campo da posição 006 do retorno da PP_GoOnChip() estiverem com valor 0, o authenticationMethod será 1. Se o campo da posição 003 e o campo da posição 006 do retorno da PP_GoOnChip() estiverem com valores 0 e 1 respectivamente, o authenticationMethod será 2.
    */
    authenticationMethod?: EnumAuthenticationMethod;
        /**
     * Indica se o número do cartão será truncado no momento da impressão do comprovante. A solução de captura deve tomar essa decisão com base no confParamOp03 presente nas tabelas BIN TABLE, PARAMETER TABLE e ISSUER TABLE.
     */
    truncateCardNumberWhenPrinting: boolean;
    /**
     * Booleano que identifica se o cartão será salvo para gerar o CardToken.
     */
    saveCard?: boolean;
}