import {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';

const useFetch = (col,id = 0, col2 = "") => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetch = () => {
    if (col2 == "") {
      firestore()
      .collection(col)
      .onSnapshot(responseData => {
        setData(responseData.docs);
        setLoading(false);
      },(err) => {
        setError(err.message);
        setLoading(false);
      });
    } else {
      firestore()
      .collection(col)
      .doc(id)
      .collection(col2)
      .onSnapshot(responseData => {
        setData(responseData.docs);
        setLoading(false);
      },(err) => {
        setError(err.message);
        setLoading(false);
      });
    }
    
  };

  useEffect(() => {
    fetch();
  }, []);

  return {data, error, loading};
};

export default useFetch;
