import React from 'react';
import { connect } from 'react-redux';
import { fetchTweets } from './actions';

const FetchTweets = ({ fetchTweets }) => {
  return <button onClick={fetchTweets}>Fetch Tweets</button>;
};

// const mapDispatchToProps = (dispatch) => ({
//   fetchTweets: () => dispatch(fetchTweets()),
// });
const mapDispatchToProps = {
  fetchTweets,
};

console.log({ mapDispatchToProps });
export default connect(null, mapDispatchToProps)(FetchTweets);
