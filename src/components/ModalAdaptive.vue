<template>
    <modal
        name="adaptive"
        transition="nice-modal-fade"
        :min-width="320"
        :min-height="200"
        :delay="100"
        :adaptive="true">
    <div class="example-modal-content">
        Appropriately exploit professional infrastructures rather than unique growth strategies. Assertively build leveraged growth strategies vis-a-vis multimedia based vortals. Progressively simplify cross-platform value through interactive imperatives. Objectively
        implement enabled web services after plug-and-play ROI. Distinctively impact inexpensive schemas before installed base imperatives. Holisticly benchmark pandemic process improvements without wireless experiences. Efficiently create worldwide partnerships
        after tactical vortals. Uniquely productize enabled platforms vis-a-vis timely processes. Conveniently unleash standards compliant niches through highly efficient testing procedures. Rapidiously enable pandemic niche markets whereas viral markets.
        Assertively simplify alternative partnerships and error-free e-commerce. Professionally formulate 24/365 internal or "organic" sources through equity invested mindshare. Globally redefine unique best practices for.
    </div>
    </modal>
</template>
<script>
export default {
name: 'ModalAdaptive'
}
</script>
<style lang="scss">
@import "@/assets/sass/grid-mixins.scss";
@import "@/assets/sass/variables.scss";

div.v--modal-box {
    top: 100px!important;
    left: 0!important;
    margin: 0 auto;
    width: 290px!important;

    @media (min-width: $screen-md) {
        top: 300px!important;
        width: 500px!important;
        margin: 0 auto;
    }

    @media (min-width: $screen-lg) {
        width: 650px!important;
        margin: 0 auto;
    }

}
</style>