const firstName = (name) => {
	if (!name) return undefined

	const capitalized = `${name.charAt(0).toUpperCase()}${name.slice(1)}`
	const firstName = capitalized.split(' ')[0]

	return firstName
}


export default firstName
