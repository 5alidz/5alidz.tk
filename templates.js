const projects = window.projects || []
window.templates = {
  about: theme => `
  <div class="enter ${theme}">
    <div class='card-${theme} brd-b-card-${theme} brd-l-card-${theme} pd-all mr-b'>
      <p>hello 👋, my name is khaled zakaria and i'm a  web-developer based in riyadh saudi arabia.</p>
      <br>
      <p></p>
      <br>
    </div>
    <div class='card-${theme} brd-b-card-${theme} brd-l-card-${theme} pd-all'>
      <h2 class='pd-b'>Links</h2>
      <ul class='pd-l'>
        <li>
          <div class='flex align-c mr-b'>
            <i class='fab fa-twitter white mr-r pd-all round brd-all-${theme}' style='color:#38A1F3'></i>
            <a href="https://twitter.com/_5alidz" class='${theme}-link'>Twitter</a>
          </div>
         </li>
        <li>
          <div class='flex align-c mr-b'>
            <i class='fab fa-github  white mr-r pd-all round brd-all-${theme}' style='color: #333'></i>
            <a href="https://github.com/5alidz" class='${theme}-link'>Github</a>
          </div>
        </li>
        <li>
          <div class='flex align-c mr-b'>
            <i class='fab fa-youtube  white mr-r pd-all round brd-all-${theme}' style='color: #FF0000'></i>
            <a href="mailto:kzack-dev@hotmail.com" class='${theme}-link'>Youtube</a>
          </div>
        </li>
        <li>
          <div class='flex align-c mr-b'>
            <i class='far fa-envelope  white mr-r pd-all round brd-all-${theme}' style='color: #333'></i>
            <a href="mailto:kzack-dev@hotmail.com" class='${theme}-link'>Email</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
  `.trim(),
  projects: theme => `
  <div class='enter ${theme}'>
    ${projects.map((project) => `
      <div class='flex just-sb align-c mr-b brd-b-card-${theme} brd-l-card-${theme} pd-all card-${theme}'>
        <div>
          <h3 class='pd-b smaller'>${project.title}</h3>
          <p class='smaller mr-b lighter-${theme}'>${project.description}</p>
          <div class='flex'>
            <a href="${project.code}" target='_blank' rel='noopener noreferrer' class='mr-r ${theme}-link smaller'>Code</a>
            <a href="${project.demo}" target='_blank' rel='noopener noreferrer' class='mr-l ${theme}-link smaller'>Live demo</a>
          </div>
        </div>
        <img src="${project.img}" style='max-width: 100px; height: auto;' alt="project preview">
      </div>
      `).join(' ')}
  </div>
  `.trim(),
  blog: theme => `
  <div class='enter ${theme}'>d</div>
  `.trim()
}
