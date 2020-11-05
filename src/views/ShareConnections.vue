<template>
    <div class="share-connections">
        <ConnectionsListCard :connectionsList = "connectionsList"/>
        <v-data-table
                :headers="headers"
                :items="desserts"
                class="elevation-1 mt-5"
        >
            <template v-slot:item.more="{ item }">
                <v-btn>{{item.more}}</v-btn>
            </template>
            <template v-slot:item.glutenfree="{ item }">
                <v-simple-checkbox
                        v-model="item.glutenfree"
                ></v-simple-checkbox>
            </template>
        </v-data-table>
        <div class="btn-group float-lg-right mt-3">
            <v-btn class="grey white--text">거절하기</v-btn>
            <v-btn class="grey white--text ml-3">공유승낙 요청하기</v-btn>
        </div>
    </div>
</template>

<script>
    import ConnectionsListCard from "../components/ConnectionsListCard";

    export default {
        components: {
            ConnectionsListCard
        },
        data () {
            return {
                desserts: [
                    {
                        date: '2020.04.27',
                        name: '김은주',
                        company: '주식회사 티디아이',
                        department: '전략개발본부',
                        rank: '과장',
                        more: '상세',
                        glutenfree: true,
                    },
                    {
                        date: '2020.04.27',
                        name: '이정화',
                        company: '주식회사 티디아이',
                        department: '데이터사이언스',
                        rank: '사원',
                        more: '상세',
                        glutenfree: true,
                    },
                    {
                        date: '2020.04.27',
                        name: '이다솜',
                        company: '주식회사 티디아이',
                        department: '전략개발본부',
                        rank: '사원',
                        more: '상세',
                        glutenfree: true,
                    },
                ],
                headers: [
                    {
                        text: '신청일자',
                        align: 'center',
                        sortable: false,
                        value: 'date',
                    },
                    { text: '신청인', value: 'name', align: 'center', },
                    { text: '직장명', value: 'company', align: 'center', },
                    { text: '부서', value: 'department', align: 'center', },
                    { text: '직급', value: 'rank', align: 'center', },
                    { text: '상세', value: 'more', align: 'center', },
                    { text: '', value: 'glutenfree',},
                ],
                connectionsList: [
                    {
                        name: '김OO',
                        job: '변호사',
                        company: '법무법인 돈다발',
                        count: 3,
                        price: 70000
                    },
                ],
            }
        },
    }
</script>