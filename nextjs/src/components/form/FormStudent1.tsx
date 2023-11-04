import { FormContext } from "@/contexts/form.context";
import { optionsAnotherStudent, optionsParticipateType } from "@/data/form.data";
import { DataForm } from "@/types/form.type";
import { Button, Checkbox, DatePicker, Form, Input, InputNumber, Radio } from "antd";
import { useForm } from "antd/es/form/Form";
import { useContext, useEffect } from "react";

export interface FormStudentType1 {
  onNext: (step: number | null, data: any) => void;
  onBack: (step: number | null) => void;
  data: DataFormST1;
  handleLastNumber: (value: number) => void;
}

export type DataFormST1 = Pick<
  DataForm,
  "student1FirstName" | "student1Age" | "student1BirthDate" | "student1Email" | "student1PhoneNumber" | "student1ParticipateType" | "anotherStudent1"
>;

export default function FormStudent1({ onNext, data, onBack, handleLastNumber }: FormStudentType1) {
  const [form] = useForm();
  const { setLastFormStep } = useContext(FormContext);
  const onFinish = (values: DataFormST1) => {
    if (form.getFieldValue("anotherStudent1") === "No") {
      onNext(null, values);
    } else {
      onNext(2, values);
    }
    setLastFormStep(1);
    handleLastNumber(14);
  };

  useEffect(() => {
    form.setFieldsValue(data);
  }, []);

  return (
    <div>
      <Form form={form} layout="vertical" name="FormStudent1" onFinish={onFinish} className="mt-6">
        <Form.Item label="8. Student's First Name" name="student1FirstName" rules={[{ required: true, message: "This question is required." }]}>
          <Input
            className="text-base border-0 border-b-2 border-transparent hover:border-b-2 transition-none placeholder:text-[#424242] placeholder:text-base !rounded-md"
            size="large"
            placeholder="Enter your answer"
          />
        </Form.Item>

        <Form.Item label="9. Student's Age" name="student1Age" rules={[{ required: true, message: "This question is required." }]} className="mt-12">
          <InputNumber
            className="w-full text-base border-0 border-b-2 border-transparent hover:border-b-2 transition-none placeholder:text-[#424242] placeholder:text-base !rounded-md"
            size="large"
            placeholder="The value must be a number"
          />
        </Form.Item>
        <Form.Item
          label="10. Student's Birthdate"
          name="student1BirthDate"
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
        <Form.Item label="11. Student's Mobile Phone Number" name="student1PhoneNumber" className="mt-12">
          <Input
            className="text-base border-0 border-b-2 border-transparent hover:border-b-2 transition-none placeholder:text-[#424242] placeholder:text-base !rounded-md"
            size="large"
            placeholder="Enter your answer"
          />
        </Form.Item>
        <Form.Item
          label="12. Student's E-mail"
          name="student1Email"
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
        <Form.Item label="13. My Student would like to participate in:" className="mt-12" required>
          <div className="flex flex-col gap-4">
            <p className="text-sm text-[#616161]">
              **Please note: this DOES NOT obligate your child to partipate or compete in these specific events for the entire season. This helps us
              in our planning and preparation for classes. Thank you!
            </p>
            <Form.Item name="student1ParticipateType" rules={[{ required: true, message: "This question is required." }]}>
              <Checkbox.Group className="flex flex-col gap-4" options={optionsParticipateType} />
            </Form.Item>
          </div>
        </Form.Item>
        <Form.Item
          label="14. Register another Student"
          name="anotherStudent1"
          rules={[{ required: true, message: "This question is required." }]}
          className="mt-8"
        >
          <Radio.Group className="flex flex-col gap-4" options={optionsAnotherStudent} />
        </Form.Item>

        <Form.Item className="mb-0 mt-12">
          <div className="flex items-center gap-6">
            <Button type="default" className="w-1/2 h-10" onClick={() => onBack(0)}>
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
