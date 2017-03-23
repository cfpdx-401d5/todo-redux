import React from 'react';
import { connect } from 'react-redux';

class ListActions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items,
            view: 'all'
        };
    }

    render() {
        return (
            <div>
                Show:
                <button>All</button>
                <button>Completed</button>
                <button>Active</button>

                <div>
                    <button>Clear Completed</button>
                    <button>Complete All</button>
                </div>
            </div>
        );
    } 
}

function mapStateToProps(state) {
    return {
        items: state.items
    };
}

export default connect(mapStateToProps)(ListActions);

ListActions.propTypes = {
    items: React.PropTypes.array
};
