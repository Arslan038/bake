<template>
    <div id="contact">
        <div class="container py-5">
            <div class="row pt-5">
                <div class="col-md-12 text-center">
                    <h1>Contact Us</h1>
                    <p class="touch">Get in touch if you have any sort of questions.</p>
                </div>
            </div>
            <div class="col-md-12 text-center">
                <div class="row mt-5">
                    <div class="col-md-2"></div>
                    <div class="col-md-2 col-sm-6 col-12 text-center">
                        <a href="tg://resolve?domain=zedrone"><i class="fab fa-telegram-plane"></i></a>
                    </div>
                    <div class="col-md-2 col-sm-6 col-12 text-center">
                        <a href="https://twitter.com/bakenrolls"><i class="fab fa-twitter"></i></a>
                    </div>
                    <div class="col-md-2 col-sm-6 col-12 text-center">
                        <a href="mailto:delegate@bakenrolls.com"><i class="fas fa-at"></i></a>
                    </div>
                    <div class="col-md-2 col-sm-6 col-12 text-center">
                        <a href="https://medium.com/@bakenrolls"><i class="fab fa-medium-m"></i></a>
                    </div>
                    <div class="col-md-2"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Contact'
}
</script>

<style scoped>
    #contact {
        background: #fff;
    }
    .touch {
        font-size: 20px;
    }
    #contact i {
        font-size: 6rem;
        padding-bottom: 1rem;
        color: #7AC8ED;
    }
    #contact i:hover {
        color: #63A5C4;
    }
</style>