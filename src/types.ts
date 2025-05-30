export type SectorType = 'logistics' | 'marketplace' | 'transport' | 'fintech' | 'other';
export type ProviderCountType = 'less100' | '100-500' | '500-1000' | '1000-2000' | '2000-5000' | 'more5000';
export type MainPainType = 'fastPayment' | 'schedule' | 'identity' | 'capital' | 'other';
export type RoleType = 'operationsDirector' | 'financialDirector' | 'logisticsManager' | 'transportManager' | 'cLevel' | 'operations' | 'other';
export type PaymentVolumeType = '100-200k' | '200-300k' | '300-400k' | '400-500k' | 'more500k';

export interface FormData {
  companyName: string;
  responsibleName: string;
  email: string;
  phone: string;
  sector: SectorType;
  otherSector?: string;
  providerCount: ProviderCountType;
  mainPain: MainPainType;
  otherPain?: string;
  role: RoleType;
  otherRole?: string;
  paymentVolume: PaymentVolumeType;
}