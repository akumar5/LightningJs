import { Text, View } from '@lightningjs/solid';
import styles from '../styles';
import { onMount, createSignal } from 'solid-js';

const container = {
  width: 1920,
  height: 50,
  y: 540,
  display: 'flex',
  gap: 20,
  justifyContent: 'center'
}

const dotStyle = {
width:50,
height:50,
borderRadius:25,
color: 0xffffffff
}

const HelloWorld = () => {
  let dot1, dot2, dot3
  //getter setter : reactive way of blitz
  const [dotAnims, setDotAnims] = createSignal([])

const anim = {
  easing: 'linear',
  loop: true,
  repeat: 5,
  stopMethod: 'reset',
  duration: 500
}

  onMount(() => {
 console.log('######')
 console.log(dot1);
 console.log('######')
//  dot1.animate({y: -80}, {...anim, delay: 0}).start()
 const anim1 = dot1.animate({y: -80}, {...anim, delay: 0}).start()
//  dot2.animate({y: -80}, {...anim, delay: 200}).start()
const anim2 = dot2.animate({y: -80}, {...anim, delay: 200}).start()
//  dot3.animate({y: -80}, {...anim, delay: 400}).start()
const anim3 = dot3.animate({y: -80}, {...anim, delay: 400}).start()

setDotAnims([anim1,anim2,anim3])
})

const runAnimation = () => {
  for (const dot of dotAnims()) {
    dot.start()
  }
}

const stopAnimation = () => {
  for (const dot of dotAnims()) {
    dot.stop()
  }
}
  return (
  // style not styles
  <View autofocus style={container}
  onUp={runAnimation}
  onDown={stopAnimation}
  >
   <View ref={dot1} style={dotStyle} />
   <View ref={dot2} style={dotStyle} />
   <View ref={dot3} style={dotStyle} />
  </View>
  )
};

export default HelloWorld;
