<template>
    <div id="faq">
        <div class="container py-5">
            <div class="row pt-5">
                <div class="col-md-12 text-center">
                    <h1>Frequently Asked Question</h1>
                </div>
            </div>
            <div class="row my-5">
                <div class="col-md-12">
                    <div class="card shadow mt-3">
                        <div class="card-body">
                            <a-collapse :bordered="false">
                                <template v-slot:expandIcon="props">
                                    <a-icon type="caret-down" :rotate="props.isActive ? 180 : 0" />
                                </template>
                                <a-collapse-panel header="What is Tezos?" key="1" :style="customStyle">
                                    <p>Tezos is a new decentralized Delegated Proof-of-Stake blockchain that governs itself by establishing a true digital commonwealth. It facilitates formal verification, a technique which mathematically proves the correctness of the code governing transactions and boosts the security of the most sensitive or financially weighted smart contracts. Please refer to tezos.com and tezos.help for more detailed information, documentations and other useful resources.</p>
                                </a-collapse-panel>
                            </a-collapse>
                        </div>
                    </div>
                    <div class="card shadow mt-3">
                        <div class="card-body">
                            <a-collapse :bordered="false">
                                <template v-slot:expandIcon="props">
                                    <a-icon type="caret-down" :rotate="props.isActive ? 180 : 0" />
                                </template>
                                <a-collapse-panel header="What is Baking?" key="1" :style="customStyle">
                                    <p>“Baking” is the act of signing and publishing blocks to the Tezos blockchain. Bakers are a crucial component of the PoS consensus mechanism by ensuring that all transactions in a block are correct, that the order of transactions is agreed upon, and that no double-spending has occurred. Bakers validate all transactions and add them to the blockchain and get rewarded with additional Tezzies in that process.</p>
                                </a-collapse-panel>
                            </a-collapse>
                        </div>
                    </div>

                    <div class="card shadow mt-3">
                        <div class="card-body">
                            <a-collapse :bordered="false">
                                <template v-slot:expandIcon="props">
                                    <a-icon type="caret-down" :rotate="props.isActive ? 180 : 0" />
                                </template>
                                <a-collapse-panel header="Why Should I delegate?" key="1" :style="customStyle">
                                    <p>Building a "baking" node requires tech knowledge, specific hardware and security measures. By delegating your Tezzies to Bake'n'Rolls you free yourself from the need of running the node on your own while having full control of your Tezzies.</p>
                                </a-collapse-panel>
                            </a-collapse>
                        </div>
                    </div>

                    <div class="card shadow mt-3">
                        <div class="card-body">
                            <a-collapse :bordered="false">
                                <template v-slot:expandIcon="props">
                                    <a-icon type="caret-down" :rotate="props.isActive ? 180 : 0" />
                                </template>
                                <a-collapse-panel header="Are my Tezzies safe when I delegate?" key="1" :style="customStyle">
                                    <p>Yes, your Tezzies remains on your wallet and under your control. Nevertheless, you need to keep your private keys safe as usual in the crypto.</p>
                                </a-collapse-panel>
                            </a-collapse>
                        </div>
                    </div>

                    <div class="card shadow mt-3">
                        <div class="card-body">
                            <a-collapse :bordered="false">
                                <template v-slot:expandIcon="props">
                                    <a-icon type="caret-down" :rotate="props.isActive ? 180 : 0" />
                                </template>
                                
                                <a-collapse-panel header="How can I delegate my Tezzies to Bake'n'Rolls?" key="1" :style="customStyle">
                                    <p>There are few options to delegate to us, the common used one is Tezbox and Cryptonomic Galleon wallet with intergrated "delegate" feature. In order to become Bake'n'Rolls delegate input our address in the delegate address field of your wallet:</p>
                                    <h4 class="text-center text-info"><a href="https://mvp.tezblock.io/account/tz1NortRftucvAkD1J58L32EhSVrQEWJCEnB" target="_blank">tz1NortRftucvAkD1J58L32EhSVrQEWJCEnB</a></h4>
                                </a-collapse-panel>
                            </a-collapse>
                        </div>
                    </div>

                    <div class="card shadow mt-3">
                        <div class="card-body">
                            <a-collapse :bordered="false">
                                <template v-slot:expandIcon="props">
                                    <a-icon type="caret-down" :rotate="props.isActive ? 180 : 0" />
                                </template>
                                <a-collapse-panel header="How much will I make?" key="1" :style="customStyle">
                                    <p>We offer dynamic annual yield, depending on how much you earned during each cycle. Expected annual yield is ~8-9%. It's the most flexible option for you because in this case you will receive exactly the same amount you actually baked minus our 9% fee.</p>
                                </a-collapse-panel>
                            </a-collapse>
                        </div>
                    </div>

                    <div class="card shadow mt-3">
                        <div class="card-body">
                            <a-collapse :bordered="false">
                                <template v-slot:expandIcon="props">
                                    <a-icon type="caret-down" :rotate="props.isActive ? 180 : 0" />
                                </template>
                                <a-collapse-panel header="When and how do I get paid?" key="1" :style="customStyle">
                                    <p>We provide payments on every cycle after the rewards amount has been unfrozen by the Tezos Network. For example, rewards for cycle 16 are paid on cycle 22, after they have been unfrozen.</p>
                                </a-collapse-panel>
                            </a-collapse>
                        </div>
                    </div>

                    <div class="card shadow mt-3">
                        <div class="card-body">
                            <a-collapse :bordered="false">
                                <template v-slot:expandIcon="props">
                                    <a-icon type="caret-down" :rotate="props.isActive ? 180 : 0" />
                                </template>
                                <a-collapse-panel header="Is there a minimum payment threshold?" key="1" :style="customStyle">
                                    <p>No. We make payments every cycle of the Tezos network after the reward amount has been unfrozen no matter how big is your reward amount.</p>
                                </a-collapse-panel>
                            </a-collapse>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FAQ',
    data() {
      return {
        text: `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`,
        customStyle:
          'background: #ffff;margin-bottom: 0px;border: 0; padding-right: 0px; font-size: 20px;overflow: hidden',
      };
    },
}
</script>

<style scoped>
.ant-collapse .ant-collapse-item .ant-collapse-header .anticon {
  left: initial;
  right: 16px;
  font-size: 20px;
}
.ant-collapse-header{
    font-size: 2.2rem !important;
    padding-left: 0px !important;
}

.code {
    color: #7AC8ED !important;
}
p {
    font-size: 18px;
    padding-left: 20px;
    padding-right: 15px;
}

.card-body {
    padding-left: 0px;
}
</style>