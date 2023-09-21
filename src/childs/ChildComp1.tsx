import React from 'react'
import ChildComp2 from './ChildComp2';

type Props = {
    testprop1: string;
    testprop11: string;
}

const ChildComp1 = (props: Props) => {
    return (
        <div>
            <div>{props.testprop1}</div>
            <ChildComp2 testprop2={props.testprop1} />
        </div>
    )
}

export default ChildComp1