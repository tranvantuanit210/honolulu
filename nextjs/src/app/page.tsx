"use client";

import React, { useState } from "react";
import { Button } from "antd";
import Link from "next/link";
import { DataForm } from "@/types/form.type";
import FormInfo, { DataFormInfo } from "@/components/form/FormInfo";
import FormSignature, { DataFormSignature } from "@/components/form/FormSignnature";
import FormSubmit, { DataFormSubmit } from "@/components/form/FormSubmit";
import { initFormValue } from "@/data/form.data";
import FormStudent1, { DataFormST1 } from "@/components/form/FormStudent1";
import FormStudent2, { DataFormST2 } from "@/components/form/FormStudent2";
import FormStudent3, { DataFormST3 } from "@/components/form/FormStudent3";
import FormStudent4, { DataFormST4 } from "@/components/form/FormStudent4";
import dayjs from "dayjs";
import { omit } from "lodash";
import FormStudent5, { DataFormST5 } from "@/components/form/FormStudent5";

export interface IAppProps {}

export default function Home(props: IAppProps) {
  const [step, setStep] = useState<number | null>(0);
  const [values, setValues] = useState<DataForm>(initFormValue);
  const [lastNumberForm, setLastNumberForm] = useState<number>(7);
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
  };

  const onBack = (step: number | null) => {
    setStep(step);
  };

  const onSubmit = (data: Record<keyof DataForm, any>) => {
    setValues({ ...values, ...data });
    const dataSubmitForm = omit(
      {
        ...values,
        student1BirthDate: values.student1BirthDate && dayjs(values.student1BirthDate).format("YYYY-MM-DD"),
        student1ParticipateType: values.student1ParticipateType && values.student1ParticipateType.join(", "),
        student2BirthDate: values.student2BirthDate && dayjs(values.student2BirthDate).format("YYYY-MM-DD"),
        student2ParticipateType: values.student2ParticipateType && values.student2ParticipateType.join(", "),
        student3BirthDate: values.student3BirthDate && dayjs(values.student3BirthDate).format("YYYY-MM-DD"),
        student3ParticipateType: values.student3ParticipateType && values.student3ParticipateType.join(", "),
        student4BirthDate: values.student4BirthDate && dayjs(values.student4BirthDate).format("YYYY-MM-DD"),
        student4ParticipateType: values.student4ParticipateType && values.student4ParticipateType.join(", "),
        student5BirthDate: values.student5BirthDate && dayjs(values.student5BirthDate).format("YYYY-MM-DD"),
        student5ParticipateType: values.student5ParticipateType && values.student5ParticipateType.join(", "),
        signDate: values.signDate && dayjs(values.signDate).format("YYYY-MM-DD"),
        payPlan: data.payPlan,
      },
      ["agree", "anotherStudent1", "anotherStudent2", "anotherStudent3", "anotherStudent4"]
    );
    console.log(dataSubmitForm);
  };

  const handleLastNumber = (value: number) => {
    setLastNumberForm(value);
  };
  return (
    <div className="flex flex-col items-center gap-6 py-24">
      <h1 className="font-bold text-[88px] text-white">JOIN TODAY</h1>
      <div className="w-[750px] max-h-[930px] overflow-y-auto">
        <div className="bg-[#dd3643] text-white p-5 flex flex-col gap-4">
          <div className="flex justify-end">
            <Button className="p-[6px] bg-[#58161b] flex justify-center items-center border-0 hover:bg-[#c4303b] transition-all rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 fill-white ">
                <path d="M7.75 12a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0Zm6 0a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0ZM18 13.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Z" />
              </svg>
            </Button>
          </div>
          <div className="flex flex-col text-xl">
            <p>HNL S+D 2023-2024</p>
            <p className="ml-4">Registration</p>
          </div>
        </div>
        <div className="p-4 pb-0 bg-[#fceded]">
          <span className="mb-4 text-xs text-[#242424]">
            <span className="text-red-500">*</span> Required
          </span>
          {step === 0 && <FormInfo onNext={onNext} data={dataFormInfo} handleLastNumber={handleLastNumber} />}{" "}
          {step === 1 && <FormStudent1 onNext={onNext} data={dataFormST1} onBack={onBack} handleLastNumber={handleLastNumber} />}
          {step === 2 && <FormStudent2 onNext={onNext} data={dataFormST2} onBack={onBack} handleLastNumber={handleLastNumber} />}
          {step === 3 && <FormStudent3 onNext={onNext} data={dataFormST3} onBack={onBack} handleLastNumber={handleLastNumber} />}
          {step === 4 && <FormStudent4 onNext={onNext} data={dataFormST4} onBack={onBack} handleLastNumber={handleLastNumber} />}
          {step === 5 && <FormStudent5 onNext={onNext} data={dataFormST5} onBack={onBack} handleLastNumber={handleLastNumber} />}
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
            <FormSubmit onSubmit={onSubmit} onBack={onBack} lastNumberForm={lastNumberForm} handleLastNumber={handleLastNumber} data={dataSubmit} />
          )}
        </div>
        <div className="p-4 pb-12 text-xs bg-[#fceded] flex flex-col gap-10 text-[#242424]">
          <span className="ml-2">
            Never give out your password.{" "}
            <Link target="_blank" href="#" className="text-[#1152a3]">
              Report abuse
            </Link>
          </span>
          <div className="flex flex-col gap-3">
            <p>
              This content is created by the owner of the form. The data you submit will be sent to the form owner. Microsoft is not responsible for
              the privacy or security practices of its customers, including those of this form owner. Never give out your password.
            </p>
            <div>
              <p>Powered by Microsoft Forms |</p>
              <p>
                The owner of this form has not provided a privacy statement as to how they will use your response data. Do not provide personal or
                sensitive information.
              </p>
              <p>
                |{" "}
                <Link target="_blank" href="https://go.microsoft.com/fwlink/?linkid=866263" className="text-[#1152a3]">
                  Terms of use
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
