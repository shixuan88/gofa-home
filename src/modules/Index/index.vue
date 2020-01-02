<script>
export default {
  name: 'about',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        title: {
          text: '堆叠区域图'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            areaStyle: {},
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      })
    }
  }
}
</script>
<template>
  <div id="index">
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="grid-content bg-purple content">
          <div class="img-content"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAALrElEQVR4Xu2dbXBU1RnH/8/efUk2ISQ3BEzC+3sSQypaqqO2YgiIGhHCi1Ss6Ew7HVunY8cZO04/MP1AW22rra3vI1BARCbhJSIQRAgi0vha3SURJICFACYhISGbbPbuns7ZgIbce0gke3IvyeVb2L3PPef/u//nOefuOfcSuvybfYBlMxfuIsJUMAwnIL7rd+y/r1wBBrSCcIIxfEIhbN12Ix3sHI0u/nHTfhaf5MJjDgfmMoZv///KT20f2Z0CRGCRCDYGh+Bve8ZQG/9+VPhsP3OPCOAFIuR1F8T+XIoCn31djUcOLqT2KJBZH7InwTBPyqnsoD1TgFCy44e0nKZ/yCa5GNbQBbf07Gj7WzFXgBDRIlhCBf9hTxCwwOgEDgLGxMOT7oEnwQnFSXZtuRIQGgNr0RA+FUTwaCuCEWYchQEbqOAAKyZgVNevxClwTEtGYiCMSHUAbY0haKJAV9LIgXQMv7CTXXCO9SLOq8BRcQ7NbRqMsByjGQfYfgLcnQXiAW5RkXSyFcEjAQQHkniy+zrOC09mPDz7zqKp6wXOgHYq+IB91LUR472IS3ZD+agRLbIbOBDj35CMhIYQtCMt+oud8g2A/DgVSf4mBOpD0AaiYLL7nOqCMycR3r0NaOp6Lrp9v94hd6YhZUcdGsKC4iO7wf09vpOAGUOQsr0WDT0CcvcwqG+dwdn+LoyZ/RNpTNP36R1SmA619JQNRCYwkcY0/T0DINdALT1tA5EKRKAx3WYDkam7MHahEMheO2WZQUSYsn5iAzGDB8RAym2HmEFECORWAyBz0qFutkdZUjmJNKZbd+sdMicD6uYae5Qlk4hIY7rlXQMgmVA3n7SBSAUi0JhutoHI1F0Ye44QyC7bIWYQEQK5yQDI3EyoG+2UJZWTSGO66R29Q2wgUllEgwuB3GgDka++wRnEQMoMHDIC6sb/2aMsmaTmCjSmH+3QA5k3AmrJVQDkBhUJC0ciLS8FSYlOKPXtCFXU49zrx3GmuhntMgXtbWyRxlclEL667+fjMXTJaGS4HVA6i8N/5GwOQXu2CsffPoXG3gon63ghkGnbDRwyHGrJCWulLDeBHBekn52O5MezMNpJcIgEC4ShPfYxDlU1I7pmNhwBC0Vkyfv9484TaEw3WBxImgfKryciI3swEpULC/VSPXB5FTi7k6GxHaFmrWOhRogh8n4tGl/9CmcCYcM1Ud2Fi+nnYiDbrFtD+GKAp67DmFvSoFJs1uOzf1ej5rlDOB1Tda8gmDBlXW8ApGgE1GILFPUUF5S3piPX06VOXEH/vz3kaAtaFu9DlWbyihqRxnT9Vr1DikZCLf6672qI4gCGeeBKckNRKJpe2JFmBJNdULbnIy+WC8G/bkHrovdQyQCWlwKvA6AwEKkLQqsJIKT1UZ0RaUxT3zIXyIRB8Dyeg+E5yRgUr0SLNDUEEVr4Hvw8S+2YEWMgAQQW7EXlIAXK1tsxxdNxTrRHED54Duef9uNE1bmOgYDMf5YEMnEQPM9Nw8QhcZeuLY4C2Qs/rxuxBnK8BYH55agc7LoUyEXxa9sQfKQCh2TPY4RAris1cMgoqMXH5aYsLvZTUzHq9nQM6Vqvz3YCUhZjhxw9fwGIG8q2Tg7p7IZ3T6Pu8Y9wXKpDBBqTWUD4svzSfOSkuC91BxchCqS8wyFlBbFNWUeb0VJUjiq+mHxb/ncpq7P4Z9oQLNqDgwEN0ipKkQhI3ha9QxaMgrpBskMGu6HsmokpRpM7DmR+Ofx8W8TOGAP5qgkt88tRleLpAML3wXR1QnMIobm74a8LIizLJSKNaYpJQPgVuqsAeU6HflcWB1JUDn9QA3ssB+mxmYJ0SHu6Fe2vHEatyh0ywxhIUwjavN3w1ZoCZJOBQ0ZD3XBMbg2JApl1GSB74D/bJu8KTXFD2T5TAKQd2r274auXeP4FAo0p1yQgPGXtFgBp0aC9/CVOyszh8U44Hs3GCJfB/bCmC0DqTAGy0cAhY6BuOCrXIVEgdxg7RFbe7mlcDmTOLvjqZaYsgcZ0bYkeyMIxUN+UDISnrN2zrQ1EpkNEGpsGhDtkj4WB3POOXIcIgWQX6x2yaAzU9X3gkPI7reuQwnfgk+kQkcZkA9FXFl5DCnfCJ3MeIgSStcGghoyD+uYRuUWd15C9d1vXIXfthK++Vd6we6FAY7IyEC2CyEtVOMlvi/d0hNTd99Lj4fplFoYbTUgvHssdYhqQyW8a1JCxUNdXy3UIL+r7Ci/vkGAYkSV7UOk7G7vb4VnJiFufjyyXQ/x7fBRIGXx1Eh2ySKAxTVpvAGQc1PV9kLL23XN5IBpDZPUhnDrdGjuHpMXBtXQiMi7nkHMcyHbJRV2gsWlAuEPe7wZId+lH1uemApnwht4h942D+oZkh/B7Se/PsWZR50Du3AZfrcRbJyKNySwgfJS13waie1oGjX9d75DF46Gu+0puUedAPphrXYfMfhu+WolFXaSxDcSgEPGUZRqQcWsNHDIB6rrDch3Ca8gH86zrkFlb5Q57Fws0pnFrTALisTiQUrnDXiGQsQZAfjoB6ut94JADRd3PQ1ZU4dTp7zFTH+aF6xdZyOzNkJinrJmSgYg0ptGr9Q65fwLUtbKBeKBUdAOEz9QXlqHy8/qez9RzUxG3ZTZyegukoFRuURdpbB4QN5SK+d04JILIi37U1AR6vvkmPR7uR6dgeK+BbJE7DxECGbXKwCGToK79UnJR90D5cIF1i3rBZvi+kTjsvV+gMdlA9F7iNWTGZskpSwRk5Eq9Q5ZMgrpGtkP4Y2gXWdchMzbJdYhIYxq5wiQgHgsDCULL5w4JyPuBSghkhFlA3FA+vs+iDglCm75J7sRQDOQ1A4dMhrqmSn5RtzwQmQ4RaEyZZgFxQ/l0sXUdcluJ3GHvEhGQjFf1DnlgMtTV8h3i+GQx8twGq897M4eIxbGNQYRuK4Zf5t1ekcZkFhCvE7SnCDmZifDEQsRYxjjejNb8YlS2Stw+LQSS/oo5DuFbDP54MzJ/loVhF9+FFUtRexPrxc9R84cKnOpNjO6OFQN52QBIFtTVlXKLOm9wmhfKujswPjsVCRaBwirOoGlpGaob2+TtnuJ9f0CgMV1jIhDesFQPlN9ch6GzRkMd5oWbb1Pu7uqK9edhBnbyPIJbjqLuhc9Q1yxxK9vFtouBvGSeQ2It7NUUTwhkqAGQB7OgruqDlHU1CRjrtoo0pqEv6B3yYDbUVQfl15BYd/JqiifSmNJsIKZwFAN53sAhOVBX+W2HyCT1oEBjGvIvG4hM4UWxhUBSDYAszYG60naIVE4ijSn1n3qHLL0W6kqfnbJkEhFpTCkGQB66FuoKG4hMHhBpTCn/0DvkoVyoK76wHSKTiEhjSraByNRdGFsM5O+2Q8wgIgQy2ADIw7lQX7NTllROIo1p8LN6hzw8Beprn9s1RCYRkcaU9IydsmQKL4otTFmJBkDslCUfkTBlJf7V4PeQXKSsO4gGTdoD7uR32MpncCrA4iykrPYZvL47wQDIvROQVFGDQE2L/YJ7GWAzEuCclgHvpsMGL7hP+IveIblp8FyTANfOYzgvo0EDPWbBaCTyTUhffINgVy3I+zTbD7r0Ua38IfiFE5FU3YDgfw0OGuiC9qb/eUPhGZsMz+bDaIronz8fpPinWTEBo7qeJMEFx8yxSGxsQ9hXizb+ZByDAL1p24A5lj/uNjUeSm4a4gbHQSmrRnNLSP/KDMZwjNx/Zk8ohAVG6jgcQM6QKFF3shtOl9L3K0L6A7VQGKyxHVp1I9r9dQhGBI9nDjNsIM9yNpGcWEMQPx2nP4hi9T4wBsbCuD+6Bsr9J/Z7B3Cv1Rvdn9sXAUraf0fLOxalLWNuTxyeZ8AP+nOnrdo3InwabMWvsIzav1sluIzFOd34LQFz6cK7nqzagf7SrmiaIpRoQTyDZRR9Z4l+2eZyNtlJKCSGqaDo9uL4/iKARfrRCoYTjPCJxlCKJ6mqc7v+D0y+ApJSh1yFAAAAAElFTkSuQmCC"/></div>
          <div class="num-content">
            <p class="order-num">今日订单数</p>
            <p><span class="order-count">12,125</span><span class="unit">笔</span></p>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple content">
          <div class="img-content"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAALrElEQVR4Xu2dbXBU1RnH/8/efUk2ISQ3BEzC+3sSQypaqqO2YgiIGhHCi1Ss6Ew7HVunY8cZO04/MP1AW22rra3vI1BARCbhJSIQRAgi0vha3SURJICFACYhISGbbPbuns7ZgIbce0gke3IvyeVb2L3PPef/u//nOefuOfcSuvybfYBlMxfuIsJUMAwnIL7rd+y/r1wBBrSCcIIxfEIhbN12Ix3sHI0u/nHTfhaf5MJjDgfmMoZv///KT20f2Z0CRGCRCDYGh+Bve8ZQG/9+VPhsP3OPCOAFIuR1F8T+XIoCn31djUcOLqT2KJBZH7InwTBPyqnsoD1TgFCy44e0nKZ/yCa5GNbQBbf07Gj7WzFXgBDRIlhCBf9hTxCwwOgEDgLGxMOT7oEnwQnFSXZtuRIQGgNr0RA+FUTwaCuCEWYchQEbqOAAKyZgVNevxClwTEtGYiCMSHUAbY0haKJAV9LIgXQMv7CTXXCO9SLOq8BRcQ7NbRqMsByjGQfYfgLcnQXiAW5RkXSyFcEjAQQHkniy+zrOC09mPDz7zqKp6wXOgHYq+IB91LUR472IS3ZD+agRLbIbOBDj35CMhIYQtCMt+oud8g2A/DgVSf4mBOpD0AaiYLL7nOqCMycR3r0NaOp6Lrp9v94hd6YhZUcdGsKC4iO7wf09vpOAGUOQsr0WDT0CcvcwqG+dwdn+LoyZ/RNpTNP36R1SmA619JQNRCYwkcY0/T0DINdALT1tA5EKRKAx3WYDkam7MHahEMheO2WZQUSYsn5iAzGDB8RAym2HmEFECORWAyBz0qFutkdZUjmJNKZbd+sdMicD6uYae5Qlk4hIY7rlXQMgmVA3n7SBSAUi0JhutoHI1F0Ye44QyC7bIWYQEQK5yQDI3EyoG+2UJZWTSGO66R29Q2wgUllEgwuB3GgDka++wRnEQMoMHDIC6sb/2aMsmaTmCjSmH+3QA5k3AmrJVQDkBhUJC0ciLS8FSYlOKPXtCFXU49zrx3GmuhntMgXtbWyRxlclEL667+fjMXTJaGS4HVA6i8N/5GwOQXu2CsffPoXG3gon63ghkGnbDRwyHGrJCWulLDeBHBekn52O5MezMNpJcIgEC4ShPfYxDlU1I7pmNhwBC0Vkyfv9484TaEw3WBxImgfKryciI3swEpULC/VSPXB5FTi7k6GxHaFmrWOhRogh8n4tGl/9CmcCYcM1Ud2Fi+nnYiDbrFtD+GKAp67DmFvSoFJs1uOzf1ej5rlDOB1Tda8gmDBlXW8ApGgE1GILFPUUF5S3piPX06VOXEH/vz3kaAtaFu9DlWbyihqRxnT9Vr1DikZCLf6672qI4gCGeeBKckNRKJpe2JFmBJNdULbnIy+WC8G/bkHrovdQyQCWlwKvA6AwEKkLQqsJIKT1UZ0RaUxT3zIXyIRB8Dyeg+E5yRgUr0SLNDUEEVr4Hvw8S+2YEWMgAQQW7EXlIAXK1tsxxdNxTrRHED54Duef9uNE1bmOgYDMf5YEMnEQPM9Nw8QhcZeuLY4C2Qs/rxuxBnK8BYH55agc7LoUyEXxa9sQfKQCh2TPY4RAris1cMgoqMXH5aYsLvZTUzHq9nQM6Vqvz3YCUhZjhxw9fwGIG8q2Tg7p7IZ3T6Pu8Y9wXKpDBBqTWUD4svzSfOSkuC91BxchCqS8wyFlBbFNWUeb0VJUjiq+mHxb/ncpq7P4Z9oQLNqDgwEN0ipKkQhI3ha9QxaMgrpBskMGu6HsmokpRpM7DmR+Ofx8W8TOGAP5qgkt88tRleLpAML3wXR1QnMIobm74a8LIizLJSKNaYpJQPgVuqsAeU6HflcWB1JUDn9QA3ssB+mxmYJ0SHu6Fe2vHEatyh0ywxhIUwjavN3w1ZoCZJOBQ0ZD3XBMbg2JApl1GSB74D/bJu8KTXFD2T5TAKQd2r274auXeP4FAo0p1yQgPGXtFgBp0aC9/CVOyszh8U44Hs3GCJfB/bCmC0DqTAGy0cAhY6BuOCrXIVEgdxg7RFbe7mlcDmTOLvjqZaYsgcZ0bYkeyMIxUN+UDISnrN2zrQ1EpkNEGpsGhDtkj4WB3POOXIcIgWQX6x2yaAzU9X3gkPI7reuQwnfgk+kQkcZkA9FXFl5DCnfCJ3MeIgSStcGghoyD+uYRuUWd15C9d1vXIXfthK++Vd6we6FAY7IyEC2CyEtVOMlvi/d0hNTd99Lj4fplFoYbTUgvHssdYhqQyW8a1JCxUNdXy3UIL+r7Ci/vkGAYkSV7UOk7G7vb4VnJiFufjyyXQ/x7fBRIGXx1Eh2ySKAxTVpvAGQc1PV9kLL23XN5IBpDZPUhnDrdGjuHpMXBtXQiMi7nkHMcyHbJRV2gsWlAuEPe7wZId+lH1uemApnwht4h942D+oZkh/B7Se/PsWZR50Du3AZfrcRbJyKNySwgfJS13waie1oGjX9d75DF46Gu+0puUedAPphrXYfMfhu+WolFXaSxDcSgEPGUZRqQcWsNHDIB6rrDch3Ca8gH86zrkFlb5Q57Fws0pnFrTALisTiQUrnDXiGQsQZAfjoB6ut94JADRd3PQ1ZU4dTp7zFTH+aF6xdZyOzNkJinrJmSgYg0ptGr9Q65fwLUtbKBeKBUdAOEz9QXlqHy8/qez9RzUxG3ZTZyegukoFRuURdpbB4QN5SK+d04JILIi37U1AR6vvkmPR7uR6dgeK+BbJE7DxECGbXKwCGToK79UnJR90D5cIF1i3rBZvi+kTjsvV+gMdlA9F7iNWTGZskpSwRk5Eq9Q5ZMgrpGtkP4Y2gXWdchMzbJdYhIYxq5wiQgHgsDCULL5w4JyPuBSghkhFlA3FA+vs+iDglCm75J7sRQDOQ1A4dMhrqmSn5RtzwQmQ4RaEyZZgFxQ/l0sXUdcluJ3GHvEhGQjFf1DnlgMtTV8h3i+GQx8twGq897M4eIxbGNQYRuK4Zf5t1ekcZkFhCvE7SnCDmZifDEQsRYxjjejNb8YlS2Stw+LQSS/oo5DuFbDP54MzJ/loVhF9+FFUtRexPrxc9R84cKnOpNjO6OFQN52QBIFtTVlXKLOm9wmhfKujswPjsVCRaBwirOoGlpGaob2+TtnuJ9f0CgMV1jIhDesFQPlN9ch6GzRkMd5oWbb1Pu7uqK9edhBnbyPIJbjqLuhc9Q1yxxK9vFtouBvGSeQ2It7NUUTwhkqAGQB7OgruqDlHU1CRjrtoo0pqEv6B3yYDbUVQfl15BYd/JqiifSmNJsIKZwFAN53sAhOVBX+W2HyCT1oEBjGvIvG4hM4UWxhUBSDYAszYG60naIVE4ijSn1n3qHLL0W6kqfnbJkEhFpTCkGQB66FuoKG4hMHhBpTCn/0DvkoVyoK76wHSKTiEhjSraByNRdGFsM5O+2Q8wgIgQy2ADIw7lQX7NTllROIo1p8LN6hzw8Beprn9s1RCYRkcaU9IydsmQKL4otTFmJBkDslCUfkTBlJf7V4PeQXKSsO4gGTdoD7uR32MpncCrA4iykrPYZvL47wQDIvROQVFGDQE2L/YJ7GWAzEuCclgHvpsMGL7hP+IveIblp8FyTANfOYzgvo0EDPWbBaCTyTUhffINgVy3I+zTbD7r0Ua38IfiFE5FU3YDgfw0OGuiC9qb/eUPhGZsMz+bDaIronz8fpPinWTEBo7qeJMEFx8yxSGxsQ9hXizb+ZByDAL1p24A5lj/uNjUeSm4a4gbHQSmrRnNLSP/KDMZwjNx/Zk8ohAVG6jgcQM6QKFF3shtOl9L3K0L6A7VQGKyxHVp1I9r9dQhGBI9nDjNsIM9yNpGcWEMQPx2nP4hi9T4wBsbCuD+6Bsr9J/Z7B3Cv1Rvdn9sXAUraf0fLOxalLWNuTxyeZ8AP+nOnrdo3InwabMWvsIzav1sluIzFOd34LQFz6cK7nqzagf7SrmiaIpRoQTyDZRR9Z4l+2eZyNtlJKCSGqaDo9uL4/iKARfrRCoYTjPCJxlCKJ6mqc7v+D0y+ApJSh1yFAAAAAElFTkSuQmCC"/></div>
          <div class="num-content">
            <p class="order-num">今日订单数</p>
            <p><span class="order-count">12,125</span><span class="unit">笔</span></p>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple content">
          <div class="img-content"><img src="data:image/png;base64,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"/></div>
          <div class="num-content">
            <p class="order-num">今日订单数</p>
            <p><span class="order-count">12,125</span><span class="unit">笔</span></p>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <div id="myChart"></div>
    </el-row>
  </div>
</template>

<style>
#index {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* color: #2c3e50; */
}

.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #fff;
  }
  /* .bg-purple-light {
    background: #e5e9f2;
  } */
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .content {
    overflow: hidden;
    display: flex;
    /* background-color: #fff; */
    justify-content: center;
    align-items: center;
    padding: 10%;
  }
  .img-content {
    display: block;
    width: 30%;
    float: left;
  }
  .el-main {
    line-height: unset;
    text-align: start
  }
  .num-content {
    width: 70%;
    margin-left: 10%;
  }
  .order-num {
    font-size: 16px;
  }
  .order-count {
    color: #449cff;
    font-size: 2.4em
  }
  .unit {
    margin-left: 8px;
  }
  #myChart {
    width: 100%;
    height: 500px;
    background-color: #fff;
  }
</style>
