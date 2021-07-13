import React from 'react'
import { useRecoilValue } from 'recoil'
import { CountState } from '../recoil'

const Right = () => {
    const getCount:number = useRecoilValue(CountState)

    return (
        <div>
            오른쪽이요~
            <span>{getCount}</span>
        </div>
    )
}

export default Right
