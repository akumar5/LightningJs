import { Row } from '@lightningjs/solid-ui'
import { createSignal , For } from 'solid-js'

import { default as Item } from './Item'

// dean@sparksmena.com

export default function ItemRow(props) {
    const  [alpha,setAlpha] = createSignal(1)
  
    const up = () => {
        if (props.key() != 0) {
            setAlpha(0)
        }
    }

    const down = () => {
        if (props.key() != props.numRows-1) {
            setAlpha(0)
        }
    }

return <Row height={500} alpha={alpha()}
    onFocus={() => setAlpha(1)}
    onUp={up} 
    onDown={down}>
       <For each={props.row.data}>{(data, i) => 
     <Item color={data.color} key={i} rowIndex={props.rowIndex} 
     setTitle={props.setTitle} setBackdrop={props.setBackdrop} data={data}/>     
    }
    </For>
</Row>
}