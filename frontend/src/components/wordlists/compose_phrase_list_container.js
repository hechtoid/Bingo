import { connect } from 'react-redux';
import { saveWordList, editWordList } from '../../actions/word_list_actions';
import ComposePhraseList from './compose_phrase_list';


const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveWordList: data => dispatch(saveWordList(data)),
    editWordList: data => dispatch(editWordList(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ComposePhraseList);
