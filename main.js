const log = console.log.bind(console)

const removeClasses = (arr, _class) => arr.map(el => el.classList.remove(_class))
const templates = window.templates || {}

// setup dom elements.
const target = document.getElementById('target')
const tabs = Array.from(document.querySelectorAll('.tab'))
const themeBtn = document.getElementById('theme-btn')
const currentThemeDOM = document.getElementById('current-theme')

const getActiveTab = () => tabs
  .filter(tab => tab.classList.contains('active-tab'))[0]
  .innerHTML
  .toLowerCase()

let currentTheme = 'light'
const not = (mode) => mode === 'light' ? 'dark' : 'light'

const updateTabsData = () => target.innerHTML = templates[getActiveTab()](currentTheme)
const updateIcons = (id) => {
  const indicator = document.getElementById('theme-indicator')
  const icons = (mode) => mode === 'light' ? 'fa-sun' : 'fa-moon'
  indicator.classList.remove(icons(not(id)))
  indicator.classList.add(icons(id))
}
const updateTabsStyle = (id) => {
  const tabsContainer = document.querySelectorAll('.tabs-container')[0]
  tabsContainer.classList.add(`tabs-brdr-${not(id)}`)
  tabsContainer.classList.remove(`tabs-brdr-${id}`)
}
const updateActiveTab = (id) => {
  const activeTab = () => document.querySelectorAll('.active-tab')[0]
  activeTab().classList.add(`active-tab-${not(id)}`)
  activeTab().classList.remove(`active-tab-${id}`)
}
const updateThemeButton = (id) => currentThemeDOM.innerHTML = id
// handle theme
const applyTheme = (_currentTheme) => {
  Array.from(document.querySelectorAll(`.${_currentTheme}`)).map(el => {
    el.classList.add(not(_currentTheme))
    el.classList.remove(_currentTheme)
  })
  currentTheme = not(_currentTheme)
  updateThemeButton(_currentTheme)
  updateTabsStyle(_currentTheme)
  updateIcons(_currentTheme)
  updateTabsData()
  updateActiveTab(_currentTheme)
  return
}
themeBtn.onclick = () => {
  if(currentTheme === 'light') {
    return applyTheme('light')
  }else{
    return applyTheme('dark')
  }
}
// handle tabs
updateTabsData()
tabs.map(tab => {
  tab.onclick = (e) => {
    const content = e.target.innerHTML.toLowerCase()
    const template = templates[content](currentTheme)
    target.innerHTML = template
    removeClasses(tabs, 'active-tab')
    removeClasses(tabs, 'active-tab-dark')
    removeClasses(tabs, 'active-tab-light')
    tab.classList.add('active-tab')
    tab.classList.add(`active-tab-${currentTheme}`)
  }
})
