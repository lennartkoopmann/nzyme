import React from 'react';
import Reflux from 'reflux';
import BanditForm from "./BanditForm";
import BanditsStore from "../../../stores/BanditsStore";
import BanditsActions from "../../../actions/BanditsActions";
import Routes from "../../../util/Routes";
import LoadingSpinner from "../../misc/LoadingSpinner";
import {notify} from "react-notify-toast";

class EditBanditPage extends Reflux.Component {

    constructor(props) {
        super();

        this.banditId =  decodeURIComponent(props.match.params.id);
        this.store = BanditsStore;
    }

    componentDidMount() {
        BanditsActions.findOne(this.banditId);
    }

    _editBandit(e) {
        e.preventDefault();

        const self = this;
        this.setState({submitting: true});

        BanditsActions.updateBandit(
            self.state.banditId, self.nameInput.current.value, self.descriptionInput.current.value,
            function () {
                self.setState({submitting: false, submitted: true});
                notify.show("Bandit updated.", "success");
            },
            function () {
                self.setState({submitting: false});
                notify.show("Could not update bandit. Please check nzyme log file.", "error");
            }
        );
    }

    render() {
        if (!this.state.bandit) {
            return <LoadingSpinner />
        }

        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <h1>Edit Bandit <em>{this.state.bandit.name}</em></h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <BanditForm formHandler={this._editBandit}
                                    backLink={Routes.BANDITS.SHOW(this.banditId)}
                                    bandit={this.state.bandit}
                                    submitName="Edit Bandit" />
                    </div>
                </div>
            </div>
        )
    }

}

export default EditBanditPage;