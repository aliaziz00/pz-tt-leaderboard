import React from 'react';
import Person from '../../components/person/person';
import "./Table.css";
import Header from '../../components/header/header';

class Table extends React.Component {
    state = {
        loading: false,
        people: []
    }

    componentDidMount() {
        const requestUrl = 'https://api.sheety.co/36ce2504-c477-494c-9578-4d00e63ef165';
        this.setState({loading: true});
        fetch(requestUrl)
            .then(response => {
                return response.json();
            })
            .then(response => {
                this.setState({people: response, loading: false});
        })


    }

    render() {
        const renderPeople = this.state.people ? this.state.people.map((person, index) => {
                return <Person key={index} person={person}/>
        }) : <p>Please add some people!</p>
        return (
            <div>
                <Header />
                <table className='Table'>
                    <thead className='TableHeader'>
                    <tr>
                        <th className='HeaderName'>Player Name</th>
                        <th>Games Played</th>
                        <th>Points</th>
                        <th>Score Difference</th>
                    </tr>
                    </thead>
                    <tbody>
                        {renderPeople}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;