

<script setup>
    import { useStore } from '@nanostores/vue';
    import {itemsStore} from '../stores/itemsStore.js'


    let $itemsStore = useStore(itemsStore)
</script>



<template>
    <p>
        Total items on the list: {{$itemsStore.length}}
    </p>
</template>