const linksSocialMedia = {
  github: "Dayan1533",
  youtube: "UCQ1ZcoxgH_RCfK_kCH7l2hw",
  facebook: "dayan.ramos.33",
  instagram: "dayanramos55",
  twitter: "jakelinytec"
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children){
    const social = li.getAttribute('class') 
    // Muda o link com o nome das classes para a rede social desejada e depois
    // trás o nome da sua rede social.
    li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`

  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
// Diz para o fetch que a resposta é json.
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent= data.login
    });
}
getGitHubProfileInfos()
