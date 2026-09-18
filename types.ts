export type ScreenType = 'directory' | 'onboarding' | 'profile' | 'admin-onboard' | 'users' | 'details' | 'api-access';
export type NavTabType = 'hospitals' | 'locations' | 'accreditation' | 'claims' | 'analytics';
export type GeopoliticalZone = 'all' | 'sw' | 'nc' | 'ss' | 'nw' | 'se';
export type FacilityTier = 'tier-a' | 'tier-b' | 'tier-c';

export interface HealthcareFacility {
  id: string;
  name: string;
  shortCode: string;
  providerCode: string;
  nhiaCode: string;
  zone: GeopoliticalZone;
  zoneName: string;
  state: string;
  district: string;
  address: string;
  tier: FacilityTier;
  tierLabel: string;
  tierDescription: string;
  bedCount: string;
  icuCount: string;
  clinicalFocus: string;
  hmoStatus: 'active' | 'audit_due' | 'suspended';
  hmoStatusLabel: string;
  chiefMedicalDirector: string;
  directorQualifications: string;
  mdcnLicenseNumber: string;
  mdcnValidUntil: string;
  specialties: string[];
  equipmentHighlights: string;
  oxygenSystem: string;
  coveredPlans: string[];
  copayNote: string;
  ambulancePhone: string;
  ambulanceDetails: string;
  ambulanceEta: string;
  latitude: string;
  longitude: string;
  corridorLocationName: string;
  mapImageUrl: string;
  helipadStatus: string;
  branches: Array<{ name: string; location: string; type: string }>;
  has247Emergency: boolean;
  hasCashlessBilling: boolean;
  hasDedicatedIcu: boolean;
  hasTelemedicine: boolean;
}

export interface FilterState {
  searchQuery: string;
  zone: GeopoliticalZone;
  state: string;
  district: string;
  tiers: { 'tier-a': boolean; 'tier-b': boolean; 'tier-c': boolean };
  department: string;
  has247Emergency: boolean;
  hasCashlessBilling: boolean;
  hasDedicatedIcu: boolean;
  hasTelemedicine: boolean;
}

export interface EmergencyAuthCode {
  code: string;
  hospitalName: string;
  patientName: string;
  hmoId: string;
  clinicalIndication: string;
  approvedAmount: string;
  issuedAt: string;
  expiresInHours: number;
}
