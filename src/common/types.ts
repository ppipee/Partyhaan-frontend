export interface Page<T> {
	currentPage: number
	nextPage: number
	totalEntities: number
	entities: T[]
}
