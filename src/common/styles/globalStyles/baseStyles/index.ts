import { createGlobalStyle } from 'styled-components'
import { Gray } from 'common/styles/colors'

const BaseStyles = createGlobalStyle`
  body {
		padding: 0;
		margin: 0;
		font-family: 'Kodchasan', sans-serif;
		color: ${Gray[900]}; 
		min-height:100vh;
		background-color:${Gray.White};
	}

	* {
		box-sizing: border-box;
		font-family: 'Kodchasan', sans-serif;
	}

	a {
		color: inherit;
		text-decoration: none;
	}
`

export default BaseStyles
