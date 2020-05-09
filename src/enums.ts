export enum EnumIdentityType {
  RG = 'RG',
  CPF = 'CPF',
  CNPJ = 'CNPJ'
}

export enum EnumPaymentInterest {
  MERCHANT = 'ByMerchant',
  ISSUER = 'ByIssuer'
}

export enum EnumCardType {
  CREDIT = 'CreditCard',
  DEBIT = 'DebitCard'
}

export enum EnumPhysicalCardType {
  CREDIT = 'PhysicalCreditCard',
  DEBIT = 'PhysicalDebitCard'
}

export enum EnumBrands {
  VISA = 'VISA',
  MASTER = 'MASTER',
  AMEX = 'AMEX',
  ELO = 'ELO',
  AURA = 'AURA',
  JCB = 'JCB',
  DINERS = 'DINERS',
  DISCOVERY = 'DISCOVERY',
  HIPERCARD = 'HIPERCARD'
}

export enum EnumInputMode {
  TYPED = 'Typed',
  MAGSTRIPE = 'MagStripe',
  EMV = 'Emv'
}

export enum EnumAuthenticationMethod {
  NOPASSWORD = 'NoPassword',
  ONLINEAUTHENTICATION = 'OnlineAuthentication',
  OFFLINEAUTHENTICATION = 'OfflineAuthentication'
}

export enum EnumSecurityCodeStatus {
  COLLECTED = 'Collected',
  UNREADABLE = 'Unreadable',
  NONEXISTENT = 'Nonexistent'
}

export enum EnumRecurrentPaymentInterval {
  MONTHLY = 'MONTHLY',
  BIMONTHLY = 'BIMONTHLY',
  QUARTERLY = 'QUARTERLY',
  SEMIANNUAL = 'SEMIANNUAL',
  ANNUAL = 'ANNUAL',
}

export enum EnumRecurrentPaymentUpdateInterval {
  MONTHLY = 1,
  BIMONTHLY = 2,
  QUARTERLY = 3,
  SEMIANNUAL = 6,
  ANNUAL = 12,
}

export enum EnumPinPadPhysicalCharacteristics {
  WITHOUTPINPAD = 'WithoutPinPad',
  PINPADWITHOUTCHIPREADER = 'PinpadWithoutChipReader',
  PINPADWITHCHIPREADERWITHOUTSAMMODULE = 'PinPadWithChipReaderWithoutSamModule',
  PINPADWITHCHIPREADERWITHSAMMODULE = 'PinPadWithChipReaderWithSamModule',
  PINPADWITHCHIPREADERWITHOUTSAMANDCONTACTLESS = 'PinpadWithChipReaderWithoutSamAndContactless',
  PINPADWITHCHIPREADERWITHSAMANDCONTACTLESS = 'PinpadWithChipReaderWithSamAndContactless',
}
