import type { Ref } from 'vue'
import type { Carrier, State } from '@/types'
import type { CarrierState } from '@/types/state'
export const carrierState: CarrierState = Object.freeze({
  isCrossed: false,
})

/**
 * 川渡りパズルの乗り物の状態管理
 */
const useCarrierState = (
  state: Ref<State>,
) => {

  /**
   * 乗り物が開始地点の対岸にいるかどうか
   */
  const isCrossed = (
    carrier: Carrier
  ) => state.value.carriers[carrier.id].isCrossed

  /**
   * 乗り物が中州にいるかどうか
   */
  const isHalfway = (
    carrier: Carrier
  ) => state.value.carriers[carrier.id].isHalfway || false

  /**
   * 乗り物が川を渡る
   */
  const cross = (
    carrier: Carrier
  ) => state.value.carriers[carrier.id].isCrossed = !state.value.carriers[carrier.id].isCrossed

  return {
    isCrossed,
    isHalfway,
    cross,
  }
}
export default useCarrierState
export type UseCarrierStateReturn = ReturnType<typeof useCarrierState>