import Actions from '../../redux/actionTypes';
import firebase from '../../../firebase';

// eslint-disable-next-line import/prefer-default-export
export const getNews =  () => async (dispatch) => {
  const db = firebase.firestore();
  await db.collection('news').orderBy('date', 'desc').get().then((querySnapshot) => {
    const news = [];
    querySnapshot.forEach((doc) => {
      const dataNew = doc.data();
      const newResumeData = {
        titleNews: dataNew.title,
        newsResume: dataNew.resume,
        url: dataNew.imageURL,
        date: dataNew,
        link: dataNew.link,
        linkTitle: dataNew.linkTitle,
      };
      news.push(newResumeData);
    });
    dispatch({
      type: Actions.GET_NEWS,
      payload: news,
    });
  });
};