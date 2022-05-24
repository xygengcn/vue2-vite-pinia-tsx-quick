import { Component } from "vue-property-decorator";
import HelloWorld from "./components/hello-world";
import { VueComponent } from "./shims-vue";

interface AppProps {}
@Component({
  name: "App",
})
export default class App extends VueComponent<AppProps> {
  public render() {
    return (
      <div id="app">
       <HelloWorld msg="这是Vue2 + Typescript + Pinia +Vite 的模版" />
      </div>
    );
  }
}
