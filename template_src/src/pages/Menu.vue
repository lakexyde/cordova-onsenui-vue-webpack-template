<template>
    <v-ons-page>
        <v-ons-list>
            <v-ons-list-header>
                Menu Page
            </v-ons-list-header>
            <v-ons-list-item v-for="item in items" :key="item.title" tappable
            modifier="$ons.platform.isAndroid()? 'nodivider': ''"
            @click="(item.page) ? push(item.page): '' "
            >
                <div class="left">
                    <v-ons-icon :icon="item.icon"></v-ons-icon>
                </div>
                <div class="center">{{item.title}}</div>
            </v-ons-list-item>
        </v-ons-list>
    </v-ons-page>
</template>
<script>
import About from './About.vue';
export default{
    data(){
        return{
            items: [
                {title: "Home", icon:"ion-home", page:""},
                {title: "About", icon:"ion-ios-book", page:About},
                {title: "Contact", icon:"ion-ios-email", page:""},
                {title: "Settings", icon:"ion-gear-a", page:""}
            ]
        }
    },
    methods: {
        push(page){
            this.$store.commit('splitter/toggle');
            this.$store.commit('navigator/push', page);
            
        }
    }
}
</script>