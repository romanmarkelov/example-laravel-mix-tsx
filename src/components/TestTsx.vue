<script lang="tsx">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class TestTsx extends Vue {
  @Prop() private msg: string = 'Hello From TestTsx';

  render() {
    const test = (
      <span> {this.msg} </span>
    )

    return (
      <h2> {test} </h2>
    )
  }
}
</script>
