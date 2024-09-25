import Taro, { } from '@tarojs/react';
import { View } from '@tarojs/components';
import { useLoad } from '@tarojs/taro';
import './home.less';

export default function Home () {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='home'>
      <View> 
      首页111111
      </View>
    </View>
  )
}
