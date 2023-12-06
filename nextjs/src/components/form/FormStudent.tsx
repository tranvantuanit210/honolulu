import { FormContext } from "@/contexts/form.context";
import { optionsAnotherStudent, optionsParticipateType } from "@/data/form.data";
import { DataForm } from "@/types/form.type";
import { Button, Checkbox, DatePicker, Form, Input, InputNumber, Radio } from "antd";
import { useForm } from "antd/es/form/Form";
import { useContext, useEffect } from "react";

export interface FormStudentType {
  onNext: (step: number | null, data: any) => void;
  onBack: (step: number | null) => void;
  data: any;
  lastNumberForm: number;
  handleLastNumber: (value: number) => void;
  step: number;
}
export default function FormStudent({ onNext, data, onBack, lastNumberForm, handleLastNumber, step }: FormStudentType) {
  const [form] = useForm();
  const { setLastFormStep } = useContext(FormContext);

  useEffect(() => {
    form.setFieldsValue(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const generateLabelOrderStudent = () => {
    if (step === 2) {
      return " 2nd";
    }
    if (step === 3) {
      return " 3rd";
    }
    if (step === 4 || step === 5) {
      return ` ${step}th`;
    }
    return "";
  };
  const labelOrderStudentNumber = generateLabelOrderStudent();

  const onFinish = (values: any) => {
    if (form.getFieldValue(`anotherStudent${step}`) === "No") {
      onNext(null, values);
    } else {
      onNext(step === 5 ? null : step + 1, values);
    }
    setLastFormStep(step);
    handleLastNumber(step === 5 ? lastNumberForm + 6 : lastNumberForm + 7);
  };

  const handleBack = () => {
    handleLastNumber(lastNumberForm - 7);
    onBack(step - 1);
  };

  return (
    <div>
      <Form form={form} layout="vertical" name={`FormStudent${step}`} onFinish={onFinish} className="mt-6">
        <Form.Item
          label={`${lastNumberForm + 1}.${labelOrderStudentNumber} Student's First Name`}
          name={`student${step}FirstName`}
          rules={[{ required: true, message: "This question is required." }]}
        >
          <Input
            className="text-base border-0 border-b-2 border-transparent hover:border-b-2 transition-none placeholder:text-[#424242] placeholder:text-base !rounded-md"
            size="large"
            placeholder="Enter your answer"
          />
        </Form.Item>

        <Form.Item
          label={`${lastNumberForm + 2}.${labelOrderStudentNumber} Student's Age`}
          name={`student${step}Age`}
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
          label={`${lastNumberForm + 3}.${labelOrderStudentNumber} Student's Birthdate`}
          name={`student${step}BirthDate`}
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
        <Form.Item
          label={`${lastNumberForm + 4}.${labelOrderStudentNumber} Student's Mobile Phone Number`}
          name={`student${step}PhoneNumber`}
          className="mt-12"
        >
          <Input
            className="text-base border-0 border-b-2 border-transparent hover:border-b-2 transition-none placeholder:text-[#424242] placeholder:text-base !rounded-md"
            size="large"
            placeholder="Enter your answer"
          />
        </Form.Item>
        <Form.Item
          label={`${lastNumberForm + 5}.${labelOrderStudentNumber} Student's E-mail`}
          name={`student${step}Email`}
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
        <Form.Item label={`${lastNumberForm + 6}. My${labelOrderStudentNumber} Student would like to participate in:`} className="mt-12" required>
          <div className="flex flex-col gap-4">
            <p className="text-sm text-[#616161]">
              **Please note: this DOES NOT obligate your child to partipate or compete in these specific events for the entire season. This helps us
              in our planning and preparation for classes. Thank you!
            </p>
            <Form.Item name={`student${step}ParticipateType`} rules={[{ required: true, message: "This question is required." }]}>
              <Checkbox.Group className="flex flex-col gap-4" options={optionsParticipateType} />
            </Form.Item>
          </div>
        </Form.Item>
        {step !== 5 && (
          <Form.Item
            label={`${lastNumberForm + 7}. Register another Student`}
            name={`anotherStudent${step}`}
            rules={[{ required: true, message: "This question is required." }]}
            className="mt-8"
          >
            <Radio.Group className="flex flex-col gap-4" options={optionsAnotherStudent} />
          </Form.Item>
        )}

        <Form.Item className="mb-0 mt-12">
          <div className="flex items-center gap-6">
            <Button type="default" className="w-1/2 h-10" onClick={handleBack}>
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
