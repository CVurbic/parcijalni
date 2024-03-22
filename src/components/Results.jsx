import React from 'react';
import "../styles/results.css"


class Results extends React.Component {


    render() {
        console.log(this.props);
        return (
            <div className='result'>
                <div className='header'>
                    {/*      <img src={this.props.userData.avatar_url} alt="User Avatar" />
                    <h1>{this.props.userData.name}</h1>
                */} </div>
                <div className='content'>
                    {/*  <p><strong>BIO:</strong> {this.props.userData.bio}</p>
                    <p><strong>LOCATION: </strong>{this.props.userData.location}</p>
                    <strong>REPOSITORIES:</strong>
                    {this.props.userRepos.map((repo)=>(
                        <div key={repo.id}>{repo.name}</div>
                    ))

                    } */}
                    <div className='repos facts'>
                        {this.props.catFacts.map((repo, index) => (
                            <div key={index}>{repo.fact}</div>
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
