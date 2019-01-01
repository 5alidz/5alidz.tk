const log = console.log.bind(console)
const removeClasses = (arr, _class) => {
  arr.map(el => el.classList.remove(_class))
}
const templates = window.templates || {}
// setup dom elements.
const target = document.getElementById('target')
const tabs = Array.from(document.querySelectorAll('.tab'))
const getActiveTab = () => tabs
  .filter(tab => tab.classList.contains('active-tab'))[0]
  .innerHTML
  .toLowerCase()
const themeBtn = document.getElementById('theme-btn')
const currentThemeDOM = document.getElementById('current-theme')
const indicator = document.getElementById('theme-indicator')
const tabsContainer = document.querySelectorAll('.tabs-container')[0]
const activeTab = () => document.querySelectorAll('.active-tab')[0]

let currentTheme = 'light'
// handle theme
themeBtn.onclick = () => {
  if(currentTheme === 'light'){
    const all = Array.from(document.querySelectorAll('.light'))
    currentTheme = 'dark'
    currentThemeDOM.innerHTML = 'Light'
    indicator.classList.remove('fa-moon')
    indicator.classList.add('fa-sun')
    tabsContainer.classList.add('tabs-brdr-dark')
    tabsContainer.classList.remove('tabs-brdr-light')
    activeTab().classList.add('active-tab-dark')
    activeTab().classList.remove('active-tab-light')
    target.innerHTML = templates[getActiveTab()](currentTheme)
    all.map(el => {
      el.classList.remove('light')
      el.classList.add('dark')
    })
    return
  }
  if(currentTheme === 'dark'){
    const all = Array.from(document.querySelectorAll('.dark'))
    currentTheme = 'light'
    // update theme button
    currentThemeDOM.innerHTML = 'Dark'
    indicator.classList.remove('fa-sun')
    indicator.classList.add('fa-moon')
    tabsContainer.classList.remove('tabs-brdr-dark')
    tabsContainer.classList.add('tabs-brdr-light')
    activeTab().classList.remove('active-tab-dark')
    activeTab().classList.add('active-tab-light')
    // update tab content
    target.innerHTML = templates[getActiveTab()](currentTheme)
    // update classes
    all.map(el => {
      el.classList.remove('dark')
      el.classList.add('light')
    })
    return
  }
}
// handle tabs
target.innerHTML = templates[getActiveTab()](currentTheme)

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
