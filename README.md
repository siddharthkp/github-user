<p align="center">
  <img src="https://octodex.github.com/images/codercat.jpg" height="200px"/>
  <br><br>
  <b>Get description + popular repos for a user</b>
  <br>
</p>

&nbsp;

#### usage

```js
import axios from 'axios' // use http library of your choice

const username = 'siddharthkp'

axios.get(`https://github-user.now.sh/?username=${username}`)
.then(response => console.log(response.data))

/*
{
  avatar: "https://avatars0.githubusercontent.com/u/1863771?v=4",
  description: "Physics graduate, ❤ Interfaces and javascript",
  name: "Siddharth Kshetrapal",
  repos: [
    // top 5 repos sorted by stars
    { 
      description: "Keep your bundle size in check",
      name: "bundlesize",
      stars: 1917,
      url: "https://github.com/siddharthkp/bundlesize
    }, {
      description: "Find out which of your dependencies are slowing you down 🐢"
      name: "cost-of-modules"
      stars: 1893
      url: "https://github.com/siddharthkp/cost-of-modules"
    }
  ],
  url: "https://github.com/siddharthkp",
  username: "siddharthkp"
}
*/

```
Use this API from your code: `https://github-user.now.sh/?username=siddharthkp`

&nbsp;

#### like it?

:star: this repo

&nbsp;

#### license

MIT © [siddharthkp](https://github.com/siddharthkp)
