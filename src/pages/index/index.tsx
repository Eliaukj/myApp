import Taro, { usePullDownRefresh, useReachBottom, useDidShow , useLoad } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.less';

export default function Index () {
  // useLoad(() => {
  //   console.log('Page loaded.')
  // })

  const toHome = ()=>{
    console.log('11111111')
    Taro.navigateTo({
      url: '/pages/home/home'
    });
  }

  const toOrder = ()=>{
    console.log('22222')
    Taro.navigateTo({
      url: 'pages/order/order',
    })
  }

  const aaa = ()=>{
    console.log('aaa---')
  }

  return (
    <View className='index'>
      <View className='bottomBar' onClick={aaa}> 
        <View onClick={toHome}>首页</View>
        <View onClick={toOrder}>点餐</View>
        <View>随机</View>
        <View>我的</View>
      </View>
    </View>
  )
}
