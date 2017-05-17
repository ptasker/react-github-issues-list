import React from 'react';

class IssueInfo extends React.Component {
    render() {
        const details = this.props.details;

        return (
            <div className="issue-info">
                <h3><a href={details.html_url} target="_blank">{details.title}</a></h3>
                <p><small>reported by - <a href={details.user.html_url} target="_blank">{details.user.login}</a></small></p>
                <div>
                    {details.body.split('\n').map((item, key) => {
                        return <span key={key}>{item}<br /></span>;
                    })}
                </div>
            </div>
        );
    }
}

export default IssueInfo;