import React from 'react';
import "../styles/results.css"


class Results extends React.Component {


    render() {
        return (
            <div className='result'>
                <div className='header'>
                    <img src={this.props.userData.avatar_url} alt="User Avatar" />
                    <h1>{this.props.userData.name}</h1>
                </div>
                <div className='content'>
                    <p>
                        <strong>BIO:</strong> {this.props.userData.bio} <br />
                        <strong>LOCATION: </strong>{this.props.userData.location} <br />
                        <strong>REPOSITORIES:</strong>
                    </p>
                    <div className="repos">

                        {this.props.userRepos.map((repo) => (
                            <div key={repo.id}>{repo.name}</div>
                        ))

                        }
                    </div>
                </div>
                <button onClick={this.props.handleResetState}>RESET</button>
            </div>
        );
    }
}

export default Results;
