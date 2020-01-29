import Vue from 'vue'

const extClass = {
  methods: {
    extClass(val) {
      const vm = this
      const items = val.split(' ')
      items.forEach((item, index) => {
        if (process.env.NODE_ENV !== 'development') {
          items[index] = vm.$style[`${item}`]
        }
      })
      return items
    }
  }
}
// Vue.directive('sss', {
//   bind(el, binding, vnode) {
//     const items = binding.value.split(' ')
//     let itemValue
//     items.forEach((item, index) => {
//       if (process.env.NODE_ENV === 'development') {
//         itemValue = vnode.$style[`${item}`]
//       } else {
//         itemValue = items[index]
//       }
//       el.classList.add(itemValue)
//     })
//   },
//   update(el, binding, vnode) {
//     const items = binding.value.split(' ')
//     let itemValue
//     items.forEach((item, index) => {
//       if (process.env.NODE_ENV !== 'development') {
//         itemValue = vnode.$style[`${item}`]
//       } else {
//         itemValue = items[index]
//       }
//       el.classList.add(itemValue)
//     })
//   }
// })

Vue.mixin(extClass)
