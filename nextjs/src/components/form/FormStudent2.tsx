import { FormContext } from "@/contexts/form.context";
import { optionsAnotherStudent, optionsParticipateType } from "@/data/form.data";
import { DataForm } from "@/types/form.type";
import { Button, Checkbox, DatePicker, Form, Input, InputNumber, Radio } from "antd";
import { useForm } from "antd/es/form/Form";
import { useContext, useEffect } from "react";

export interface FormStudentType2 {
  onNext: (step: number | null, data: any) => void;
  onBack: (step: number | null) => void;
  data: DataFormST2;
  handleLastNumber: (value: number) => void;
}

export type DataFormST2 = Pick<
  DataForm,
  "student2FirstName" | "student2Age" | "student2BirthDate" | "student2Email" | "student2PhoneNumber" | "student2ParticipateType" | "anotherStudent2"
>;

export default function FormStudent2({ onNext, data, onBack, handleLastNumber }: FormStudentType2) {
  const [form] = useForm();
  const { setLastFormStep } = useContext(FormContext);
  const onFinish = (values: DataFormST2) => {
    if (form.getFieldValue("anotherStudent2") === "No") {
      onNext(null, values);
    } else {
      onNext(3, values);
    }
    setLastFormStep(2);
    handleLastNumber(21);
  };

  useEffect(() => {
    form.setFieldsValue(data);
  }, []);

  return (
    <div>
      <Form form={form} layout="vertical" name="FormStudent2" onFinish={onFinish} className="mt-6">
        <Form.Item label="15. 2nd Student's First Name" name="student2FirstName" rules={[{ required: true, message: "This question is required." }]}>
          <Input
            className="border-0 border-b-2 text-base border-transparent hover:border-b-2 transition-none placeholder:text-[#424242] placeholder:text-base !rounded-md"
            size="large"
            placeholder="Enter your answer"
          />
        </Form.Item>

        <Form.Item
          label="16. 2nd Student's Age"
          name="student2Age"
          rules={[{ required: true, message: "This question is required." }]}
          className="mt-12"
        >
          <InputNumber
            className="w-full border-0 border-b-2 text-base border-transparent hover:border-b-2 transition-none placeholder:text-[#424242] placeholder:text-base !rounded-md"
            size="large"
            placeholder="The value must be a number"
          />
        </Form.Item>
        <Form.Item
          label="17. 2nd Student's Birthdate"
          name="student2BirthDate"
          rules={[{ required: true, message: "This question is required." }]}
          className="mt-12"
        >
          <DatePicker
            format="YYYY-MM-DD"
            className="w-full border-0 border-b-2 text-base border-transparent hover:border-b-2 transition-none"
            size="large"
            placeholder="Please input date (M/dd/yyyy)"
          />
        </Form.Item>
        <Form.Item label="18. 2nd Student's Mobile Phone Number" name="student2PhoneNumber" className="mt-12">
          <Input
            className="border-0 border-b-2 text-base border-transparent hover:border-b-2 transition-none placeholder:text-[#424242] placeholder:text-base !rounded-md"
            size="large"
            placeholder="Enter your answer"
          />
        </Form.Item>
        <Form.Item
          label="19. 2nd Student's E-mail"
          name="student2Email"
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
            className="border-0 border-b-2 text-base border-transparent hover:border-b-2 transition-none placeholder:text-[#424242] placeholder:text-base !rounded-md"
            size="large"
            placeholder="Enter your answer"
          />
        </Form.Item>
        <Form.Item label="20. My 2nd Student would like to participate in:" className="mt-12">
          <div className="flex flex-col gap-4">
            <p className="text-sm text-[#616161]">
              **Please note: this DOES NOT obligate your child to partipate or compete in these specific events for the entire season. This helps us
              in our planning and preparation for classes. Thank you!
            </p>
            <Form.Item name="student2ParticipateType" rules={[{ required: true, message: "This question is required." }]}>
              <Checkbox.Group className="flex flex-col gap-4" options={optionsParticipateType} />
            </Form.Item>
          </div>
        </Form.Item>
        <Form.Item
          label="21. Register another Student"
          name="anotherStudent2"
          rules={[{ required: true, message: "This question is required." }]}
          className="mt-8"
        >
          <Radio.Group className="flex flex-col gap-4" options={optionsAnotherStudent} />
        </Form.Item>

        <Form.Item className="mb-0 mt-12">
          <div className="flex items-center gap-6">
            <Button type="default" className="w-1/2 h-10" onClick={() => onBack(1)}>
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
