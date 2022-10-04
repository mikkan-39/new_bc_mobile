import Reactotron from "reactotron-react-native";
import { reactotronRedux } from 'reactotron-redux'
import { NativeModules } from "react-native";
import sagaPlugin from 'reactotron-redux-saga';

let packagerHostname = "localhost";
if (__DEV__) {
  const scriptURL = NativeModules.SourceCode.scriptURL;
  packagerHostname = scriptURL.split("://")[1].split(":")[0];
}

const reactotron = Reactotron.configure({
  name: "New BCM",
  host: packagerHostname,
})
  .useReactNative({
    networking: {
      ignoreUrls: /symbolicate|127.0.0.1|logs/,
    },
    overlay: false, // just turning off overlay
  })
  .use(reactotronRedux())
  .use(sagaPlugin())
  .connect();

export default reactotron;