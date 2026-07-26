import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";
import { getDocs } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import {
    updateDoc,
} from "firebase/firestore";

export const registerStudent = async (formData) => {
  const docRef = await addDoc(collection(db, "students"), {
    ...formData,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
    status: "Active"
  });

  return docRef.id;
};

export const updateStudent = async (id, formData) => {

    const ref = doc(db, "students", id);

    await updateDoc(ref, {
        ...formData,
        updatedAt: serverTimestamp()
    });

};

export const getStudents = async () => {
  const snapshot = await getDocs(collection(db, "students"));

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const getStudent = async (id) => {

    const docRef = doc(db, "students", id);

    const snapshot = await getDoc(docRef);

    if (!snapshot.exists()) {
        throw new Error("Student not found");
    }

    return {
        id: snapshot.id,
        ...snapshot.data()
    };

};

