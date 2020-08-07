import React from 'react';

export default class TimeLine extends React.Component {

    constructor(props) {
        super(props)

    }

    render() {
        return (<>
            <div className="container">
                <ul className="timeline">
                    {this.props.dataLine ? (
                        this.props.dataLine.map(dd => {
                            if (dd.id === this.props.currentLine)
                                return <li key={dd.id} className="active">{dd.name}</li>
                            else
                                return <li key={dd.id}>{dd.name}</li>;
                        })
                    )
                        : null
                    }

                </ul>
            </div>
        </>);
    }
}
