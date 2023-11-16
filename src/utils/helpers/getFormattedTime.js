const getFormattedTime = (time) => `${Math.floor(time / 60)}m ${time % 60}s`

export default getFormattedTime
