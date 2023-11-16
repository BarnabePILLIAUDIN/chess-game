const formatName = (name) => name.split("-").slice(0, 2).join("-")
const getImageUrl = (name) => `/assets/images/${formatName(name)}.png`
export default getImageUrl
