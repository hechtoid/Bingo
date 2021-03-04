import { connect } from 'react-redux';
import { saveWordList } from '../../actions/word_list_actions';
import ComposePhraseList from './compose_phrase_list';


const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveWordList: data => dispatch(saveWordList(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ComposePhraseList);
