// store.js
import Vue from "./vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    // counter 라는 state 속성을 추가
    // state는 컴포넌트 간에 공유할 data 속성
    state: {
        counter: 0
    }
});<template>

    <!--하위 컴포넌트(자식)-->

    <div>
        자식 counter : {{num}}<br/>
        <button>+</button>
        <button>-</button>
    </div>

</template>
<script lang="ts">
    export default {
    // 상위 컴포넌트에서 내려준 counter 속성을 num 으로 받음
    props: ["num"]
};
</script>
