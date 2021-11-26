import ReactDOM from 'react-dom';
import store from "./redux/store/index"
import { Provider } from 'react-redux';
import Routing from "./routers"

ReactDOM.render(
  <Provider store={store}>
  <Routing/>
  </Provider>,
  document.getElementById('root')
)