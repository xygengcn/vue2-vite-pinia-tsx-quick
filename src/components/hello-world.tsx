import { VueComponent } from '@/shims-vue';
import { Component, Prop } from 'vue-property-decorator';
import './index.scss';
import { useCountStore } from '@/store/count';
import logo from '@/static/logo.png';
interface HelloWorldProps {
  msg: string;
}

@Component({
  name: 'HelloWorld',
})
export default class HelloWorld extends VueComponent<HelloWorldProps> {
  @Prop() private readonly msg!: string;

  public render() {
    const store = useCountStore();
    return (
      <div class="hello-world">
        <div class="logo">
          <img src={logo} alt="" />
        </div>
        <h1>{this.msg}</h1>
        <div class="content">
          <h2 class="count">state计数: {store.count}</h2>
          <h2 class="doubleCount">getter双倍：{store.double}</h2>
          <button
            onclick={() => {
              store.add();
            }}
          >
            action点击+1
          </button>
        </div>
      </div>
    );
  }
}
