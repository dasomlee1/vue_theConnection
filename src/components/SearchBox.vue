<template>
    <v-toolbar
            color="white"
    >
        <v-toolbar-title>아이디어 검색</v-toolbar-title>
        <v-autocomplete
                cache-items
                class="mx-4"
                flat
                hide-no-data
                hide-details
                label="업종,직업,회사명,관련검색어 등 생각나는 아이디어를 검색하세요."
        ></v-autocomplete>
        <v-btn icon>
            <v-icon class="fas fa-search">mdi-dots-vertical</v-icon>
        </v-btn>
    </v-toolbar>
</template>

<script>
    export default {
        name: "SearchBox"
    }
</script>

<style scoped>

</style>