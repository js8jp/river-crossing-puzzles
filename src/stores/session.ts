import type { Session } from '@/types/session'

/**
 * セッション管理
 */
export const useSessionStore = defineStore('session', () => {
  const state = useStorage<Session>(
    'RIVER_CROSSING_FANTASY_SESSION',
    {
      introduction: false,
      settings: false,
      navigation: false,
      tab: 0,
      sound: false,
      solve: false,
    },
    sessionStorage,
  )
  return {
    state,
  }
})
