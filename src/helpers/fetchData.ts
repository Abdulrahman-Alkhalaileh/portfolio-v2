import { collection, query, getDocs, orderBy } from "firebase/firestore";
import { db } from "../configs/firebase";

export interface SortingType {
  field?: string;
  order: "asc" | "desc"
}

export interface FetchDataProps {
  collectionName: string;
  sort?: Partial<SortingType>;
}

export const fetchData = async ({ collectionName, sort }: FetchDataProps) => {
  let q = query(collection(db, collectionName));

  if (sort?.order)
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
