<script>

    export default {
        name: 'AppHeader'
    }

</script>

<template>

    <header class="p-3">
        <div id="logo">
            <a href="#"><img class="img-fluid" src="../assets/img/logo.jpg" alt="logo"></a>
        </div>
        <div>
            <h1>Yu-Gi-Oh API</h1>
        </div>
    </header>

</template>

<style lang="scss" scoped>

@use '../styles/partials/mixins' as *;

header {
    
    @include flex(row, flex-start);
    gap: 2rem;

    #logo {
        width: 10%;
    }
}

</style>
