class UI {
  static bodyCustomisation() {
    const body = document.querySelector("body");
    body.style.backgroundImage = `url(img/background.webp)`;
    body.style.backgroundAttachment = "fixed";
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundSize = "cover";
    body.style.backgroundPosition = "center";
  }
  static createUserInfo(
    img,
    name,
    login,
    bio,
    company,
    email,
    location,
    createdAt,
    followers,
    following,
    userGithubUrl,
    twitterUserName
  ) {
    const row = document.getElementById("userContent");
    const col3 = document.createElement("div");
    col3.className = "col-md-3 h-100 sticky-top";
    const userInfoCard = document.createElement("div");
    userInfoCard.className = "card mb-3 shadow-lg rounded-3 bg-dark";
    const cardImage = document.createElement("img");
    cardImage.className = "img-fluid rounded-circle p-3 card-img-top mx-auto";
    cardImage.style.maxWidth = "200px";
    cardImage.src = img;
    const cardBody = document.createElement("div");
    cardBody.className = "card-body";
    const cardTitle = document.createElement("h5");
    cardTitle.className = "card-title text-center";
    cardTitle.innerHTML = `
    <a class="nav-link text-info" target="_blank" href="${userGithubUrl}" title="${userGithubUrl}">@${login} - ${name}</a>
    `;
    const cardDivFollow = document.createElement("div");
    cardDivFollow.className = "gap-3 d-flex flex-row justify-content-center";
    const cardFollowers = document.createElement("p");
    cardFollowers.className = "card-text text-muted ";
    cardFollowers.innerHTML = `<i class="fa-solid fa-users text-info"></i> <strong class="text-light">Followers:</strong> ${followers}`;
    const cardFollowing = document.createElement("p");
    cardFollowing.className = "card-text text-muted ";
    cardFollowing.innerHTML = `<i class="fa-solid fa-user-check text-info"></i> <strong class="text-light">Following:</strong> ${following}`;
    const cardCreatedAt = document.createElement("p");
    cardCreatedAt.className = "card-text text-muted ";
    cardCreatedAt.innerHTML = `<i class="fa-regular fa-calendar-check text-info"></i> <strong class="text-light">Created At:</strong> ${createdAt.slice(
      0,
      10
    )}`;

    row.appendChild(col3);
    col3.appendChild(userInfoCard);
    userInfoCard.appendChild(cardImage);
    userInfoCard.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
    cardDivFollow.appendChild(cardFollowers);
    cardDivFollow.appendChild(cardFollowing);
    cardBody.appendChild(cardDivFollow);
    cardBody.appendChild(cardCreatedAt);
    if (bio !== null) {
      const cardBioText = document.createElement("p");
      cardBioText.className = "card-text text-muted   ";
      cardBioText.innerHTML = `<i class="fa-solid fa-blog text-info"></i> <strong class="text-light">Bio:</strong> ${bio}`;
      cardBody.appendChild(cardBioText);
    }
    if (company !== null) {
      const cardCompanyText = document.createElement("p");
      cardCompanyText.className = "card-text text-muted";
      cardCompanyText.innerHTML = `<i class="fa-solid fa-building text-info"></i> <strong class="text-light">Company:</strong> ${company}`;
      cardBody.appendChild(cardCompanyText);
    }
    if (location !== null) {
      const cardLocationText = document.createElement("p");
      cardLocationText.className = "card-text text-muted";
      cardLocationText.innerHTML = `<i class="fa-solid fa-location text-info"></i> <strong class="text-light">Location:</strong> ${location}`;
      cardBody.appendChild(cardLocationText);
    }
    if (email !== null) {
      const cardEmailText = document.createElement("p");
      cardEmailText.className = "card-text text-muted";
      cardEmailText.innerHTML = `<i class="fa-solid fa-envelope text-info"></i> <strong class="text-light">Mail:</strong> ${email}`;
      cardBody.appendChild(cardEmailText);
    }
    if (twitterUserName !== null) {
      const cardTwitterText = document.createElement("p");
      cardTwitterText.className = "card-text";
      cardTwitterText.innerHTML = `<i class="fa-brands fa-twitter"></i> <strong>Twitter:</strong> @${twitterUserName}`;
      cardBody.appendChild(cardTwitterText);
    }
  }
  static createUserRepoUI(repoOwner) {
    const row = document.getElementById("userContent");
    const col9 = document.createElement("div");
    col9.className = "col-md-9";
    const card = document.createElement("div");
    card.id = "userRepo";
    card.className = "card shadow-lg rounded-3 border-0 bg-dark";
    // card.style.height = "524px";
    const cardHeader = document.createElement("div");
    cardHeader.className =
      "card-header d-flex justify-content-between align-items-center bg-dark text-info";
    cardHeader.innerHTML = `${repoOwner}'s Repositories`;
    const searchInput = document.createElement("input");
    searchInput.className =
      "form-control me-2 bg-dark bg-gradient rounded-pill border-0 text-info";
    searchInput.id = "searchRepo";
    searchInput.type = "search";
    searchInput.style.maxWidth = "200px";
    searchInput.placeholder = "Search Repository";
    searchInput.autocomplete = "false";

    row.appendChild(col9);
    col9.appendChild(card);
    card.appendChild(cardHeader);
    cardHeader.appendChild(searchInput);
  }
  static createUserRepo(
    repoOwner,
    repoName,
    repoUrl,
    repoLicense,
    repoUpdateAt,
    repoFork
  ) {
    const card = document.getElementById("userRepo");
    const listDiv = document.createElement("div");

    listDiv.className = "list-group";
    listDiv.id = "userList";
    const listItemLink = document.createElement("a");
    listItemLink.className =
      "list-group-item list-group-item-action bg-dark text-light";
    listItemLink.href = repoUrl;
    listItemLink.target = "_blank";
    if (repoLicense !== null) {
      listItemLink.innerHTML = `
        <div class="d-flex w-100 justify-content-between">
           <h5 class="mb-1"><i class="fa-solid fa-folder text-info"></i> ${repoName}</h5>
        
           <small class="badge bg-primary rounded-pill mt-2"> <i class="fa-solid fa-passport"></i> ${repoLicense.spdx_id}</small>
        </div>
        <small class="text-secondary">
          <i class="fa-solid fa-user"></i>  @${repoOwner} - 
          <i class="fa-solid fa-calendar-check"></i> Update: ${repoUpdateAt} -
          <i class="fa-solid fa-code-fork"></i> Forks: ${repoFork}
        </small>
        `;

      card.appendChild(listDiv);
      listDiv.appendChild(listItemLink);
    } else {
      listItemLink.innerHTML = `
          <div class="d-flex w-100 justify-content-between">
             <h5 class="mb-1"><i class="fa-solid fa-folder text-info"></i> ${repoName}</h5>
          
             <small class="badge bg-secondary rounded-pill mt-2"> <i class="fa-solid fa-passport"></i> No License</small>
          </div>
          <small class="text-secondary">
            <i class="fa-solid fa-user"></i>  @${repoOwner} - 
            <i class="fa-solid fa-calendar-check"></i> Update: ${repoUpdateAt}
            <i class="fa-solid fa-code-fork"></i> Forks: ${repoFork}
          </small>
          `;

      card.appendChild(listDiv);
      listDiv.appendChild(listItemLink);
    }
  }
}
