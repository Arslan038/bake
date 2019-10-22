<template>
    <div id="features">
        <div class="container py-5">
            <div class="row">
                <div class="col-md-12 text-center pt-5">
                    <h1>Our Features</h1>
                </div>
            </div>
            <div class="row features py-5">
                <div class="col-md-4 col-sm-6 col-12 text-center mt-3">
                    <i class="fas fa-user-secret"></i>
                    <h3 class="py-2">Anonymity</h3>
                    <p>No sign-up required as well as any other personal information - we respect your privacy.</p>
                </div>
                <div class="col-md-4 col-sm-6 col-12 text-center mt-3">
                    <i class="fas fa-chart-pie"></i>
                    <h3 class="py-2">9% Fee</h3>
                    <p>We offer dynamic yield based on the actual network return rate minus fee amount.</p>
                </div>
                <div class="col-md-4 col-sm-6 col-12 text-center mt-3">
                    <i class="fas fa-shipping-fast"></i>
                    <h3 class="py-2">Frequent Payments</h3>
                    <p>Your baking rewards are promtly distributed on the beginning of every cycle.</p>
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
    name: 'Features'
}
</script>

<style scoped>
    #features {
        background: #fff;
        scroll-behavior: smooth;
    }
    .features i {
        font-size: 6rem;
        padding-bottom: 1rem;
        color: #7AC8ED;
    }

    .features p {
        line-height: 1.6;
        font-size: 1.35rem;
        color: #9EA4A9;
        margin-bottom: 0;
    }
</style>