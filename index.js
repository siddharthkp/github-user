const { parse } = require('url')
const axios = require('axios')

const cache = {}

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')

  const { username } = parse(req.url, true).query

  if (cache[username]) res.end(JSON.stringify(cache[username]))
  else {
    const user = axios
      .get(`https://api.github.com/users/${username}`)
      .then(response => {
        return {
          username: response.data.login,
          name: response.data.name,
          avatar: response.data.avatar_url,
          description: response.data.bio || 'no description',
          url: response.data.html_url
        }
      })

    const repos = axios
      .get(`https://api.github.com/users/${username}/repos?sort=updated`)
      .then(response => {
        let repos = response.data.map(repo => {
          return {
            name: repo.name,
            stars: repo.stargazers_count,
            description: repo.description,
            url: repo.html_url
          }
        })
        repos = repos.sort((a, b) => b.stars - a.stars).slice(0, 5)
        return repos
      })

    Promise.all([user, repos]).then(values => {
      const response = values[0]
      response.repos = values[1]

      cache[username] = response

      res.end(JSON.stringify(response))
    })
  }
}
