import * as echarts from 'echarts'
import { useEffect, useRef } from 'react'

const BaseChart = () => {
  const canvasEle = useRef<HTMLCanvasElement>(null)
  useEffect(
    () => {
      if (canvasEle.current) {
        const myChart = echarts.init(canvasEle.current)
        const option = {
          backgroundColor: '#2c343c',
          title: {
            text: '文档汇总',
            left: 'center',
            top: 20,
            textStyle: {
              color: '#ccc'
            }
          },
          tooltip: {
            trigger: 'item'
          },
          visualMap: {
            show: false,
            min: 1,
            max: 10,
            inRange: {
              colorLightness: [0, 1]
            }
          },
          series: [
            {
              name: 'Access From',
              type: 'pie',
              radius: '55%',
              center: ['50%', '50%'],
              data: [
                { value: 1, name: '新人文档-1' },
                { value: 5, name: '最佳实践-5' },
                { value: 6, name: '业务文档-6' },
                { value: 4, name: '基建文档-4' },
                { value: 1, name: '组件文档-1' }
              ].sort(function (a, b) {
                return a.value - b.value
              }),
              roseType: 'radius',
              label: {
                color: 'rgba(255, 255, 255, 1)'
              },
              labelLine: {
                lineStyle: {
                  color: 'rgba(255, 255, 255, 1)'
                },
                smooth: 0.2,
                length: 10,
                length2: 20
              },
              itemStyle: {
                color: '#c23531',
                shadowBlur: 200,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              },
              animationType: 'scale',
              animationEasing: 'elasticOut',
              animationDelay: function () {
                return Math.random() * 200
              }
            }
          ]
        }
        // 绘制图表
        myChart.setOption(option)

        window.addEventListener('resize', () => {
          myChart.resize()
        })
      }
    }, []
  )
  return (
    <div
      className='w-full h-full'
    >
      <canvas
        className='w-full h-full'
        height={document.body.clientHeight}
        ref={canvasEle}
        width={document.body.clientWidth}
      />
    </div>
  )
}

export default BaseChart
