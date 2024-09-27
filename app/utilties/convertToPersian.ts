export const splitIntoArray = (num: string): number[] => {
	return num.toString().split('').map(Number)
}
//

export const convertToPersian = (num: string): string => {
	splitIntoArray(num)
	const persianNumbers: string[] = [
		'۰',
		'۱',
		'۲',
		'۳',
		'۴',
		'۵',
		'۶',
		'۷',
		'۸',
		'۹',
		':',
	]
	return num.toString().replace(/\d/g, (x) => persianNumbers[parseInt(x)])
}
export const addCommas = (num: string): string => {
	if (num.length <= 3) return num
	let result = ''
	let counter = 0
	for (let i = num.length - 1; i >= 0; i--) {
		result = num[i] + result
		counter++
		if (counter % 3 === 0 && i !== 0) result = ',' + result
	}
	return result
}
export const timeToPersian = (time: string): string => {
	const timeArray = time.split(':')
	const persianTime: string[] = []
	timeArray.forEach((time) => {
		persianTime.push(convertToPersian(time))
	})
	return persianTime.join(':')
}
