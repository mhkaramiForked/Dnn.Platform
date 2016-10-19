import React, {Component, PropTypes } from "react";
import { connect } from "react-redux";
import Tabs from "dnn-tabs";
import {
    theme as ThemeActions
} from "actions";
import Localization from "localization";
import GridCell from "dnn-grid-cell";
import Button from "dnn-button";
import utils from "utils";

import "./style.less";

class RestoreTheme extends Component {
    constructor() {
        super();
        this.state = {};
    }

    restoreTheme(){
        const {props, state} = this;

        utils.utilities.confirm(Localization.get("RestoreThemeConfirm"), Localization.get("Confirm"), Localization.get("Cancel"), function(){
            props.dispatch(ThemeActions.restoreTheme());
        });
    }

    render() {
        const {props, state} = this;
        return (
            <GridCell className="restore-theme" columnSize="50">
                <Button onClick={this.restoreTheme.bind(this)}>{Localization.get("RestoreTheme")}</Button>
            </GridCell>
        );
    }
}

RestoreTheme.propTypes = {
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
    };
}

export default connect(mapStateToProps)(RestoreTheme);