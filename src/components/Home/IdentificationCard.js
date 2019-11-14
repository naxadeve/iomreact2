import React, { Component } from 'react'

 class IdentificationCard extends Component {
    render() {
        return (
            <div className="post-meta">
            <figure>
                <img src={this.props.image} alt="post" />
            </figure>
        <h5>{this.props.title}</h5>
       </div>
        )
    }
}
export default IdentificationCard;