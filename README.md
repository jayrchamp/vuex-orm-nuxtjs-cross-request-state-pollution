#### Describe the bug

It seems there is some kind of cross-request state pollution when using Vuex-ORM on Nuxtjs with SSR. Its kinda hard to reproduce. I made an example with a fresh Nuxt project repository and also catch the behavior on video.

#### Steps to reproduce the bug

1. Clone repo
2. Install dependencies (yarn install)
3. Build project (yarn build)
4. Open 2-3 browser windows each one using a different slug.
> For example: 
- http://localhost:3000/question/first-question
- http://localhost:3000/question/second-question
- http://localhost:3000/question/third-question

5. Reload the page of each window one by one before they all finished loading to simulate multiple requests going on simultaneously.

#### Expected behaviour

Expected all browser windows to have their respective title related to the slug in the url parameter.

#### Versions

- Vuex ORM: 0.36.3
- Nuxt: 2.15.3

#### Link to minimal reproduction

Repo: https://github.com/jayrchamp/vuex-orm-nuxtjs-cross-request-state-pollution 

#### Additional context

Video: https://storage.googleapis.com/ayourp-examples/vuex-orm-nuxtjs-cross-request-state-pollution.mp4
