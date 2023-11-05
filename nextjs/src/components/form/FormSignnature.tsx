/* eslint-disable react/no-unescaped-entities */
import { FormContext } from "@/contexts/form.context";
import { DataForm } from "@/types/form.type";
import { Button, DatePicker, Form, Input, Radio } from "antd";
import { useForm } from "antd/es/form/Form";
import Link from "next/link";
import { useContext, useEffect } from "react";

export interface FormSignatureProps {
  onNext: (step: number | null, data: any) => void;
  onBack: (step: number | null) => void;
  data: DataFormSignature;
  handleLastNumber: (value: number) => void;
  lastNumberForm: number;
}

export type DataFormSignature = Pick<
  DataForm,
  | "homeChurch"
  | "agree"
  | "student1Signature"
  | "student2Signature"
  | "student3Signature"
  | "student4Signature"
  | "student5Signature"
  | "parentSignature"
  | "signDate"
>;

export default function FormSignature({
  onBack,
  onNext,
  data,
  handleLastNumber,
  lastNumberForm,
}: FormSignatureProps) {
  const [form] = useForm();
  const { lastFormStep } = useContext(FormContext);
  const onFinish = (values: DataFormSignature) => {
    onNext(-1, values);
    handleLastNumber(lastNumberForm + 9);
  };

  useEffect(() => {
    form.setFieldsValue(data);
  }, []);
  return (
    <div>
      <p className="text-lg text-[#c4303b] my-3">
        Parent and Student(s) agree to the following:
      </p>
      <div className="flex flex-col gap-6 text-xs text-[#242424]">
        <p>
          1. We have decided to be a part of the Honolulu Speech and Debate Club
          for the upcoming season.
        </p>
        <div className="flex flex-col gap-6">
          <p>
            2. Per NCFCA Eligibility Requirements (Please see League Handbook in
            Resource Library:
            <Link
              target="_blank"
              href="https://ncfca.org/clubs/"
              className="text-[#1152a3]"
            >
              {" "}
              https://ncfca.org/clubs/
            </Link>
            ), my student is within the required age for competition.{" "}
          </p>
          <p>
            A competitor eligible for qualifying competition during the 2024
            season must meet all of the applicable criteria listed below:
          </p>
          <ul className="list-none">
            <li>• Be an NCFCA affiliate</li>
            <li>• Read and abide by the NCFCA Standards of Conduct</li>
            <li>
              • Be no younger than 12 years old on January 1, 2024, for
              participation in Lincoln-Douglas
            </li>
            <li>Value Debate, Team Policy Debate, and speech events</li>
            <li>
              • Be no younger than 15 years old on September 1, 2023, for
              participation in Moot Court
            </li>
            <li>• Be no older than 18 years old on September 1, 2023</li>
            <li>• Not have earned a high school diploma</li>
          </ul>
        </div>
        <p>
          3. If we are participating in debate, we will coordinate with our
          debate partner’s parents BEFORE the tournament season starts, as to
          which tournaments we will attend together.
        </p>
        <p>
          4. We agree with the NCFCA Statement of Faith and Position Statements
          found here (
          <Link
            target="_blank"
            href="https://www.ncfca.org/about/foundational-beliefs"
            className="text-[#1152a3]"
          >
            https://www.ncfca.org/about/foundational-beliefs
          </Link>
          ):
        </p>
      </div>
      <div className="flex flex-col gap-6 text-xs text-[#242424] mt-14">
        <p>Nicene Creed</p>
        <p>
          We believe in one God the Father Almighty, Maker of heaven and earth,
          of all things visible and invisible.
        </p>
        <p>
          And in one Lord Jesus Christ, the only-begotten Son of God, begotten
          of his Father before all worlds, God of God, Light of Light, very God
          of very God, begotten, not made, being of one substance with the
          Father; by whom all things were made; who for us and for our salvation
          came down from heaven, and was incarnate by the Holy Spirit of the
          virgin Mary, and was made man; and was crucified also for us under
          Pontius Pilate; he suffered and was buried; and the third day he rose
          again according to the Scriptures, and ascended into heaven, and is
          seated at the right hand of the Father; and he shall come again, with
          glory, to judge both the living and the dead; whose kingdom shall have
          no end.
        </p>
        <p>
          And we believe in the Holy Spirit, the Lord and giver of life, who
          proceeds from the Father and the Son; who with the Father and the Son
          together is worshiped and glorified; who spoke by the prophets; and we
          believe in one holy catholic and apostolic church; we acknowledge one
          baptism for the remission of sins; and we look for the resurrection of
          the dead, and the life of the world to come.
        </p>
        <p>Amen.</p>
      </div>
      <div className="flex flex-col gap-6 text-xs text-[#242424] mt-14">
        <p>Other NCFCA Position Statements</p>
        <p>
          For more than two thousand years, the Christian church has held almost
          exclusively accepted viewpoints on the veracity and inerrancy of
          Scripture and on issues related to marriage and biblical sexuality.
          Acknowledgement of what constitutes a “Christian worldview” based on
          these beliefs has gone largely without dispute until the last decade.
          Current societal norms, both inside and outside the church, have
          challenged the clarity with which NCFCA once operated and required us
          to resolutely affirm what Scripture has to say about these two issues.
        </p>
      </div>
      <div className="flex flex-col gap-6 text-xs text-[#242424] mt-14">
        <p>Scriptural Inerrancy</p>
        <p>
          We believe that the Bible in its entirety “is breathed out by God” (2
          Tim 3:16), is inerrant in its original autographs (Proverbs 30:5; 2
          Peter 1:20-21), and is “profitable for teaching, for reproof, for
          correction, and for training in righteousness, that the man of God may
          be complete, equipped for every good work”. (2 Timothy 3:17)
        </p>
      </div>
      <div className="flex flex-col gap-6 text-xs text-[#242424] mt-14">
        <p>Marriage and Gender</p>
        <p>
          In order to clearly indicate our position on an extensive list of
          issues related to marriage and human sexuality, NCFCA’s Board of
          Directors has chosen to affirm the Nashville Statement. This
          statement, based on Scripture, addresses issues including premarital,
          extramarital, and homosexual relationships, gender alteration or
          identification, as well as physical disorders related to gender.
        </p>
      </div>
      <Form
        form={form}
        layout="vertical"
        name="FormSignature"
        className="mt-14"
        onFinish={onFinish}
      >
        <Form.Item label={`${lastNumberForm + 1}. Home Church`} required>
          <div className="flex flex-col gap-4">
            <p className="text-sm text-[#616161]">
              Please provide the name of the church that you call home. If you
              are not members at a church, please provide the name of the church
              that you are currently attending.
            </p>
            <Form.Item
              name="homeChurch"
              rules={[
                { required: true, message: "This question is required." },
              ]}
            >
              <Input
                className="border-0 border-b-2 text-base border-transparent hover:border-b-2 transition-none placeholder:text-[#424242] placeholder:text-base !rounded-md"
                size="large"
                placeholder="Enter your answer"
              />
            </Form.Item>
          </div>
        </Form.Item>

        <Form.Item
          label={`${
            lastNumberForm + 2
          }. We have read all the above information, including the statement of faith, and agree to it. We also verify that we comply with the guidelines set forth by the NCFCA concerning qualifications for speech & debate. See www.ncfca.org`}
          name="agree"
          rules={[{ required: true, message: "This question is required." }]}
          className="mt-12"
        >
          <Radio.Group
            className="flex flex-col gap-4"
            options={[{ label: "Agree", value: "Agree" }]}
          />
        </Form.Item>
        <Form.Item
          label={`${lastNumberForm + 3}. Student Signature (Full Name)`}
          className="mt-12"
          required
        >
          <div className="flex flex-col gap-4">
            <p className="text-sm text-[#616161] italic">
              If you agree, please type in your full name.
            </p>
            <Form.Item
              name="student1Signature"
              rules={[
                { required: true, message: "This question is required." },
              ]}
            >
              <Input
                className="border-0 border-b-2 text-base border-transparent hover:border-b-2 transition-none placeholder:text-[#424242] placeholder:text-base !rounded-md"
                size="large"
                placeholder="Enter your answer"
              />
            </Form.Item>
          </div>
        </Form.Item>
        <Form.Item
          label={`${lastNumberForm + 4}. Student #2 Signature (Full Name)`}
          className="mt-12"
          required
        >
          <div className="flex flex-col gap-4">
            <p className="text-sm text-[#616161] italic">
              If you agree, please type in your full name. - If applicable (If
              not applicable - enter "N/A")
            </p>
            <Form.Item
              name="student2Signature"
              rules={[
                { required: true, message: "This question is required." },
              ]}
            >
              <Input
                className="border-0 border-b-2 text-base border-transparent hover:border-b-2 transition-none placeholder:text-[#424242] placeholder:text-base !rounded-md"
                size="large"
                placeholder="Enter your answer"
              />
            </Form.Item>
          </div>
        </Form.Item>
        <Form.Item
          label={`${lastNumberForm + 5}. Student #3 Signature (Full Name)`}
          className="mt-12"
          required
        >
          <div className="flex flex-col gap-4">
            <p className="text-sm text-[#616161] italic">
              If you agree, please type in your full name. - If applicable (If
              not applicable - enter "N/A")
            </p>
            <Form.Item
              name="student3Signature"
              rules={[
                { required: true, message: "This question is required." },
              ]}
            >
              <Input
                className="border-0 border-b-2 text-base border-transparent hover:border-b-2 transition-none placeholder:text-[#424242] placeholder:text-base !rounded-md"
                size="large"
                placeholder="Enter your answer"
              />
            </Form.Item>
          </div>
        </Form.Item>
        <Form.Item
          label={`${lastNumberForm + 6}. Student #4 Signature (Full Name)`}
          className="mt-12"
          required
        >
          <div className="flex flex-col gap-4">
            <p className="text-sm text-[#616161] italic">
              If you agree, please type in your full name. - If applicable (If
              not applicable - enter "N/A")
            </p>
            <Form.Item
              name="student4Signature"
              rules={[
                { required: true, message: "This question is required." },
              ]}
            >
              <Input
                className="border-0 border-b-2 text-base border-transparent hover:border-b-2 transition-none placeholder:text-[#424242] placeholder:text-base !rounded-md"
                size="large"
                placeholder="Enter your answer"
              />
            </Form.Item>
          </div>
        </Form.Item>

        <Form.Item
          label={`${
            lastNumberForm + 7
          }. Student #5 Signature (Full Name) - If applicable (If not applicable - enter "N/A")`}
          className="mt-12"
          required
        >
          <div className="flex flex-col gap-4">
            <p className="text-sm text-[#616161] italic">
              If you agree, please type in your full name. - If applicable (If
              not applicable - enter "N/A")
            </p>
            <Form.Item
              name="student5Signature"
              rules={[
                { required: true, message: "This question is required." },
              ]}
            >
              <Input
                className="border-0 border-b-2 text-base border-transparent hover:border-b-2 transition-none placeholder:text-[#424242] placeholder:text-base !rounded-md"
                size="large"
                placeholder="Enter your answer"
              />
            </Form.Item>
          </div>
        </Form.Item>
        <Form.Item
          label={`${lastNumberForm + 8}. Parent Signature`}
          className="mt-12"
          required
        >
          <div className="flex flex-col gap-4">
            <p className="text-sm text-[#616161] italic">
              If you agree, please type in your full name.
            </p>
            <Form.Item
              name="parentSignature"
              rules={[
                { required: true, message: "This question is required." },
              ]}
            >
              <Input
                className="border-0 border-b-2 text-base border-transparent hover:border-b-2 transition-none placeholder:text-[#424242] placeholder:text-base !rounded-md"
                size="large"
                placeholder="Enter your answer"
              />
            </Form.Item>
          </div>
        </Form.Item>
        <Form.Item
          label={`${lastNumberForm + 9}. Signing Date`}
          name="signDate"
          rules={[{ required: true, message: "This question is required." }]}
          className="mt-12"
        >
          <DatePicker
            format="YYYY-MM-DD"
            className="w-full border-0 border-b-2 text-base border-transparent hover:border-b-2 transition-none"
            size="large"
            placeholder="Please input date (MM/dd/yyyy)"
          />
        </Form.Item>

        <Form.Item className="mb-0 mt-12">
          <div className="flex items-center gap-6">
            <Button
              type="default"
              className="w-1/2 h-10"
              onClick={() => onBack(lastFormStep)}
            >
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
