/* eslint-disable react/no-unescaped-entities */
import { optionsPayPlan } from "@/data/form.data";
import { DataForm } from "@/types/form.type";
import { Button, Form, Input, Radio } from "antd";
import { useForm } from "antd/es/form/Form";
import Link from "next/link";
import { useEffect } from "react";

export interface FormSubmitProps {
  onSubmit: (data: any) => void;
  onBack: (step: number | null) => void;
  data: DataFormSubmit;
  lastNumberForm: number;
  handleLastNumber: (value: number) => void;
  isLoading: boolean;
}

export type DataFormSubmit = Pick<DataForm, "payPlan">;

export default function FormSubmit({ onSubmit, onBack, data, lastNumberForm, handleLastNumber, isLoading }: FormSubmitProps) {
  const [form] = useForm();

  useEffect(() => {
    form.setFieldsValue(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onFinish = (values: DataFormSubmit) => {
    onSubmit(values);
  };
  const handleBack = () => {
    onBack(null);
    handleLastNumber(lastNumberForm - 9);
  };
  return (
    <div>
      <p className="text-lg text-[#c4303b] my-3">Fee Structure</p>
      <p className="text-xs text-[#242424] mt-2">
        The fees for participating with the Honolulu Speech & Debate Club for the 2023-2024 season are as follows:
      </p>
      <div className="flex flex-col gap-6 text-xs text-[#242424] mt-4">
        <ul className="list-none">
          <li>Per Family Registration - $300</li>
          <li>Per Family Facility Fee - $150</li>
        </ul>
        <p className="font-bold">TOTAL REGISTRATION FEES DUE by 9/25/2023: $450</p>
        <p>
          *This fee includes younger siblings registering for Junior Speech. Note: Please complete separate Junior Speech registration form for our
          records only.{" "}
        </p>
        <Link href="https://honoluluspeechanddebate.org/join-junior-speech/" className="text-[#1152a3]" target="_blank">
          https://honoluluspeechanddebate.org/join-junior-speech/
        </Link>
      </div>
      <p className="text-xs text-[#242424] mt-8">Please make your checks payable to "Honolulu Speech & Debate".</p>
      <Form form={form} layout="vertical" name="FormSubmit" className="mt-14" onFinish={onFinish}>
        <Form.Item
          label={`${lastNumberForm + 1}. Please indicate how you plan to pay`}
          name="payPlan"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Radio.Group className="flex flex-col gap-4" options={optionsPayPlan} />
        </Form.Item>
        <Form.Item className="mb-0 mt-12">
          <div className="flex items-center gap-6">
            <Button type="default" className="w-1/2 h-10" onClick={handleBack}>
              Back
            </Button>
            <Button loading={isLoading} type="primary" htmlType="submit" className="w-1/2 h-10">
              Submit
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
}
