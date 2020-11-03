<template>
    <div>
        <SearchBox />
        <ConnectionsListLine />
    </div>
</template>

<script>
    import SearchBox from "../components/SearchBox";
    import ConnectionsListLine from "../components/ConnectionsListLine";

    export default {
        components:{
            SearchBox,
            ConnectionsListLine
        }

    }
</script>

<style scoped>

</style>