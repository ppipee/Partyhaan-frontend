export const ScreenSize = {
	Mobile: 767,
	Desktop: 1199,
} as const

export type ScreenSize = typeof ScreenSize[keyof typeof ScreenSize]

export const NAV_HEIGHT = '56px'
