<template>
    <div>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores consectetur debitis dolor expedita quod neque ex
            beatae optio libero ipsam?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores consectetur debitis dolor expedita quod neque ex
            beatae optio libero ipsam?</p>
        <div>{{ data }}</div>
    </div>
</template>

<script setup>
const { data } = await useFetch('/api/ninja?name=amsyar',{
    method: 'post',
    body: { age: 30 }
})
</script>

<style scoped>
h2{
    margin-bottom: 20px;
    font-size: 36px;
}
p{
    margin: 20px 0;
}
</style>