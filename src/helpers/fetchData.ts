import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../configs/firebase";

export const fetchData = async (collectionName: string) => {
  const q = query(collection(db, collectionName));
  const querySnapshot = await getDocs(q);

  const data = querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });
  return data;
};
