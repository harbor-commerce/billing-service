export const flags = { newCheckout: { rollout: 0.1 } }

export function enabled(flag, userId) {
  return (userId % 100) / 100 < flags[flag].rollout
}
