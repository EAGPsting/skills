import React from 'react'
export default class Carrera extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return <h1>Carrera: {this.props.carrera}</h1>
    }
}