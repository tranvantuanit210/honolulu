"use client";

import React, { useRef, useState } from "react";
import { DataForm, DataFormST1, DataFormST2, DataFormST3, DataFormST4, DataFormST5 } from "@/types/form.type";
import FormInfo, { DataFormInfo } from "@/components/form/FormInfo";
import FormSignature, { DataFormSignature } from "@/components/form/FormSignnature";
import FormSubmit, { DataFormSubmit } from "@/components/form/FormSubmit";
import { initFormValue } from "@/data/form.data";
import dayjs from "dayjs";
import { omit } from "lodash";
import Thank from "@/components/form/Thank";
import { REGISTRATION_TOURNAMENT } from "@/graphql/registration/registration.graphql";
import { useMutation } from "@apollo/client";
import FormStudent from "@/components/form/FormStudent";

export interface RegisterProps {}

export default function Register(props: RegisterProps) {
  const formRef = useRef(null);
  const [step, setStep] = useState<number | null>(0);
  const [values, setValues] = useState<DataForm>(initFormValue);
  const [lastNumberForm, setLastNumberForm] = useState<number>(7);
  const [registerTournament, { data: mutationData, loading, error }] = useMutation(REGISTRATION_TOURNAMENT);

  const dataFormInfo: DataFormInfo = {
    parentFirstName: values.parentFirstName,
    parentLastName: values.parentLastName,
    parentEmail: values.parentEmail,
    parentPhoneNumber: values.parentPhoneNumber,
    address: values.address,
    city: values.city,
    zipCode: values.zipCode,
  };
  const dataFormST1: DataFormST1 = {
    student1FirstName: values.student1FirstName,
    student1Age: values.student1Age,
    student1BirthDate: values.student1BirthDate,
    student1Email: values.student1Email,
    student1PhoneNumber: values.student1PhoneNumber,
    student1ParticipateType: values.student1ParticipateType,
    anotherStudent1: values.anotherStudent1,
  };
  const dataFormST2: DataFormST2 = {
    student2FirstName: values.student2FirstName,
    student2Age: values.student2Age,
    student2BirthDate: values.student2BirthDate,
    student2Email: values.student2Email,
    student2PhoneNumber: values.student2PhoneNumber,
    student2ParticipateType: values.student2ParticipateType,
    anotherStudent2: values.anotherStudent2,
  };
  const dataFormST3: DataFormST3 = {
    student3FirstName: values.student3FirstName,
    student3Age: values.student3Age,
    student3BirthDate: values.student3BirthDate,
    student3Email: values.student3Email,
    student3PhoneNumber: values.student3PhoneNumber,
    student3ParticipateType: values.student3ParticipateType,
    anotherStudent3: values.anotherStudent3,
  };
  const dataFormST4: DataFormST4 = {
    student4FirstName: values.student4FirstName,
    student4Age: values.student4Age,
    student4BirthDate: values.student4BirthDate,
    student4Email: values.student4Email,
    student4PhoneNumber: values.student4PhoneNumber,
    student4ParticipateType: values.student4ParticipateType,
    anotherStudent4: values.anotherStudent4,
  };
  const dataFormST5: DataFormST5 = {
    student5FirstName: values.student5FirstName,
    student5Age: values.student5Age,
    student5BirthDate: values.student5BirthDate,
    student5Email: values.student5Email,
    student5PhoneNumber: values.student5PhoneNumber,
    student5ParticipateType: values.student5ParticipateType,
  };
  const dataFormSignature: DataFormSignature = {
    homeChurch: values.homeChurch,
    agree: values.agree,
    student1Signature: values.student1Signature,
    student2Signature: values.student2Signature,
    student3Signature: values.student3Signature,
    student4Signature: values.student4Signature,
    student5Signature: values.student5Signature,
    parentSignature: values.parentSignature,
    signDate: values.signDate,
  };
  const dataSubmit: DataFormSubmit = {
    payPlan: values.payPlan,
  };

  const onNext = (step: number | null, data: Record<keyof DataForm, any>) => {
    setStep(step);
    setValues({ ...values, ...data });

    const formRefCurrent = (formRef as any)?.current;
    if (formRefCurrent) {
      formRefCurrent.scrollTo({ top: 0, behavior: "smooth" });
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onBack = (step: number | null) => {
    setStep(step);
  };

  const onSubmit = async (data: Record<keyof DataForm, any>) => {
    setValues({ ...values, ...data });
    const dataSubmitForm = omit(
      {
        ...values,
        student1BirthDate: values.student1BirthDate && dayjs(values.student1BirthDate).format("YYYY-MM-DD"),
        student2BirthDate: values.student2BirthDate && dayjs(values.student2BirthDate).format("YYYY-MM-DD"),
        student3BirthDate: values.student3BirthDate && dayjs(values.student3BirthDate).format("YYYY-MM-DD"),
        student4BirthDate: values.student4BirthDate && dayjs(values.student4BirthDate).format("YYYY-MM-DD"),
        student5BirthDate: values.student5BirthDate && dayjs(values.student5BirthDate).format("YYYY-MM-DD"),
        signDate: values.signDate && dayjs(values.signDate).format("YYYY-MM-DD"),
        payPlan: data.payPlan,
      },
      ["agree", "anotherStudent1", "anotherStudent2", "anotherStudent3", "anotherStudent4"]
    );

    const response = await registerTournament({
      variables: { input: dataSubmitForm },
    });

    if (response) {
      setStep(6);
    }
  };

  const handleLastNumber = (value: number) => {
    setLastNumberForm(value);
  };
  return (
    <div className="flex flex-col items-center pt-[5.5rem] pb-[640px]">
      <h1 className="font-bold text-[88px] text-white">JOIN TODAY</h1>
      <div ref={formRef} className="w-[750px] max-h-[930px] overflow-y-auto mt-[2.7rem] mr-10 tuan">
        <div className="bg-[#dd3643] text-white p-5 flex flex-col gap-4">
          <div className="flex flex-col text-xl">
            <p>HNL S+D 2023-2024</p>
            <p>Registration</p>
          </div>
        </div>
        <div className="p-4 pb-10 bg-[#fceded]">
          <span className="mb-4 text-xs text-[#242424]">
            <span className="text-red-500">*</span> Required
          </span>
          {step === 0 && <FormInfo onNext={onNext} data={dataFormInfo} handleLastNumber={handleLastNumber} />}{" "}
          {step === 1 && (
            <FormStudent
              onNext={onNext}
              step={step}
              data={dataFormST1}
              onBack={onBack}
              handleLastNumber={handleLastNumber}
              lastNumberForm={lastNumberForm}
            />
          )}
          {step === 2 && (
            <FormStudent
              onNext={onNext}
              step={step}
              data={dataFormST2}
              onBack={onBack}
              handleLastNumber={handleLastNumber}
              lastNumberForm={lastNumberForm}
            />
          )}
          {step === 3 && (
            <FormStudent
              onNext={onNext}
              step={step}
              data={dataFormST3}
              onBack={onBack}
              handleLastNumber={handleLastNumber}
              lastNumberForm={lastNumberForm}
            />
          )}
          {step === 4 && (
            <FormStudent
              onNext={onNext}
              step={step}
              data={dataFormST4}
              onBack={onBack}
              handleLastNumber={handleLastNumber}
              lastNumberForm={lastNumberForm}
            />
          )}
          {step === 5 && (
            <FormStudent
              onNext={onNext}
              step={step}
              data={dataFormST5}
              onBack={onBack}
              handleLastNumber={handleLastNumber}
              lastNumberForm={lastNumberForm}
            />
          )}
          {step === 6 && <Thank />}
          {step === null ? (
            <FormSignature
              onNext={onNext}
              data={dataFormSignature}
              handleLastNumber={handleLastNumber}
              onBack={onBack}
              lastNumberForm={lastNumberForm}
            />
          ) : null}
          {step === -1 && (
            <FormSubmit
              onSubmit={onSubmit}
              onBack={onBack}
              lastNumberForm={lastNumberForm}
              handleLastNumber={handleLastNumber}
              data={dataSubmit}
              isLoading={loading}
            />
          )}
        </div>
      </div>
    </div>
  );
}
