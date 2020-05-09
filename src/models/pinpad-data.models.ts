import { CardOnFileModel } from './card-on-file.model';
import { EnumPinPadPhysicalCharacteristics } from "../enums";


export interface PinPadInformationModel {
  /**
   * Número Lógico definido no Concentrador Cielo.
   */
  TerminalId?: string;
  /**
   * Número de Série do Equipamento.
   */
  SerialNumber?: string;
  /**
   * Caracteristicas do PinPad.
   */
  PhysicalCharacteristics?: EnumPinPadPhysicalCharacteristics;
  /**
   * Retorno da função PP_GetInfo() da biblioteca compartilhada.
   */
  ReturnDataInfo?: string;
}