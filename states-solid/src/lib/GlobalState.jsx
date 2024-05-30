import {createSignal, createRoot} from 'solid-js'

function colors() {
const [bgColor, setBgColor] = createSignal(0x03a4ecff) //light

const changeColor = () => {
    if(bgColor() == 0x03a4ecff) {
        setBgColor(0x071423ff) //dark
     
    }
    else
    {
    setBgColor(0x03a4ecff) //dark
    }
}
return {bgColor,changeColor}
}

export default createRoot(colors);
 