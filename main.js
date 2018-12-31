const log = console.log.bind(console)

const templates = window.templates || {}
const target = document.getElementById('target')

const tabs = Array.from(document.querySelectorAll('.tab'))

const activeTab = tabs
  .filter(tab => tab.classList.contains('active-tab'))[0]
  .innerHTML
  .toLowerCase()
target.innerHTML = templates[activeTab]

const removeClasses = (arr, _class) => {
  arr.map(el => el.classList.remove(_class))
}
tabs.map(tab => {
  tab.onclick = (e) => {
    const content = e.target.innerHTML.toLowerCase()
    const template = templates[content]
    target.innerHTML = template
    removeClasses(tabs, 'active-tab')
    tab.classList.add('active-tab')
  }
})
