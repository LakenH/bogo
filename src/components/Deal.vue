<template>
    <div class="bogo-deal column is-one-third-desktop is-half-tablet">
        <div class="card">
            <div class="card-content bogo-deal-content has-text-centered">
                <div class="bogo-deal-head">
                  <img :src="img"/>
                  <p class="name">{{ product }}</p>
                </div>
                <div class="terms">
                    <p>{{ deal_type }}</p>
                    <p class="is-size-7">{{ terms }}</p>
                </div>
                <p class="dates">Valid: {{ date_start }} - {{ date_end }}</p>
            </div>
        </div>
        <button class="bogo-deal-btn button is-primary">
          <span class="icon">
            <i class="fas fa-plus"></i>
          </span>
      </button>
    </div>
</template>

<script>
export default {
  name: 'Deal',
  props: {
    product: String,
    img: String,
    deal_type: String,
    terms: String,
    date_start: String,
    date_end: String,
  },
};
</script>

<style lang="scss">
  @import "../assets/sass/custom.scss";

  .bogo-deal {
    position: relative;
    display: flex;
    .bogo-deal-btn {
      border-radius: 50%;
      position: absolute;
      right: 0;
      bottom: 0;
    }
    .card {
      height: 100%;
      min-height: 250px;
    }
    img {
      max-width: 100px;
    }
  }
  .bogo-deal-content {
    display: flex;
    flex-direction: column;
    height: 100%;
    .terms {
      margin-top: auto;
    }
  }
  .bogo-deal-head {
    width: 100%;
    display: flex;
    .name {
      margin: auto;
      color: $primary;
      font-size: 24px;
    }
  }
  @media (max-width: 1250px) {
    .bogo-deal-head .name {
      font-size: 18px;
    }
  }
</style>
