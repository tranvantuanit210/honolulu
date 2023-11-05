import { DataFormBody } from "@/types/form.type";
import { User } from "@/types/user.type";
import { SuccessResponse } from "@/types/utils.type";
import http from "@/utils/http";

const authApi = {
  register: (body: DataFormBody) => http.post("users/register", body),
  listUsers: () => http.get<SuccessResponse<User[]>>("users"),
};

export default authApi;
