import React from 'react'

type Fruit2 = {
    value: string;
    index: number;
}

const TableCell = (props: Fruit2) => {
    return (
        <div style={{ textDecoration: props.index === 3 ? "underline" : "" }}>{props.value}</div>
    )
}

export default TableCell