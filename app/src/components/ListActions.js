import React from 'react';

export default function ListActions(props) {
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
