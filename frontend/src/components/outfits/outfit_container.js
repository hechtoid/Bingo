import { connect } from 'react-redux';
import { openItemModal } from '../../actions/ui_actions';

import Outfit from './outfit';

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.user,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        openItemModal: (item, type) => dispatch(openItemModal(item, type))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Outfit);
