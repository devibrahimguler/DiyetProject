import {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const useFetch = (id, id2, col) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetch = () => {
    if (col == "food"){
      firestore()
      .collection('user')
      .doc(auth().currentUser.uid)
      .collection('food')
      .orderBy('total', 'desc')
      .onSnapshot(
        responseData => {
          setData(responseData.docs);
          setLoading(false);
        },
        err => {
          setError(err.message);
          setLoading(false);
        },
      );
    }
    else if (col == "user") {
      firestore()
        .collection('user')
        .doc(auth().currentUser.uid)
        .get()
        .then(responseData => {
          setData(responseData);
          setLoading(false);
        })
        .catch(err => {
          setError(err.message);
          setLoading(false);
        });
    } else if (col == "repasts") {
      firestore()
        .collection('user')
        .doc(auth().currentUser.uid)
        .collection('date')
        .doc(id)
        .collection('repasts')
        .onSnapshot(
          responseData => {
            setData(responseData.docs);
            setLoading(false);
          },
          err => {
            setError(err.message);
            setLoading(false);
          },
        );
    } else {
      firestore()
        .collection('user')
        .doc(auth().currentUser.uid)
        .collection('date')
        .doc(id)
        .collection('repasts')
        .doc(id2)
        .collection('program')
        .onSnapshot(
          responseData => {
            setData(responseData.docs);
            setLoading(false);
          },
          err => {
            setError(err.message);
            setLoading(false);
          },
        );
    }
  };

  useEffect(() => {
    fetch();
  }, [id]);

  return {data, error, loading};
};

export default useFetch;
