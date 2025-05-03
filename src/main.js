import { createApp } from 'vue'
import {
  Lazyload,
  Form,
  Field,
  CellGroup,
  Cell,
  Button,
  RadioGroup,
  Radio,
  Popup,
  DatePicker,
  Picker,
  Icon,
  NavBar,
  Calendar
} from 'vant'
import 'vant/lib/index.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.use(Lazyload)
app.use(Form)
app.use(Field)
app.use(CellGroup)
app.use(Cell)
app.use(Button)
app.use(RadioGroup)
app.use(Radio)
app.use(Popup)
app.use(DatePicker)
app.use(Picker)
app.use(Icon)
app.use(NavBar)
app.use(Calendar)

app.mount('#app')
