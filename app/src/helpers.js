// const replaceCalc = (string) => string.replace(/\D/g, '')
const replaceCalc = (string) => Number(string.replace(/calc/g, '').replace(/px/g, '').replace(/[()]/g, ''))

// eslint-disable-next-line import/prefer-default-export
export { replaceCalc }
