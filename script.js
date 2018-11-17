// [deps]
const { __data, __templates } = window

const latestTab = localStorage.getItem('latestTab')
const tenMinutes = 600000
const latestTab_expire = localStorage.getItem('latestTab_exp')

const $ = id => document.getElementById(id)
const listItems = Array.from(document.querySelectorAll('.page_body-nav_listItem'))
const removeIds = elements => elements.map(el => el.removeAttribute('id'))
const removeId = (element, id) => element.removeAttribute(id)

const isActive = element => element.id === 'active-list-item'
const highlight = element => element.id = 'active-list-item'
const defaultTab = $('default-tab')

// controller for data & templates
const getComponent = name => {
  const contentHook = document.getElementById('page_body-content')
  const component = __templates[name](__data[name])
  const render = (component) => contentHook.innerHTML = component
  render(component)
}

// localstorage to presist active tab for 10 mins (600000ms)
if (latestTab && latestTab_expire > Date.now()) {
  const latestDOM = listItems.filter(item => item.innerHTML === latestTab)[0]
  removeIds(listItems)
  highlight(latestDOM)
  getComponent(latestDOM.innerHTML)
} else {
  highlight(defaultTab)
  getComponent(defaultTab.innerHTML)
}

// attach event listeners for tabs
listItems
  .map(el =>{
    el.onclick = e => {
      if(isActive(e.target)) return
      removeIds(listItems)
      highlight(e.target)
      getComponent(e.target.innerHTML)
      localStorage.setItem('latestTab', e.target.innerHTML)
      localStorage.setItem('latestTab_exp', Date.now() + tenMinutes)
    }
  })
