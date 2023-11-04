import { FormContext } from "@/contexts/form.context";
import { optionsAnotherStudent, optionsParticipateType } from "@/data/form.data";
import { DataForm } from "@/types/form.type";
import { Button, Checkbox, DatePicker, Form, Input, InputNumber, Radio } from "antd";
import { useForm } from "antd/es/form/Form";
import { useContext, useEffect } from "react";

export interface FormStudentType3 {
  onNext: (step: number | null, data: any) => void;
  onBack: (step: number | null) => void;
  data: DataFormST3;
  handleLastNumber: (value: number) => void;
}

export type DataFormST3 = Pick<
  DataForm,
  "student3FirstName" | "student3Age" | "student3BirthDate" | "student3Email" | "student3PhoneNumber" | "student3ParticipateType" | "anotherStudent3"
>;

export default function FormStudent3({ onNext, data, onBack, handleLastNumber }: FormStudentType3) {
  const [form] = useForm();
  const { setLastFormStep } = useContext(FormContext);
  const onFinish = (values: DataFormST3) => {
    if (form.getFieldValue("anotherStudent3") === "No") {
      onNext(null, values);
    } else {
      onNext(4, values);
    }
    setLastFormStep(3);
    handleLastNumber(28);
  };

  useEffect(() => {
    form.setFieldsValue(data);
  }, []);

  return (
    <div>
      <Form form={form} layout="vertical" name="FormStudent3" onFinish={onFinish} className="mt-6">
        <Form.Item label="22. 3rd Student's First Name" name="student3FirstName" rules={[{ required: true, message: "This question is required." }]}>
          <Input
            className="text-base border-0 border-b-2 border-transparent hover:border-b-2 transition-none placeholder:text-[#424242] placeholder:text-base !rounded-md"
            size="large"
            placeholder="Enter your answer"
          />
        </Form.Item>

        <Form.Item
          label="23. 3rd Student's Age"
          name="student3Age"
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
          label="24. 3rd Student's Birthdate"
          name="student3BirthDate"
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
        <Form.Item label="25. 3rd Student's Mobile Phone Number" name="student3PhoneNumber" className="mt-12">
          <Input
            className="text-base border-0 border-b-2 border-transparent hover:border-b-2 transition-none placeholder:text-[#424242] placeholder:text-base !rounded-md"
            size="large"
            placeholder="Enter your answer"
          />
        </Form.Item>
        <Form.Item
          label="26. 3rd Student's E-mail"
          name="student3Email"
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
        <Form.Item label="27. My 3rd Student would like to participate in:" className="mt-12" required>
          <div className="flex flex-col gap-4">
            <p className="text-sm text-[#616161]">
              **Please note: this DOES NOT obligate your child to partipate or compete in these specific events for the entire season. This helps us
              in our planning and preparation for classes. Thank you!
            </p>
            <Form.Item name="student3ParticipateType" rules={[{ required: true, message: "This question is required." }]}>
              <Checkbox.Group className="flex flex-col gap-4" options={optionsParticipateType} />
            </Form.Item>
          </div>
        </Form.Item>
        <Form.Item
          label="28 .Register another Student"
          name="anotherStudent3"
          rules={[{ required: true, message: "This question is required." }]}
          className="mt-8"
        >
          <Radio.Group className="flex flex-col gap-4" options={optionsAnotherStudent} />
        </Form.Item>

        <Form.Item className="mb-0 mt-12">
          <div className="flex items-center gap-6">
            <Button type="default" className="w-1/2 h-10" onClick={() => onBack(2)}>
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
