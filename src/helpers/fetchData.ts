import { collection, query, getDocs, orderBy } from "firebase/firestore";
import { db } from "../configs/firebase";

export interface FetchDataProps {
  collectionName: string;
  sort?: { field?: string; order: "asc" | "desc" };
}

export const fetchData = async ({ collectionName, sort }: FetchDataProps) => {
  let q = query(collection(db, collectionName));

  if (sort)
    q = query(
      collection(db, collectionName),
      orderBy(sort.field || "id", sort.order)
    );

  const querySnapshot = await getDocs(q);

  const data = querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });
  return data;
};
