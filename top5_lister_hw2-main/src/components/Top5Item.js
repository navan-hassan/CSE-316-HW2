import React from "react";

export default class Top5Item extends React.Component {
   
    render() {
        const {itemName, index} = this.props;
        return (
            <div
                id = {index}
                className = {'top5-item'}>
                {itemName}
            </div>
        );
    }
} 

