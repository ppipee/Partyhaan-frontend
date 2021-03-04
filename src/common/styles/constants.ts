export const ScreenSize = {
  Mobile: 991,
} as const

export type ScreenSize = typeof ScreenSize[keyof typeof ScreenSize]
