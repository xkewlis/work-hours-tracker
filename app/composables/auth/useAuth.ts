import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut as firebaseSignOut,
  type AuthProvider as FirebaseAuthProvider,
  type User as FirebaseUser
} from 'firebase/auth'
import { useCurrentUser, useFirebaseAuth } from 'vuefire'
import type { AuthProviderId, AuthUser } from '~/types/auth'

const providerFactories: Partial<Record<AuthProviderId, () => FirebaseAuthProvider>> = {
  google: () => new GoogleAuthProvider()
}

const firebaseProviderIds: Record<string, AuthProviderId> = {
  'google.com': 'google',
  'facebook.com': 'facebook',
  'github.com': 'github'
}

function toAuthUser(user: FirebaseUser): AuthUser {
  const rawProviderId = user.providerData[0]?.providerId ?? 'google.com'
  return {
    uid: user.uid,
    displayName: user.displayName,
    email: user.email,
    photoURL: user.photoURL,
    providerId: firebaseProviderIds[rawProviderId] ?? 'google'
  }
}

export function useAuth() {
  const firebaseUser = useCurrentUser()
  const auth = useFirebaseAuth()

  const user = computed<AuthUser | null>(() => firebaseUser.value ? toAuthUser(firebaseUser.value) : null)
  const isAuthenticated = computed(() => user.value !== null)

  async function signInWithProvider(providerId: AuthProviderId) {
    if (!auth) throw new Error('Firebase auth is not initialized')
    const factory = providerFactories[providerId]
    if (!factory) throw new Error(`Sign-in with "${providerId}" is not supported yet`)
    await signInWithPopup(auth, factory())
  }

  async function signOut() {
    if (!auth) throw new Error('Firebase auth is not initialized')
    await firebaseSignOut(auth)
  }

  return { user, isAuthenticated, signInWithProvider, signOut }
}
