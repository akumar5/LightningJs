import{View} from '@lightningjs/solid'
// import styles from '../../../../animation-solid/src/styles'
const styles = {
    container: {
        width: 100,
        height: 50,
        borderRadius: 20,
        color: 0x440379ff,
        x: 1800,
        y: 10,
    },
    circle: {
        width: 42, //default state
        height: 42,
        color: 0xffffffdd,
        y:4,
        x: 50,
        transition: {
            x:  {duration: 200, easing: 'ease-out'}
            },
            dark: {          // dark state
                x: 4,
                transition: {
                    x: {duration: 200, easing: 'ease-in'}
                }
            }
        }
}

const test ={
    width: 50,
    height: 50,
    color: 0x00ff00ff,
    dark: {
        color: 0xff0000ff
    }
}
const roundedRectangle = ["RoundedRectangle", {radius: 21}]

export default function Toggle(props){
    return <View {...props} forwardStates style={styles.container}>
<View style={styles.circle} shader={roundedRectangle} />
</View>
}