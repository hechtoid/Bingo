import { connect } from 'react-redux';
import { fetchUserWordLists } from '../../actions/word_list_actions';
import WordLists from './word_lists';


const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    lists: Object.values(state.lists.user),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserWordLists: id => dispatch(fetchUserWordLists(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WordLists);
