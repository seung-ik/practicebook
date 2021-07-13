import React from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { CountState } from '../recoil'

const Left = () => {

    const getCount:number = useRecoilValue(CountState)
    const setCount = useSetRecoilState(CountState)

    return (
        <div>
            왼쪽이요~
            <span>{getCount}</span>
        </div>
    )
}

export default Left
