let input = document.getElementsByTagName("input")[0];
let submit = document.getElementById("submit");
let container = document.getElementsByClassName("container")[0];

function users() {
  fetch(`https://api.github.com/users/${input.value}`)
    .then((response) => response.json())
    .then((data) => {
        if(window.innerWidth < 850) {
            container.innerHTML = `
        <div class="column1">
        <div class="head1">
          <img src="${data.avatar_url}" alt="avatar" width="117px"/>
        </div>
        <div class="head2">
          <h1>${data.name}</h1>
          <span>@${data.login}</span>
          <p>${data.created_at}</p>
        </div>
        <div class="head3">
          <p>${data.bio}</p>
        </div>
      </div>
      <div class="column2">
        <div class="fot1">
          <div class="1">
            <h5>Repos</h5>
            <b>${data.public_repos}</b>
          </div>

          <div class="2">
            <h5>Followers</h5>
            <b>${data.followers}</b>
          </div>

          <div class="3">
            <h5>Following</h5>
            <b>${data.following}</b>
          </div>
        </div>

        <div class="fot2">
          <a href="${data.html_url}"
            ><img src="./img/loc.svg" alt="location" /> ${data.location}</a
          >
          <a href="${data.html_url}"
            ><img src="./img/url.svg" alt="url" /> ${data.html_url}</a
          >
          <a href="${data.html_url}"
            ><img src="./img/twit.svg" alt="twitter" /> Not Available</a
          >
          <a href="${data.html_url}"><img src="./img/hash.svg" alt="hash" /> @${data.login}</a>
        </div>
      </div>
        `;
        }

     
loader
    });
}

submit.addEventListener("click", () => {
  container.innerHTML = `<span class="loader"><svg class="bike" viewBox="0 0 48 30" width="48px" height="30px">
  <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1">
      <g transform="translate(9.5,19)">
          <circle class="bike__tire" r="9" stroke-dasharray="56.549 56.549" />
          <g class="bike__spokes-spin" stroke-dasharray="31.416 31.416" stroke-dashoffset="-23.562">
              <circle class="bike__spokes" r="5" />
              <circle class="bike__spokes" r="5" transform="rotate(180,0,0)" />
          </g>
      </g>
      <g transform="translate(24,19)">
          <g class="bike__pedals-spin" stroke-dasharray="25.133 25.133" stroke-dashoffset="-21.991" transform="rotate(67.5,0,0)">
              <circle class="bike__pedals" r="4" />
              <circle class="bike__pedals" r="4" transform="rotate(180,0,0)" />
          </g>
      </g>
      <g transform="translate(38.5,19)">
          <circle class="bike__tire" r="9" stroke-dasharray="56.549 56.549" />
          <g class="bike__spokes-spin" stroke-dasharray="31.416 31.416" stroke-dashoffset="-23.562">
              <circle class="bike__spokes" r="5" />
              <circle class="bike__spokes" r="5" transform="rotate(180,0,0)" />
          </g>
      </g>
      <polyline class="bike__seat" points="14 3,18 3" stroke-dasharray="5 5" />
      <polyline class="bike__body" points="16 3,24 19,9.5 19,18 8,34 7,24 19" stroke-dasharray="79 79" />
      <path class="bike__handlebars" d="m30,2h6s1,0,1,1-1,1" stroke-dasharray="10 10" />
      <polyline class="bike__front" points="32.5 2,38.5 19" stroke-dasharray="19 19" />
  </g>
</svg></span>`;
  setTimeout(() => {
    users();
  }, 1000);
});

input.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    container.innerHTML = `<span class="loader"><svg class="bike" viewBox="0 0 48 30" width="48px" height="30px">
    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1">
        <g transform="translate(9.5,19)">
            <circle class="bike__tire" r="9" stroke-dasharray="56.549 56.549" />
            <g class="bike__spokes-spin" stroke-dasharray="31.416 31.416" stroke-dashoffset="-23.562">
                <circle class="bike__spokes" r="5" />
                <circle class="bike__spokes" r="5" transform="rotate(180,0,0)" />
            </g>
        </g>
        <g transform="translate(24,19)">
            <g class="bike__pedals-spin" stroke-dasharray="25.133 25.133" stroke-dashoffset="-21.991" transform="rotate(67.5,0,0)">
                <circle class="bike__pedals" r="4" />
                <circle class="bike__pedals" r="4" transform="rotate(180,0,0)" />
            </g>
        </g>
        <g transform="translate(38.5,19)">
            <circle class="bike__tire" r="9" stroke-dasharray="56.549 56.549" />
            <g class="bike__spokes-spin" stroke-dasharray="31.416 31.416" stroke-dashoffset="-23.562">
                <circle class="bike__spokes" r="5" />
                <circle class="bike__spokes" r="5" transform="rotate(180,0,0)" />
            </g>
        </g>
        <polyline class="bike__seat" points="14 3,18 3" stroke-dasharray="5 5" />
        <polyline class="bike__body" points="16 3,24 19,9.5 19,18 8,34 7,24 19" stroke-dasharray="79 79" />
        <path class="bike__handlebars" d="m30,2h6s1,0,1,1-1,1" stroke-dasharray="10 10" />
        <polyline class="bike__front" points="32.5 2,38.5 19" stroke-dasharray="19 19" />
    </g>
</svg></span>`;
    setTimeout(() => {
      users();
    }, 1000);
  }
});


let darkmode = document.getElementById('darkmode');
let lightmode = document.getElementById('lightmode');
let createStyle = document.createElement('style');

darkmode.addEventListener("click", () => {
    darkmode.style.display = 'none';
    lightmode.style.display = 'flex';
    createStyle.innerHTML = `
        p, h5, a { color: #c4cad4; }
        body { background: #141D2F; }
        header { color: white; }
        .input, input, .container { background: #1E2A47; color: white; box-shadow: none; }
        .fot1 { background: #141D2F; }
    `;
    document.head.appendChild(createStyle);
});

lightmode.addEventListener("click", () => {
    darkmode.style.display = 'flex';
    lightmode.style.display = 'none';
    createStyle.remove();
});
