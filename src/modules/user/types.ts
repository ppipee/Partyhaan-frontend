export interface User {
	id: string
	email: string
	password?: string
}

export interface BaseUser {
	email: string
	password: string
}
