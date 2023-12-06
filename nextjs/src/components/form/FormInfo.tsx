/* eslint-disable react/no-unescaped-entities */
import { DataForm } from "@/types/form.type";
import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { useEffect } from "react";

export interface Form1Props {
  onNext: (step: number | null, data: any) => void;
  data: DataFormInfo;
  handleLastNumber: (value: number) => void;
}

export type DataFormInfo = Pick<
  DataForm,
  "parentFirstName" | "parentLastName" | "parentPhoneNumber" | "parentEmail" | "address" | "city" | "zipCode"
>;

export default function FormInfo({ onNext, data, handleLastNumber }: Form1Props) {
  const [form] = useForm();
  const onFinish = (values: DataFormInfo) => {
    onNext(1, values);
    handleLastNumber(7);
  };

  useEffect(() => {
    form.setFieldsValue(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <p className="text-lg text-[#c4303b] my-3">Parent's Information</p>
      <Form form={form} layout="vertical" name="FormInfo" onFinish={onFinish}>
        <Form.Item label="1. Parent's First Name" name="parentFirstName" rules={[{ required: true, message: "This question is required." }]}>
          <Input
            size="large"
            className="text-base border-0 border-b-2 border-transparent hover:border-b-2 transition-none placeholder:text-[#424242] !rounded-md"
            placeholder="Enter your answer"
          />
        </Form.Item>

        <Form.Item
          label="2. Parent's Last Name"
          name="parentLastName"
          rules={[{ required: true, message: "This question is required." }]}
          className="mt-12"
        >
          <Input
            size="large"
            className="text-base border-0 border-b-2 border-transparent hover:border-b-2 transition-none placeholder:text-[#424242] !rounded-md"
            placeholder="Enter your answer"
          />
        </Form.Item>
        <Form.Item
          label="3. Parent's Phone Number(s)"
          name="parentPhoneNumber"
          rules={[{ required: true, message: "This question is required." }]}
          className="mt-12"
        >
          <Input
            size="large"
            className="text-base border-0 border-b-2 border-transparent hover:border-b-2 transition-none placeholder:text-[#424242] !rounded-md"
            placeholder="Enter your answer"
          />
        </Form.Item>
        <Form.Item
          label="4. Parent's E-mail(s)"
          name="parentEmail"
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
            size="large"
            className="text-base border-0 border-b-2 border-transparent hover:border-b-2 transition-none placeholder:text-[#424242] !rounded-md"
            placeholder="Enter your answer"
          />
        </Form.Item>
        <Form.Item label="5. Address" name="address" rules={[{ required: true, message: "This question is required." }]} className="mt-12">
          <Input
            size="large"
            className="text-base border-0 border-b-2 border-transparent hover:border-b-2 transition-none placeholder:text-[#424242] !rounded-md"
            placeholder="Enter your answer"
          />
        </Form.Item>
        <Form.Item label="6. City" name="city" rules={[{ required: true, message: "This question is required." }]} className="mt-12">
          <Input
            size="large"
            className="text-base border-0 border-b-2 border-transparent hover:border-b-2 transition-none placeholder:text-[#424242] !rounded-md"
            placeholder="Enter your answer"
          />
        </Form.Item>
        <Form.Item label="7. Zip Code" name="zipCode" rules={[{ required: true, message: "This question is required." }]} className="mt-12">
          <Input
            size="large"
            className="text-base border-0 border-b-2 border-transparent hover:border-b-2 transition-none placeholder:text-[#424242] !rounded-md"
            placeholder="Enter your answer"
          />
        </Form.Item>

        <Form.Item className="mb-0 mt-12">
          <Button type="primary" htmlType="submit" className="w-full h-10">
            Next
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
