if (typeof window.__templates === 'undefined') {
  window.__templates = {}
}

window.__templates = {
  About: data => `
    <div class='templates'>
      <div>
        <h2>${data.title}</h2>
        <p>${data.body}</p>
        <p style='font-size: 12px;'>${data.sideNote}</p>
      </div>
    </div>
  `,
  Projects: data => {
    const projects = data.projects.map(project => `
      <div class='project'>
        <h2>${project.title}</h2>
        <p>${project.descreption}</p>
        <img src='/images/${project.media}.gif'/>
        <div>
          <a href="https://github.com/5alidz">Code</a>
          <a href="https://github.com/5alidz">Demo</a>
        </div>
      </div>
    `)
    return `
      <div class='templates'>
      ${ projects.join('') }
      </div>
    `
  },
  Experiments: data => {
    const expers = data.experiments.map(exp => `
      <div class='project'>
      </div>
    `)
    return `
      <div class='templates'>
        <h2>lorem ipsum</h2>
        <div>
          Adipisicing elit exercitationem incidunt tempora veritatis? Impedit incidunt at ipsum!
        </div>
        ${ expers.join('') }
      </div>
    `
  },
  Resources: data => {
    const expers = data.resources.map(exp => `
      <div class='project'>
      </div>
    `)
    return `
      <div class='templates'>
       <h2>lorem ipsum</h2>
        <div>
          Adipisicing elit exercitationem incidunt tempora veritatis? Impedit incidunt at ipsum!
        </div>
        ${ expers.join('') }
      </div>
    `
  },
}
