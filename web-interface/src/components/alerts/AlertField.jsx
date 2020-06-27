import React from 'react';
import Routes from "../../util/Routes";

class AlertField extends React.Component {

    render() {
        const key = this.props.fieldKey;
        const value = this.props.value;
        const fields = this.props.fields;

        console.log(this.props);

        let additional;
        if ((key === "bandit_name" && fields.hasOwnProperty("bandit_uuid"))|| key === "bandit_uuid") {
            additional = <a href={Routes.BANDITS.SHOW(fields.bandit_uuid)}><i className="fas fa-link" /></a>
        }

        return (
            <React.Fragment>
                <dt>{key}</dt>
                <dd>{value} {additional}</dd>
            </React.Fragment>
        )
    }

}

export default AlertField;