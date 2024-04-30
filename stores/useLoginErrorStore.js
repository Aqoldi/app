import { create } from "zustand";

const useLoginErrorStore = create((set) => ({
  errors: {},
  setErrors: (errors) => set({ errors }),
}));

export default useLoginErrorStore;
