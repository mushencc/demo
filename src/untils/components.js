import Loading from '../components/loading/index' // 引入loading
import Toptitle from '../components/TopTitle/index'
export default (Vue) => {
    Vue.component('Toptitle', Toptitle)
    
    Vue.use(Loading)
    
}