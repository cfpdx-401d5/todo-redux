import React from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions/items';

class ListActions extends React.Component {

    render() {
        return (
            <div>
                Show:
                <button onClick={() => this.props.visibility('SHOW_ALL')}>All</button>
                <button onClick={() => this.props.visibility('SHOW_COMPLETED')}>Completed</button>
                <button onClick={() => this.props.visibility('SHOW_ACTIVE')}>Active</button>

                <div>
                    <button>Clear Completed</button>
                    <button>Complete All</button>
                </div>
            </div>
        );
    } 
}

function mapDispatchToProps(dispatch) {
    return {
        visibility: (filter) => dispatch(setVisibilityFilter(filter))
    };
}

export default connect(null, mapDispatchToProps)(ListActions);

ListActions.propTypes = {
    visibility: React.PropTypes.func
};
