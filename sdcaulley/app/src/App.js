import React from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from './actions/items';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import ListActions from './components/ListActions';

class App extends React.Component {
    componentDidMount() {
        this.props.fetchData({ method: 'GET', path: '/' });
    }

    render() {
        if (this.props.hasErrored) {
            return <p>Sorry.  There was an error loading your list.</p>;
        }
        if (this.props.isLoading) {
            return <p> Loading... </p>;
        }
        return (
        <div>
            <NewTodo />
            <TodoList />
            <ListActions />
        </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchData: (options) => dispatch(itemsFetchData(options))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
    fetchData: React.PropTypes.func,
    deleteData: React.PropTypes.func,
    items: React.PropTypes.array,
    hasErrored: React.PropTypes.bool,
    isLoading: React.PropTypes.bool,
    editData: React.PropTypes.func,
    visibility: React.PropTypes.func
};
