import React from 'react'
class LeaderBoardItem extends React.Component {
    render() {
        const { user } = this.props;
        const ansCount = Object.keys(user.answers).length
        const questCount = Object.keys(user.questions).length
        const score = ansCount + questCount;
        return (
            <div>
                <div style={{ width: '100%' }} className="question">

                    <div className="questionBody">
                        <div className="avatar">
                            <img alt = "avatar" src={user.avatarURL} className ="myAvatar"></img>
                        </div>

                        <div className="shadow" style={{ width: '55%' }}>
                            <div >
                                <h2 className="header" style={{ 'paddingLeft': '15px' }} align="left" > {user.name} </h2>
                            </div>
                            <p>{"Answered questions :     " + ansCount}</p>
                            <hr />
                            <p>{"Created questions :     " + questCount}</p>

                        </div>

                        <div className="shadow">
                            <div >
                                <h4 className="header"> Score</h4>
                            </div>

                            <h1>{score}</h1>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default LeaderBoardItem
