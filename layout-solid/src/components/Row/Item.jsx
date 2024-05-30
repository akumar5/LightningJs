import {View, Text} from '@lightningjs/solid'

const item = {
    width:300,
    height:480,
    y:10,
    x:500,
    scale:1,
    focus: {
        scale: 1.1
    },
    blur: {
        scale: 1
    }
}

export default function Item(props) {
    return <View style={item} color={props.color}
        onEnter={() => console.log('Hello')}
        onFocus={() => props.setTitle(props.data.title)}>
        <Text>{props.rowIndex}</Text>

    </View>
}