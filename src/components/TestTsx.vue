<script lang="tsx">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class AppTest extends Vue {
  @Prop() private msg: string = 'Hello From AppTest';

  render() {
    const test = (
      <div> {this.msg} </div>
    )

    return (
      <h2> {test} </h2>
    )
  }
}
</script>
