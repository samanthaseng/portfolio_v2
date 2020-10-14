import React from 'react';
import { connect } from 'react-redux';
import {
    ButtonContainer
} from './HamburgerButton.style';

function HamburgerButton(props) {
    const { openDrawer, changeState } = props;

    let buttonClass = openDrawer === false ? 'close' : null;

    return (
        <ButtonContainer 
            className={buttonClass}
            onClick={changeState}
        >
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </ButtonContainer>
    )
}

function mapStateToProps(state) {
    return { openDrawer: state.openDrawer }
  }

function mapDispatchToProps(dispatch) {
    return {
        changeState: function() { 
            dispatch({ type: 'changeState' }) 
        }
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(HamburgerButton);