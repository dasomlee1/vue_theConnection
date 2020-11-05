<template>
    <v-card
            class="user-info pa-2"
            outlined
    >
        <v-list-item class="grow">
            <v-list-item-avatar color="grey darken-3">
                <v-img
                        class="elevation-6"
                        alt=""
                        src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                ></v-img>
            </v-list-item-avatar>
            <v-list-item-title>이다솜</v-list-item-title>
            <v-row
                    class="pr-1"
                    justify="end"
            >
                <router-link :to="{name:'ShareConnections'}">
                    <v-icon class="far fa-envelope"></v-icon>
                </router-link>
            </v-row>
        </v-list-item>

        <hr/>

        <v-list-item class="grow">
            <v-list-item-avatar>
                <v-icon class="fas fa-user"></v-icon>
            </v-list-item-avatar>
            <v-list-item-title class="text-sm-start">
                연결 가능 인맥
                <span class="float-lg-right">0</span>
            </v-list-item-title>
        </v-list-item>

        <v-card-actions>
            <v-btn text class="black white--text v-picker--full-width"
                @click="pageMove()"
            >
                인맥관리
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        components: {

        },
        methods: {
            pageMove(){
                this.$router.push({name : 'ConnectionsManagement'})
            }
        }
    }
</script>


