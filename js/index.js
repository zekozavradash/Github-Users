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

        if(window.innerWidth > 850) {
            container.innerHTML = `
        <div class="column1">
        <div class="head1">
          <img src="${data.avatar_url}" alt="avatar" width="117px"/>
        </div>
        <div class="head2">
          <h1>${data.name}</h1>
          <span>@${data.login}</span>
          <p>${data.bio}</p>
        </div>
        <div class="head3">
          <p>${data.created_at}</p>
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

    });
}

submit.addEventListener("click", () => {
  container.innerHTML = '<span class="loader"></span>';
  setTimeout(() => {
    users();
  }, 1000);
});

input.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    container.innerHTML = '<span class="loader"></span>';
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
