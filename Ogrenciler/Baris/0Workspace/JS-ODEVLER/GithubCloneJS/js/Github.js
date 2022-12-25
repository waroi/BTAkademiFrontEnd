class Github {
  constructor(username) {
    this.username = username;
    this.getUsersUrl = `https://api.github.com/search/users?q=${username}`;
    this.getUserUrl = `https://api.github.com/users/${username}`;
    this.getUserRepoUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
  }
  getUserInfo() {
    return new Promise((resolve, reject) => {
      fetch(this.getUserUrl)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
  getUserRepos() {
    return new Promise((resolve, reject) => {
      fetch(this.getUserRepoUrl)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
}
