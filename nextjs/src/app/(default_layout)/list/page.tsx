"use client";

import { Space, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { User } from "@/types/user.type";
import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { GET_REGISTRATIONS } from "@/graphql/registration/registration.graphql";

export interface ListProps {}

export default function List(props: ListProps) {
  const { data, loading } = useQuery(GET_REGISTRATIONS);
  const users = data?.registrations;

  const columns: ColumnsType<User> = [
    {
      title: "Parent Name",
      dataIndex: "parentName",
      key: "name",
      render: (text, record) =>
        `${record.parentFirstName} ${record.parentLastName}`,
    },
    {
      title: "Email",
      dataIndex: "parentEmail",
      key: "parentEmail",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      render: (text, record) => `${record.address}, ${record.city}`,
    },
    {
      title: "Actions",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>
            <EditOutlined />
          </a>
          <a>
            <DeleteOutlined />
          </a>
        </Space>
      ),
    },
  ];

  return (
    <div className="flex flex-col items-center gap-6 py-24 bg-white w-[100vh]">
      <h1 className="font-bold text-[25px] text-black">REGISTERED USERS</h1>
      {loading && <p>Loading...</p>}
      {!loading && !users?.length && <p>No data to display</p>}

      {!loading && !!users?.length && (
        <div className=" overflow-y-auto w-full m-3">
          <Table className="m-3" columns={columns} dataSource={users} />
        </div>
      )}
    </div>
  );
}
