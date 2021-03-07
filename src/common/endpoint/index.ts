const endpoint = {
	parties: () => '/party',
	party: (partyId: string) => `/party/${partyId}`,

	me: () => '/user/me',
	signin: () => '/user/signin',
	signup: () => '/user/signup',
}

export default endpoint
