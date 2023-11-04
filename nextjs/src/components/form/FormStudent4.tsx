import { FormContext } from "@/contexts/form.context";
import { optionsAnotherStudent, optionsParticipateType } from "@/data/form.data";
import { DataForm } from "@/types/form.type";
import { Button, Checkbox, DatePicker, Form, Input, InputNumber, Radio } from "antd";
import { useForm } from "antd/es/form/Form";
import { useContext, useEffect } from "react";

export interface FormStudentType4 {
  onNext: (step: number | null, data: any) => void;
  onBack: (step: number | null) => void;
  data: DataFormST4;
  handleLastNumber: (value: number) => void;
}

export type DataFormST4 = Pick<
  DataForm,
  "student4FirstName" | "student4Age" | "student4BirthDate" | "student4Email" | "student4PhoneNumber" | "student4ParticipateType" | "anotherStudent4"
>;

export default function FormStudent4({ onNext, data, onBack, handleLastNumber }: FormStudentType4) {
  const [form] = useForm();
  const { setLastFormStep } = useContext(FormContext);
  const onFinish = (values: DataFormST4) => {
    if (form.getFieldValue("anotherStudent4") === "No") {
      onNext(null, values);
    } else {
      onNext(5, values);
    }
    setLastFormStep(4);
    handleLastNumber(35);
  };

  useEffect(() => {
    form.setFieldsValue(data);
  }, []);

  return (
    <div>
      <Form form={form} layout="vertical" name="FormStudent4" onFinish={onFinish} className="mt-6">
        <Form.Item label="29. 4th Student's First Name" name="student4FirstName" rules={[{ required: true, message: "This question is required." }]}>
          <Input
            className="text-base border-0 border-b-2 border-transparent hover:border-b-2 transition-none placeholder:text-[#424242] placeholder:text-base !rounded-md"
            size="large"
            placeholder="Enter your answer"
          />
        </Form.Item>

        <Form.Item
          label="30. 4th Student's Age"
          name="student4Age"
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
          label="31. 4th Student's Birthdate"
          name="student4BirthDate"
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
        <Form.Item label="32. 4th Student's Mobile Phone Number" name="student4PhoneNumber" className="mt-12">
          <Input
            className="text-base border-0 border-b-2 border-transparent hover:border-b-2 transition-none placeholder:text-[#424242] placeholder:text-base !rounded-md"
            size="large"
            placeholder="Enter your answer"
          />
        </Form.Item>
        <Form.Item
          label="33. 4th Student's E-mail"
          name="student4Email"
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
        <Form.Item label="34. My 4th Student would like to participate in:" className="mt-12" required>
          <div className="flex flex-col gap-4">
            <p className="text-sm text-[#616161]">
              **Please note: this DOES NOT obligate your child to partipate or compete in these specific events for the entire season. This helps us
              in our planning and preparation for classes. Thank you!
            </p>
            <Form.Item name="student4ParticipateType" rules={[{ required: true, message: "This question is required." }]}>
              <Checkbox.Group className="flex flex-col gap-4" options={optionsParticipateType} />
            </Form.Item>
          </div>
        </Form.Item>
        <Form.Item
          label="35. Register another Student"
          name="anotherStudent4"
          rules={[{ required: true, message: "This question is required." }]}
          className="mt-8"
        >
          <Radio.Group className="flex flex-col gap-4" options={optionsAnotherStudent} />
        </Form.Item>

        <Form.Item className="mb-0 mt-12">
          <div className="flex items-center gap-6">
            <Button type="default" className="w-1/2 h-10" onClick={() => onBack(3)}>
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
