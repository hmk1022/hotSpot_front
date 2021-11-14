<template>
<div class="nav-wrap">
    <b-nav >
        <b-nav-item href="#1">Link 1</b-nav-item>
        <b-nav-item href="#2">Link 2</b-nav-item>
        <b-nav-text>Plain text</b-nav-text>
    </b-nav>
</div>
</template>

<script>
export default {
    name: "Navigation"
}
</script>

<style>
.nav-wrap{
    position: fixed;
    z-index: 5000;
    font-weight: bold;
}
</style>