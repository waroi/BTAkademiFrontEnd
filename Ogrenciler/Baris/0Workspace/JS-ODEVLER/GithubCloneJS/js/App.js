//TOKEN - -  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

// github
//   .getUserRepos()
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
const frmSearch = document.getElementById("frmSearch");
const userContent = document.getElementById("userContent");

eventListener();
function eventListener() {
  document.addEventListener("DOMContentLoaded", loadCustomisation);
  frmSearch.addEventListener("submit", getUserFromGithub);
}

function loadCustomisation() {
  UI.bodyCustomisation();
}
function getUserFromGithub(e) {
  e.preventDefault();
  userContent.innerHTML = "";
  const searchInput = document.getElementById("searchUser");
  const github = new Github(searchInput.value.toLowerCase());
  github
    .getUserInfo()
    .then((data) => {
      UI.createUserInfo(
        data.avatar_url,
        data.name,
        data.login,
        data.bio,
        data.company,
        data.email,
        data.location,
        data.created_at,
        data.followers,
        data.following,
        data.html_url,
        data.twitter_username
      );
      UI.createUserRepoUI(data.login);
    })
    .catch((err) => console.log(err));
  github
    .getUserRepos()
    .then(
      (data) =>
        setTimeout(() => {
          if (data.lenght !== 0) {
            data.forEach((item) => {
              UI.createUserRepo(
                item.owner.login,
                item.name,
                item.html_url,
                item.license,
                item.updated_at.slice(0, 10),
                item.forks
              );
            });
          }
          searchInput.addEventListener("keyup", searchRepos);
        }, 500)
      // UI.createUserRepoUI fonksiyonu geçikmeli geldiğinde
      // hata verebiliyor bu sebepten dolayı timeout kullanıldı
    )
    .catch((err) => console.log(err));
}
