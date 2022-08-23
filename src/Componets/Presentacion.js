import React from 'react'
import image from "./img/avatar.jpg";

export default class Presentacion extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return (
            <><div>
                <img src={image} width="400" height="400"/>
            </div><h1>Nombre completo: {this.props.name}</h1></>
        );
    }
}
