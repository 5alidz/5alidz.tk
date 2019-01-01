window.templates = {
  about: theme => `
  <div class="enter ${theme}">
    <p>hello 👋, my name is khaled zakaria and i'm a  web-developer based in riyadh saudi arabia.</p>
    <br>
    <p></p>
    <br>
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
  `.trim(),
  projects: theme => `
  <div class='enter ${theme}'>
    <div class='grid ${theme}'>
      <h3>Title.</h3>
      <div class='flex align-c'>
        <p>Consectetur saepe sit ea facere totam? Aspernatur vero delectus assumenda Consectetur saepe sit ea facere totam? Aspernatur vero delectus assumenda</p>
        <img src="https://picsum.photos/100/100" alt="">
      </div>
      <div class='flex'>
        <a href="" class='mr-r ${theme}-link'>Code</a>
        <a href="" class='mr-l ${theme}-link'>Live demo</a>
      </div>
    </div>
  </div>
  `.trim(),
  blog: theme => `
  <div class='enter ${theme}'>d</div>
  `.trim()
}
