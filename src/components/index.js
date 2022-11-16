import { defineAsyncComponent } from 'vue'

export default {
  install(app) {
    const modules = import.meta.glob('./*/index.vue')
    for (const [key, val] of Object.entries(modules)) {
      const componentName = key.replace('./', '').split('/')[0]
      console.log(defineAsyncComponent(val), val);
      app.component(`m-${componentName}`,defineAsyncComponent(val))
    }
  }
}
