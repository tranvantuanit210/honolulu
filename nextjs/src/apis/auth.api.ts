import { DataForm } from "@/types/form.type";
import http from "@/utils/http";

const authApi = {
  register: (body: DataForm) => http.post("users/register", body),
  listUsers: () => http.get("users"),
};

export default authApi;
