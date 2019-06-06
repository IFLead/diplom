import Vue from 'vue';
import {
  Button, Upload, Loading, Progress,
} from 'element-ui';
import lang from 'element-ui/lib/locale/lang/ru-RU';
import locale from 'element-ui/lib/locale';

locale.use(lang);

Vue.use(Button);
Vue.use(Upload);
Vue.use(Loading);
Vue.use(Progress);
