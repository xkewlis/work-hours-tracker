export type AuthProviderId = 'google' | 'facebook' | 'github'

export interface AuthUser {
  uid: string
  displayName: string | null
  email: string | null
  photoURL: string | null
  providerId: AuthProviderId
}
