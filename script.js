const { __data, __templates } = window

const $ = id => document.getElementById(id)
const removeIds = elements => elements.map(el => el.removeAttribute('id'))
const removeId = (element, id) => element.removeAttribute(id)

