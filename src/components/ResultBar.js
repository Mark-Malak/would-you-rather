import React from 'react';
class ResultBar extends React.Component {
    render() {
        const container = {
            width: '100%',  /* Full width */
            'background-color': '#ddd' ,
            'box-sizing' : 'border-box'/* Grey background */
        }

        const skills = {
            'text-align': 'right', /* Right-align text */
            'padding-top': '10px',/* Add top padding */
            'padding-bottom': '10px', /* Add bottom padding */
            color: 'white' ,
            'box-sizing' : 'border-box'/* White text color */
        }

        const html = {
            width: '90%',
            'background-color': '#04AA6D' ,
            'box-sizing' : 'border-box'
        }

        return (
            <div>
                <div style = {container}>
                    <div style = {skills  , html} >90%</div>
                </div>

            </div>
        );
    }
}
export default ResultBar