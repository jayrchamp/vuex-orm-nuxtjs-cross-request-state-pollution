<template>
  <div class="container">
    <div>
      <h1 class="title">
        <span class="mr-3 d-inline-block">Title:</span> {{ question ? question.slug : null }}
      </h1>
    </div>
  </div>
</template>

<script>

import sleep from '~/utils/sleep'

export default {
  async asyncData ({ store, params }) {
    await sleep(2)

    const Question = store.$db().model('Question')

    await Question.insertOrUpdate({
      data: {
        id: 1,
        slug: params.slug
      }
    })
  },

  computed: {
    question () {
      const Question = this.$store.$db().model('Question')
      return Question.query().whereId(1).first()
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 70px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.mr-3 {
  margin-right:30px;
}

.d-inline-block {
  display:inline-block
}
</style>
