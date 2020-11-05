<template>
    <div class="d-flex flex-wrap">
        <v-card class="card-list mt-5 mr-5"
                style="width: 30%; min-width: 250px;"
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
                    <v-card-actions class="card-btn">
                        <v-btn @click="pageMove()">
                            <v-icon class="far fa-envelope"></v-icon>
                        </v-btn>
                        <v-btn>
                            <v-icon class="fas fa-user-slash"></v-icon>
                        </v-btn>
                        <v-btn>
                            <v-icon class="fas fa-trash-alt"></v-icon>
                        </v-btn>

                    </v-card-actions>
                </v-row>
            </v-list-item>
            <v-list-item-content class="px-5">
                <v-list-item-title class="mb-1">{{item.job}}</v-list-item-title>
                <v-list-item-title class="mb-1">{{item.company}}</v-list-item-title>
                <v-list-item-subtitle class="mt-3 font-weight-bold text-right">
                    {{item.price}} 원
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-card>
    </div>
</template>
<script>
    export default {
        props: {
            connectionsList: Object
        },
        methods: {
            pageMove() {
                this.$router.push({name: 'ShareConnections'})
            }
        }
    }
</script>

<style scoped>

</style>