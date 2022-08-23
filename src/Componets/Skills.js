import React from 'react'
export default class Skill extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return (<h1>
            <div> 
              <tr>
                <td>Skill 1:</td>
                <td>{this.props.skill}</td>
              </tr>
              <tr>
                <td>Skill 2:</td>
                <td>{this.props.skill1}</td>
              </tr>
              <tr>
                <td>Skill 3:</td>
                <td>{this.props.skill2}</td>
              </tr>
              <tr>
                <td>Skill 4:</td>
                <td>{this.props.skill3}</td>
              </tr>
              <tr>
                <td>Skill 5:</td>
                <td>{this.props.skill4}</td>
              </tr>
              <tr>
                <td>Skill 6:</td>
                <td>{this.props.skill5}</td>
              </tr>
            </div></h1>
                  )
    }
}