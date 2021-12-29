import { Theme } from "vitepress"
import NotFound from './NotFound.vue'
import Layout from './Layout.vue'

const theme: Theme = {
  Layout,
  NotFound,
  enhanceApp({ app, router }) {
    console.log(app, router)
  }
}

export default theme