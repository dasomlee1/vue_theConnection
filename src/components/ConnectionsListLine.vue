<template>
    <div>
        <v-card class="mt-5"
                outlinedv
                v-for="(item, index) in connectionsList" :key="index"
        >
            <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3">
                    <v-img
                            class="elevation-6"
                            alt=""
                            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                    ></v-img>
                </v-list-item-avatar>
                <v-list-item-title>{{item.name}}</v-list-item-title>
                <v-row
                        class="pr-1"
                        justify="end"
                >
                    <v-card-actions>
                        <v-list-item-subtitle class="pr-3">소개자 {{item.introduce}}</v-list-item-subtitle>
                        <v-btn
                                rounded
                                text
                                class="blue-grey white--text"
                        >
                            공유요청
                        </v-btn>
                    </v-card-actions>
                </v-row>
            </v-list-item>
            <v-list-item-content class="px-5">
                <v-list-item-title class="mb-1">{{item.job}}</v-list-item-title>
                <v-list-item-title class="mb-1">{{item.company}}</v-list-item-title>
                <v-list-item-subtitle class="mt-3">
                    {{item.hashtag}}
                    <router-link to="/" class="blue--text">{{item.count}}건</router-link>
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-card>
    </div>
</template>
<script>
    export default {
        data: () => ({
            connectionsList: [
                {
                    name:'김OO',
                    job: '변호사',
                    company: '법무법인 돈다발',
                    hashtag: '#변호사 #빅데이터 #기업번호 외',
                    count: 3,
                    introduce: '김진영'
                },
                {
                    name:'김OO',
                    job: '변호사',
                    company: '법무법인 돈다발',
                    hashtag: '#변호사 #빅데이터 #기업번호 외',
                    count: 3,
                    introduce: '김진영'
                },
                {
                    name:'김OO',
                    job: '변호사',
                    company: '법무법인 돈다발',
                    hashtag: '#변호사 #빅데이터 #기업번호 외',
                    count: 3,
                    introduce: '김진영'
                },
                {
                    name:'김OO',
                    job: '변호사',
                    company: '법무법인 돈다발',
                    hashtag: '#변호사 #빅데이터 #기업번호 외',
                    count: 3,
                    introduce: '김진영'
                },
                {
                    name:'김OO',
                    job: '변호사',
                    company: '법무법인 돈다발',
                    hashtag: '#변호사 #빅데이터 #기업번호 외',
                    count: 3,
                    introducer: '김진영'
                },
            ],
        }),

    }
</script>

<style scoped>

</style>