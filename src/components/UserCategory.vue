<template>
    <v-card class="user-info pa-2 mt-5" outlined>
        <v-list-item>
            <v-list-item-title>
               아이디어
                <router-link
                        to="/"
                        class="blue--text float-lg-right"
                >관리</router-link>
            </v-list-item-title>
        </v-list-item>

        <hr/>

        <v-list-item v-for="item in items" :key="item.index">
            <v-list-item-title>{{item.category}}</v-list-item-title>
            <router-link
                    to="/"
                    class="blue--text float-lg-right"
            >{{item.categoryVal}}</router-link>
        </v-list-item>
    </v-card>
</template>

<script>
    export default {
        data: () => ({
            items: [
                {
                    category:'#빅데이터',
                    categoryVal: 10,
                },
                {
                    category:'#디지털마케팅',
                    categoryVal: 20,
                },
                {
                    category:'#SK텔레콤',
                    categoryVal: 50,
                },
                {
                    category:'#배달의 민족',
                    categoryVal: 50,
                },
                {
                    category:'#변호사',
                    categoryVal: 78,
                },
                {
                    category:'#안과의사',
                    categoryVal: 10,
                },
            ],
            model: ['Carrots'],
        }),
    }
</script>


