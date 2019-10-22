<template>
    <div id="dashboard">
        <div class="container py-5">
            <div class="row">
                <div class="col-md-12 text-center pt-5 pb-5">
                    <h1>Dashboard</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 mt-3">
                    <div class="card shadow card-border py-2">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-8 col-sm-8 col-8">
                                    <strong class="text-uppercase card-label">We are baking for</strong>
                                    <h5 class="calculator pt-2">1 year 3 months 24 days</h5>
                                </div>
                                <div class="col-md-4 col-sm-4 col-4 text-right">
                                    <i class="fas fa-business-time fa-2x text-gray pt-3"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mt-3">
                    <div class="card shadow card-border py-2">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-8 col-sm-8 col-8">
                                    <strong class="text-uppercase card-label">REWARDS DISTRIBUTED</strong>
                                    <h5 class="calculator pt-2">453,391 XTZ / $ 400,214</h5>
                                </div>
                                <div class="col-md-4 col-sm-4 col-4 text-right">
                                    <i class="fas fa-hand-holding-usd fa-2x text-gray pt-3"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-3 col-sm-12 col-xs-12 col-12 mt-3">
                    <div class="card shadow card-border py-2">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-9 col-sm-9 col-9">
                                    <strong class="text-uppercase card-label">BLOCKS BAKED</strong>
                                    <h5 class="calculator pt-2">5,879</h5>
                                </div>
                                <div class="col-md-3 col-sm-3 col-3 text-right">
                                    <i class="fas fa-cubes fa-2x text-gray pt-3"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-3 col-sm-12 col-12 col-xs-12 mt-3">
                    <div class="card shadow card-border py-2">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-9 col-sm-9 col-9">
                                    <strong class="text-uppercase card-label">BLOCKS VALIDATED</strong>
                                    <h5 class="calculator pt-2">182,480</h5>
                                </div>
                                <div class="col-md-3 col-sm-3 col-3 text-right">
                                    <i class="fas fa-thumbs-up fa-2x text-gray pt-3"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-3 col-sm-12 col-12 col-xs-12 mt-3">
                    <div class="card shadow card-border py-2">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-9 col-sm-9 col-9">
                                    <strong class="text-uppercase card-label">BLOCKS STOLEN</strong>
                                    <h5 class="calculator pt-2">199</h5>
                                </div>
                                <div class="col-md-3 col-sm-3 col-3 text-right">
                                    <i class="fas fa-crosshairs fa-2x text-gray pt-3"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-3 col-sm-12 col-12 col-xs-12 mt-3">
                    <div class="card shadow card-border py-2">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-9 col-sm-9 col-9">
                                    <strong class="text-uppercase card-label">DELEGATORS</strong>
                                    <h5 class="calculator pt-2">340</h5>
                                </div>
                                <div class="col-md-3 col-sm-3 col-3 text-right">
                                    <i class="fas fa-users fa-2x text-gray pt-3"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mt-3">
                <div class="col-md-12">
                    <div class="card shadow card-border">
                        <div class="card-body">
                            <div class="row py-3">
                                <div class="col-md-12 col-sm-12 col-12">
                                    <p><strong class="text-uppercase card-label">HOW MUCH WILL I GET</strong></p>
                                    <div class="row">
                                        <div class="col-md-3 col-sm-6 col-12 mt-2">
                                            <p class="head-label">Amount Staked</p>
                                            <input type="text" value="1000" class="form-control">
                                        </div> 
                                        <div class="col-md-3 col-sm-6 col-12 mt-3">
                                            <p class="head-label">Estimated Annual ROI</p>
                                            <h5 class="calculator pt-2">6.592 %</h5>
                                        </div>
                                        <div class="col-md-3 col-sm-6 col-12 mt-3">
                                            <p class="head-label">Estimated Annual Reward</p>
                                            <h5 class="calculator pt-2">0.00 XTZ</h5>
                                        </div>
                                        <div class="col-md-3 col-sm-6 col-12 mt-3">
                                            <p class="head-label">Estimated Cycle Reward</p>
                                            <h5 class="calculator pt-2">0.00 XTZ</h5>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row justify-content-center mt-5">
                <div class="col-md-12 text-center">
                    <h3>Already delegating? Check your rewards</h3>
                </div>
            </div>
            <div class="row justify-content-center mt-4">
                <form action="/dashboard" class="form-inline">
                    <input type="text" placeholder="Enter your KT1..." class="form-control  card shadow" name="" id="search" required>
                    <input type="submit" value="Search" class="btn button btn-info ml-2 shadow" />
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Dashboard'
}
</script>

<style scoped>
    #dashboard {
        background: #F8F8F8;
        
    }
    .text-gray {
        color:#dddfeb !important
    }
    .card-border {
        border-left: 0.35rem solid #7AC8ED !important;
    }
    .calculator {
        color: #5a5c69 !important;
        font-size: 1.45rem;
        font-weight: 600;
        color: #747681;
    }
    .card-label {
        color: #7AC8ED;
        
    }
    .head-label {
        color: #6c757d;
        font-size: 1.0rem;
        margin-top: 0;
        font-weight: 600;
    }

    input[type="text"]#search {
        width: 14rem;
    }

    .button {
        background: #7AC8ED;
        color: #fff;
        border: 0;
        box-shadow: 2px solid #5a5c69;
    }
    .button:hover {
        background: #7AC8ED;
        color: #fff;
    }

    @media screen and (min-width: 767px) {
        input[type="text"]#search {
        width: 24rem;
    }
    }
</style>