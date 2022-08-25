import {useStore} from '@nanostores/react'
import { useRef } from 'react'
import { itemsStore } from '../stores/itemsStore'

export default function ThingsForm({}) {

    const $itemsStore = useStore(itemsStore)
    const thingRef = useRef("")

    function saveItem(evt) {
        evt.preventDefault()
        itemsStore.set([...$itemsStore, thingRef.current.value])
    }

    return (
        <>
            <label>Enter your thing: </label>
            <input type="text" ref={thingRef}></input>
            <button onClick={saveItem}>Send</button>
        </>
    )
}