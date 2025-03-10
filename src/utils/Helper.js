import { create } from "zustand";

const helperUtils = create((set)=>({
  //Track learning of SignLanguage
  signLearning:-1,
  setSignLearning:(signLearning) => set({signLearning}),

}))

export default helperUtils;

