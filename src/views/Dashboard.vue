<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="row justify-content-center mt-4">
        <form action="" class="form-inline">
            <input type="text" placeholder="Enter your KT1..." class="form-control card shadow" name="" id="search">
            <input type="submit" value="Search" class="btn button btn-info ml-2 shadow" />
        </form>
      </div>

      <div class="row mt-5">
        <div class="col-md-8 col-sm-12 col-12 mt-3">
          <div class="card shadow">
            <div class="card-header pt-3">
              <p><strong class="text-primary">Rewards Obtained</strong></p>
            </div>
            <div class="card-body">
              <div>
                <apexchart height="150" type="line" :options="options" :series="series"></apexchart>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-12 col-12 mt-3">
          <div class="card shadow">
            <div class="card-header pt-3">
              <p><strong class="text-primary">Delegation Status</strong></p>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-8 col-sm-8 col-8">
                  <p>Delegation Status:</p>
                  <p>Current Balance:</p>
                </div>
                <div class="col-md-4 col-sm-4 col-4 pb-3">
                  <p><strong class="text-success">Delegating</strong></p>
                  <p><strong>0.00 XTZ</strong></p>
                </div>
              </div>
              <hr class="py-3">
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-md-12 col-sm-12 col-12">
          <div class="card shadow">
            <div class="card-header">
              <p><strong class="text-primary">Rewards Table</strong></p>
            </div>
            
            <div class="card-body">
              <table class="table">
                <thead>
                  <tr>
                    <th>Cycle</th>
                    <th>Balance, ꜩ</th>
                    <th>Share, %	</th>
                    <th>Cycle rewards, ꜩ	</th>
                    <th>Fee, %</th>
                    <th>Rewards, ꜩ	</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody class="tbody">
                  <tr>
                    <td>160</td>
                    <td>54.738891</td>
                    <td>0.001%	</td>
                    <td>2605.520024	</td>
                    <td>9%</td>
                    <td>0.026758</td>
                    <td>Rewards Frozen</td>
                  </tr>
                  <tr>
                    <td>160</td>
                    <td>54.738891</td>
                    <td>0.001%	</td>
                    <td>2605.520024	</td>
                    <td>9%</td>
                    <td>0.026758</td>
                    <td>Rewards Frozen</td>
                  </tr>
                </tbody>
                
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer class="mt-5" />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Dashboard',
  components: {
    Navbar,
    Footer
  },
  data() {
    return { 
      options: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [{
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }]
    }
  }
}
</script>

<style scoped>
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
p {
  font-size: 16px;
}
tr td {
  background: #C9DAF8;
}
th {
  font-size: 16px;
}
td {
  font-size: 16px;
}
input[type="text"]#search {
    width: 14rem;
}
@media screen and (min-width: 767px) {
      input[type="text"]#search {
      width: 24rem;
    }
}
</style>
