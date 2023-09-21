import React from 'react'

type Props = {
    testprop2: string
}

const ChildComp2 = (props: Props) => {
    return (
        <div>{props.testprop2}</div>
    )
}

export default ChildComp2