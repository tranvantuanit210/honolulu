"use client";
import { Dispatch, SetStateAction, createContext, useState } from "react";

interface FormContextInterface {
  lastFormStep: number;
  setLastFormStep: Dispatch<SetStateAction<number>>;
}

const initFormContext: FormContextInterface = {
  lastFormStep: 0,
  setLastFormStep: () => null,
};

export const FormContext = createContext<FormContextInterface>(initFormContext);

export default function FormProvider({ children }: { children: React.ReactNode }) {
  const [lastFormStep, setLastFormStep] = useState<number>(initFormContext.lastFormStep);
  return <FormContext.Provider value={{ lastFormStep, setLastFormStep }}>{children}</FormContext.Provider>;
}
