<template>
    <div class="my-connections">
        <h1 class="font-weight-bold">내 인맥관리</h1>

        <ConnectionsListCard
                v-if="connectionsList.length > 0"
                :connectionsList = 'connectionsList'/>

        <div v-else
             class="mt-5 data-empty">
            <v-card
                    max-width="344"
                    outlined
            >
                <v-list-item>
                    <v-list-item-title class="text-center my-7">
                        아직 공유한 인맥이 없어요!<br/>
                        공유할 인맥을 입력해 주세요.
                    </v-list-item-title>
                </v-list-item>

                <v-card-actions class="pa-3 pt-0">
                    <v-btn
                            outlined
                            text
                            style="width: 49%"
                    >
                        직접입력하기
                    </v-btn>
                    <v-btn
                            outlined
                            text
                            style="width: 49%"
                    >
                        내 연락처 동기화
                    </v-btn>
                </v-card-actions>
            </v-card>
        </div>
    </div>
</template>

<script>
    import ConnectionsListCard from "../components/ConnectionsListCard";

    export default {
        components: {
            ConnectionsListCard
        },
        data: () => ({
            connectionsList: [
                // {
                //     name: '김OO',
                //     job: '변호사',
                //     company: '법무법인 돈다발',
                //     count: 3,
                //     price: 70000
                // },
                // {
                //     name: '김OO',
                //     job: '변호사',
                //     company: '법무법인 돈다발',
                //     count: 3,
                //     price: 30000
                // },
                // {
                //     name: '김OO',
                //     job: '변호사',
                //     company: '법무법인 돈다발',
                //     count: 3,
                //     price: 50000
                // },
                // {
                //     name: '김OO',
                //     job: '변호사',
                //     company: '법무법인 돈다발',
                //     count: 3,
                //     price: 100000
                // },
                // {
                //     name: '김OO',
                //     job: '변호사',
                //     company: '법무법인 돈다발',
                //     count: 3,
                //     price: 70000
                // },
            ],
        }),
    }
</script>

<style scoped>

</style>