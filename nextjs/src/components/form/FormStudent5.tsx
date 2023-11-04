import { FormContext } from "@/contexts/form.context";
import { optionsAnotherStudent, optionsParticipateType } from "@/data/form.data";
import { DataForm } from "@/types/form.type";
import { Button, Checkbox, DatePicker, Form, Input, InputNumber, Radio } from "antd";
import { useForm } from "antd/es/form/Form";
import { useContext, useEffect } from "react";

export interface FormStudentType5 {
  onNext: (step: number | null, data: any) => void;
  onBack: (step: number | null) => void;
  data: DataFormST5;
  handleLastNumber: (value: number) => void;
}

export type DataFormST5 = Pick<
  DataForm,
  "student5FirstName" | "student5Age" | "student5BirthDate" | "student5Email" | "student5PhoneNumber" | "student5ParticipateType"
>;

export default function FormStudent5({ onNext, data, onBack, handleLastNumber }: FormStudentType5) {
  const [form] = useForm();
  const { setLastFormStep } = useContext(FormContext);
  const onFinish = (values: DataFormST5) => {
    onNext(null, values);
    setLastFormStep(5);
    handleLastNumber(41);
  };

  useEffect(() => {
    form.setFieldsValue(data);
  }, []);

  return (
    <div>
      <Form form={form} layout="vertical" name="FormStudent5" onFinish={onFinish} className="mt-6">
        <Form.Item label="36. 5th Student's First Name" name="student5FirstName" rules={[{ required: true, message: "This question is required." }]}>
          <Input
            className="text-base border-0 border-b-2 border-transparent hover:border-b-2 transition-none placeholder:text-[#424242] placeholder:text-base !rounded-md"
            size="large"
            placeholder="Enter your answer"
          />
        </Form.Item>

        <Form.Item
          label="37. 5th Student's Age"
          name="student5Age"
          rules={[{ required: true, message: "This question is required." }]}
          className="mt-12"
        >
          <InputNumber
            className="w-full text-base border-0 border-b-2 border-transparent hover:border-b-2 transition-none placeholder:text-[#424242] placeholder:text-base !rounded-md"
            size="large"
            placeholder="The value must be a number"
          />
        </Form.Item>
        <Form.Item
          label="38. 5th Student's Birthdate"
          name="student5BirthDate"
          rules={[{ required: true, message: "This question is required." }]}
          className="mt-12"
        >
          <DatePicker
            format="YYYY-MM-DD"
            className="w-full text-base border-0 border-b-2 border-transparent hover:border-b-2 transition-none"
            size="large"
            placeholder="Please input date (M/dd/yyyy)"
          />
        </Form.Item>
        <Form.Item label="39. 5th Student's Mobile Phone Number" name="student5PhoneNumber" className="mt-12">
          <Input
            className="text-base border-0 border-b-2 border-transparent hover:border-b-2 transition-none placeholder:text-[#424242] placeholder:text-base !rounded-md"
            size="large"
            placeholder="Enter your answer"
          />
        </Form.Item>
        <Form.Item
          label="40. 5th Student's E-mail"
          name="student5Email"
          rules={[
            { required: true, message: "This question is required." },
            {
              pattern: /^\S+@\S+\.\S+$/,
              message: "Email is invalid",
            },
          ]}
          className="mt-12"
        >
          <Input
            className="text-base border-0 border-b-2 border-transparent hover:border-b-2 transition-none placeholder:text-[#424242] placeholder:text-base !rounded-md"
            size="large"
            placeholder="Enter your answer"
          />
        </Form.Item>
        <Form.Item label="41. My 5th Student would like to participate in:" className="mt-12" required>
          <div className="flex flex-col gap-4">
            <p className="text-sm text-[#616161]">
              **Please note: this DOES NOT obligate your child to partipate or compete in these specific events for the entire season. This helps us
              in our planning and preparation for classes. Thank you!
            </p>
            <Form.Item name="student5ParticipateType" rules={[{ required: true, message: "This question is required." }]}>
              <Checkbox.Group className="flex flex-col gap-4" options={optionsParticipateType} />
            </Form.Item>
          </div>
        </Form.Item>

        <Form.Item className="mb-0 mt-12">
          <div className="flex items-center gap-6">
            <Button type="default" className="w-1/2 h-10" onClick={() => onBack(4)}>
              Back
            </Button>
            <Button type="primary" htmlType="submit" className="w-1/2 h-10">
              Next
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
}
