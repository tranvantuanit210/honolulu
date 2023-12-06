import Loading from "@/components/loading/Loading";
import dynamic from "next/dynamic";

const Register = dynamic(() => import("./components/Register"), { loading: () => <Loading />, ssr: false });

export interface PageProps {}

export default function Page(props: PageProps) {
  return (
    <>
      <Register />
    </>
  );
}
