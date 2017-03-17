import React from 'react';
import { connect } from 'react-redux';
import { itemsFetchData, itemsPostData, itemsDeleteData, itemsEditData } from './actions/items';
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
            <NewTodo addTodo={this.props.postData} />
            <TodoList items={this.props.items} onDelete={this.props.deleteData} editData={this.props.editData} />
            <ListActions />
        </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchData: (options) => dispatch(itemsFetchData(options)),
        postData: (options) => dispatch(itemsPostData(options)),
        deleteData: (options) => dispatch(itemsDeleteData(options)),
        editData: (options) => dispatch(itemsEditData(options))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
    fetchData: React.PropTypes.func,
    postData: React.PropTypes.func,
    deleteData: React.PropTypes.func,
    items: React.PropTypes.array,
    hasErrored: React.PropTypes.bool,
    isLoading: React.PropTypes.bool,
    editData: React.PropTypes.func
};
