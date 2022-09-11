import {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';

const useFetch = (id, id2) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetch = () => {
    if (!id2) {
      firestore()
      .collection("date")
      .doc(id)
      .collection("repasts")
      .onSnapshot(responseData => {
        setData(responseData.docs);
        setLoading(false);
      },(err) => {
        setError(err.message);
        setLoading(false);
      });
    } else {
      firestore()
      .collection("date")
      .doc(id)
      .collection("repasts")
      .doc(id2)
      .collection("program")
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
  }, [id]);

  return {data, error, loading};
};

export default useFetch;
