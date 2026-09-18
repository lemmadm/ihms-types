export interface ProviderType {
  code: string;
  display_name: string;
  is_active?: boolean;
}

export interface Plan {
  code: string;
  display_name: string;
  is_active?: boolean;
}

export interface PlanLevel {
  level_number: number;
  display_name: string;
}

export interface ProviderStatus {
  code: string;
  display_name: string;
}

export interface BusinessType {
  code: string;
  display_name: string;
}

export interface ClaimsSubmissionMethod {
  code: string;
  display_name: string;
}

export interface ProviderClassification {
  code: string;
  display_name: string;
}

export interface SlaStatus {
  code: string;
  display_name: string;
}

export interface NigerianBank {
  bank_id: number;
  bank_code?: string;
  bank_name: string;
  institution_type: string;
}

export interface RegulatoryDocumentType {
  code: string;
  display_name: string;
}

export interface SpecialistRecord {
  specialist_id?: number;
  specialist_name: string;
  specialization: string;
  clinic_date?: string;
  clinic_start_time?: string;
  clinic_end_time?: string;
  is_active?: boolean;
}

export interface RegulatoryDocumentRecord {
  document_id?: number;
  document_type_code: string;
  other_description?: string;
  file_url: string;
  original_file_name?: string;
  mime_type?: string;
  issue_date?: string;
  expiry_date?: string;
  is_current?: boolean;
}

export interface ContactPersonRecord {
  contact_id?: number;
  first_name: string;
  last_name: string;
  mobile: string;
  email: string;
  is_primary?: boolean;
}

export interface ProviderBankRecord {
  id?: number;
  bank_id: number;
  bank_name?: string;
  bank_code?: string;
  account_number: string;
  account_name: string;
  is_primary: boolean;
}

export interface CoverageType {
  code: string;
  display_name: string;
}

export interface ProviderCoverageRecord {
  id?: number;
  coverage_type_code: string;
  coverage_type_name?: string;
  effective_date: string;
  termination_date?: string | null;
  is_current: boolean;
}

export interface DashboardStats {
  total_providers: number;
  active_count: number;
  suspended_count: number;
  closed_count: number;
  hospital_count: number;
  dental_count: number;
  optical_count: number;
  diagnostics_count: number;
  gym_count: number;
  service_count: number;
  tier_a_count: number;
  tier_b_count: number;
  tier_c_count: number;
  tariff_agreed_count: number;
  tariff_pending_count: number;
  distinct_states: number;
  providers_with_specialists: number;
  total_specialists: number;
  providers_with_docs: number;
  total_documents: number;
}

export interface NormalizedProviderRecord {
  provider_id: string | number;
  name: string;
  hmo_code?: string;
  category?: string;
  tier?: string;
  country?: string;
  state?: string;
  city?: string;
  lga?: string;
  postal_code?: string;
  address?: string;
  contact_address?: string;
  phone?: string;
  email?: string;
  contact_person?: string;
  nhia_accredited?: boolean;
  rating?: number | string;
  provider_type_code: string;
  provider_type_name?: string;
  plan_code: string;
  plan_name?: string;
  plan_level: number;
  plan_level_name?: string;
  provider_status_code: string;
  status_name?: string;
  business_type_code?: string;
  business_type_name?: string;
  tariff_agreed: boolean;
  claims_submission_code?: string;
  claims_submission_method_name?: string;
  bank_id?: number;
  bank_name?: string;
  bank_code?: string;
  bank_institution_type?: string;
  account_number?: string;
  account_name?: string;
  tin_number?: string;
  assigned_manager_id?: number | string | null;
  assigned_manager_name?: string | null;
  provider_classification_code?: string;
  classification_name?: string;
  sla_status_code?: string;
  sla_status_name?: string;
  capitated_status?: 'CAPITATED' | 'PHARMACY' | 'BLANK';
  effective_date?: string;
  latitude?: string;
  longitude?: string;
  location_verified?: boolean;
  verified_by?: number | string | null;
  verified_at?: string;
  front_view_url?: string;
  front_view_original_name?: string;
  hall_view_url?: string;
  hall_view_original_name?: string;
  specialist_available: boolean;
  specialists_list?: SpecialistRecord[];
  documents_list?: RegulatoryDocumentRecord[];
  contact_persons_list?: ContactPersonRecord[];
  provider_banks_list?: ProviderBankRecord[];
  coverage_list?: ProviderCoverageRecord[];
  created_at?: string;
  updated_at?: string;
}

export interface DatabaseStatus {
  connected: boolean;
  message: string;
  host?: string;
  database?: string;
  version?: string;
}

export interface LookupOptionsResponse {
  source: 'neon_postgres' | 'local_fallback' | 'fallback_error';
  data: {
    provider_types: ProviderType[];
    plans: Plan[];
    plan_levels: PlanLevel[];
    provider_statuses: ProviderStatus[];
    business_types: BusinessType[];
    claims_submission_methods: ClaimsSubmissionMethod[];
    provider_classifications: ProviderClassification[];
    sla_statuses: SlaStatus[];
    regulatory_document_types: RegulatoryDocumentType[];
    nigerian_banks: NigerianBank[];
    coverage_types: CoverageType[];
  };
}

export type UserRole =
  | 'ADMIN'
  | 'DOCTOR'
  | 'DIRECTOR'
  | 'FINANCE'
  | 'MANAGER'
  | 'CLAIMS_DEPARTMENT';

export const ROLE_PERMISSIONS: Record<UserRole, string[]> = {
  ADMIN: [
    'manage_users', 'create_users', 'view_users', 'edit_users', 'delete_users',
    'view_providers', 'view_provider_details',
    'view_facility_overview', 'view_specialists_roster', 'view_billing', 'view_regulatory_documents',
    'view_provider_financials',
    'add_providers', 'edit_providers', 'delete_providers', 'switch_provider_status',
    'upload_documents', 'export_data', 'manage_settings',
  ],
  DOCTOR: [
    'view_providers', 'view_provider_details',
    'view_facility_overview', 'view_specialists_roster', 'view_billing', 'view_regulatory_documents',
    'add_providers', 'edit_providers', 'switch_provider_status',
    'upload_documents', 'export_data',
  ],
  DIRECTOR: [
    'view_providers', 'view_provider_details',
    'view_facility_overview', 'view_specialists_roster', 'view_billing', 'view_regulatory_documents',
    'export_data',
  ],
  FINANCE: [
    'view_providers', 'view_billing', 'view_provider_financials',
  ],
  MANAGER: [
    'view_providers', 'view_provider_details',
    'view_facility_overview', 'view_specialists_roster', 'view_billing', 'view_regulatory_documents',
    'add_providers', 'edit_providers', 'switch_provider_status',
    'upload_documents', 'export_data',
  ],
  CLAIMS_DEPARTMENT: [
    'view_providers', 'view_provider_details',
    'view_facility_overview', 'view_specialists_roster', 'view_billing', 'view_regulatory_documents',
    'export_data',
  ],
};

export const ROLE_DISPLAY_NAMES: Record<UserRole, string> = {
  ADMIN: 'Administrator',
  DOCTOR: 'Doctor',
  DIRECTOR: 'Director',
  FINANCE: 'Finance Officer',
  MANAGER: 'Provider Manager',
  CLAIMS_DEPARTMENT: 'Claims Department',
};

export interface AppUserRecord {
  user_id: number | string;
  full_name: string;
  email: string;
  role: UserRole;
  role_display: string;
  department: string;
  phone?: string;
  hmo_staff_id?: string;
  status: 'ACTIVE' | 'SUSPENDED' | 'PENDING_ACTIVATION';
  avatar_url?: string;
  tier_authority?: 'tier1_2' | 'tier3' | 'advisory';
  specialization?: string;
  mdcn_number?: string;
  notes?: string;
  permissions?: string[];
  assigned_state?: string | null;
  assigned_city?: string | null;
  assigned_zone?: string | null;
  managed_provider_ids?: (string | number)[] | null;
  secondary_email?: string | null;
  voip_extension?: string | null;
  physical_base?: string | null;
  notification_prefs?: {
    emergencyCode?: boolean;
    licenseExpiry?: boolean;
    highValueClaim?: boolean;
    tariffSchedule?: boolean;
    regionalOutage?: boolean;
  } | null;
  last_login_at?: string;
  created_by?: string;
  created_at?: string;
  updated_at?: string;
}

export interface UserProfilingStats {
  total_users: number;
  active_users: number;
  suspended_users: number;
  admins: number;
  doctors: number;
  directors: number;
  finance_officers: number;
  managers: number;
  claims_department: number;
}

export function hasPermission(
  user: AppUserRecord | { role?: string; permissions?: string[] } | null | undefined,
  permission: string
): boolean {
  if (!user || !user.role) return false;
  const role = String(user.role).trim().toUpperCase() as UserRole;
  const rolePerms = ROLE_PERMISSIONS[role];
  if (!rolePerms) return false;
  if (rolePerms.includes(permission)) return true;
  if (user.permissions && user.permissions.includes(permission)) return true;
  return false;
}

export type ProviderModuleKey = 'overview' | 'specialists' | 'billing' | 'documents';

export const MODULE_PERMISSION_MAP: Record<ProviderModuleKey, string> = {
  overview: 'view_facility_overview',
  specialists: 'view_specialists_roster',
  billing: 'view_billing',
  documents: 'view_regulatory_documents',
};

export function canAccessScreen(
  user: AppUserRecord | { role?: string } | null | undefined,
  screen: string
): boolean {
  if (!user || !user.role) return false;
  const role = String(user.role).trim().toUpperCase() as UserRole;

  switch (screen) {
    case 'users':
    case 'admin-onboard':
      return role === 'ADMIN';
    case 'profile':
      return true;
    case 'directory':
    case 'details':
      return ROLE_PERMISSIONS[role]?.some(p =>
        p === 'view_providers' || p === 'view_provider_details' || p === 'view_provider_financials' || p.startsWith('view_')
      ) || false;
    case 'onboarding':
      return hasPermission(user as AppUserRecord, 'add_providers');
    default:
      return false;
  }
}

export function canViewModule(
  user: AppUserRecord | { role?: string } | null | undefined,
  module: ProviderModuleKey
): boolean {
  if (!user || !user.role) return false;
  // FINANCE can only see billing
  const role = String(user.role).trim().toUpperCase() as UserRole;
  if (role === 'FINANCE') return module === 'billing';
  const perm = MODULE_PERMISSION_MAP[module];
  return hasPermission(user as AppUserRecord, perm) || hasPermission(user as AppUserRecord, 'view_provider_details') || hasPermission(user as AppUserRecord, 'view_providers');
}

export function getVisibleTabs(user: AppUserRecord | { role?: string } | null | undefined): ProviderModuleKey[] {
  if (!user || !user.role) return [];
  const role = String(user.role).trim().toUpperCase() as UserRole;
  if (role === 'FINANCE') return ['billing'];
  const all: ProviderModuleKey[] = ['overview', 'specialists', 'billing', 'documents'];
  return all.filter(m => canViewModule(user, m));
}

export function canManagerHandleProvider(
  user: AppUserRecord | { role?: string; assigned_state?: string | null; assigned_city?: string | null; managed_provider_ids?: any; user_id?: any } | null | undefined,
  provider: NormalizedProviderRecord | { state?: string; city?: string; provider_id?: string | number; assigned_manager_id?: any } | null | undefined
): boolean {
  if (!user || !provider) return false;
  const role = String((user as any).role).trim().toUpperCase();
  if (role !== 'MANAGER') return true; // only MANAGER is location-restricted; ADMIN/DOCTOR bypass
  if (role === 'ADMIN') return true;
  const assignedState = (user as AppUserRecord).assigned_state;
  const assignedCity = (user as AppUserRecord).assigned_city;
  const managedIds = (user as AppUserRecord).managed_provider_ids;
  const userId = (user as any).user_id;
  // Direct assignment via provider.assigned_manager_id
  if ((provider as any).assigned_manager_id && String((provider as any).assigned_manager_id) === String(userId)) return true;
  // If no assignment at all, allow all (super-manager) — Super Admin should assign locations to restrict
  const hasAssignment = Boolean((assignedState && String(assignedState).trim()) || (assignedCity && String(assignedCity).trim()) || (managedIds && managedIds.length > 0));
  if (!hasAssignment) return true;
  if (assignedState && provider.state && String(provider.state).toLowerCase().trim() === String(assignedState).toLowerCase().trim()) return true;
  if (assignedCity && provider.city && String(provider.city).toLowerCase().trim() === String(assignedCity).toLowerCase().trim()) return true;
  if (managedIds && provider.provider_id && managedIds.map(String).includes(String(provider.provider_id))) return true;
  return false;
}

export function canEditProvider(
  user?: AppUserRecord | { role?: string } | null,
  provider?: NormalizedProviderRecord | null
): boolean {
  if (!user || !user.role) return false;
  const role = String(user.role).trim().toUpperCase() as UserRole;
  const hasEdit = ROLE_PERMISSIONS[role]?.includes('edit_providers') || hasPermission(user as AppUserRecord, 'edit_providers');
  if (!hasEdit) return false;
  if (provider && role === 'MANAGER' && !canManagerHandleProvider(user as AppUserRecord, provider)) return false;
  return true;
}

export function canAddProvider(
  user?: AppUserRecord | { role?: string } | null,
  targetState?: string | null
): boolean {
  if (!user || !user.role) return false;
  const role = String(user.role).trim().toUpperCase() as UserRole;
  const hasAdd = ROLE_PERMISSIONS[role]?.includes('add_providers') || hasPermission(user as AppUserRecord, 'add_providers');
  if (!hasAdd) return false;
  if (role === 'MANAGER' && targetState && (user as AppUserRecord).assigned_state) {
    if (String(targetState).toLowerCase().trim() !== String((user as AppUserRecord).assigned_state).toLowerCase().trim()) return false;
  }
  return true;
}

export function canDeleteProvider(user?: AppUserRecord | { role?: string } | null): boolean {
  if (!user || !user.role) return false;
  const role = String(user.role).trim().toUpperCase() as UserRole;
  return role === 'ADMIN' || hasPermission(user as AppUserRecord, 'delete_providers');
}

export function canSwitchProviderStatus(
  user?: AppUserRecord | { role?: string } | null,
  provider?: NormalizedProviderRecord | null
): boolean {
  if (!user || !user.role) return false;
  const role = String(user.role).trim().toUpperCase() as UserRole;
  const hasSwitch = ROLE_PERMISSIONS[role]?.includes('switch_provider_status') || hasPermission(user as AppUserRecord, 'switch_provider_status');
  if (!hasSwitch) return false;
  if (provider && role === 'MANAGER' && !canManagerHandleProvider(user as AppUserRecord, provider)) return false;
  return true;
}

export function canManageUsers(user?: AppUserRecord | { role?: string } | null): boolean {
  if (!user || !user.role) return false;
  const role = String(user.role).trim().toUpperCase() as UserRole;
  return role === 'ADMIN' || ROLE_PERMISSIONS[role]?.includes('manage_users') || false;
}

export function canViewFinancials(user?: AppUserRecord | { role?: string } | null): boolean {
  if (!user || !user.role) return false;
  return hasPermission(user as AppUserRecord, 'view_provider_financials') || hasPermission(user as AppUserRecord, 'view_billing');
}

export function canUploadDocuments(
  user?: AppUserRecord | { role?: string } | null,
  provider?: NormalizedProviderRecord | null
): boolean {
  if (!user || !user.role) return false;
  const role = String(user.role).trim().toUpperCase() as UserRole;
  const hasUpload = ROLE_PERMISSIONS[role]?.includes('upload_documents') || false;
  if (!hasUpload) return false;
  if (provider && role === 'MANAGER' && !canManagerHandleProvider(user as AppUserRecord, provider)) return false;
  return true;
}

export function isReadOnlyViewer(user?: AppUserRecord | { role?: string } | null): boolean {
  if (!user || !user.role) return true;
  const role = String(user.role).trim().toUpperCase() as UserRole;
  return role === 'DIRECTOR' || role === 'CLAIMS_DEPARTMENT' || role === 'FINANCE';
}
