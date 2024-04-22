import { useMutation, useQuery } from "@tanstack/react-query";

import api from "@/configs/api";

const useAllUsers = () => {
  const getAllUsers = async () => {
    const response = await api.get("api/admin/get-all-users");
    return response;
  };
  return useQuery({ queryKey: ["users"], queryFn: getAllUsers });
};

const useAllLawyers = () => {
  const getAllLawyers = async () => {
    const response = await api.get("api/admin/get-all-lawyers");
    return response;
  };
  return useQuery({ queryKey: ["lawyers"], queryFn: getAllLawyers });
};

const useAllApprovedLawyers = () => {
  const getAllApprovedLawyers = async () => {
    const response = await api.get("api/user/get-all-approved-lawyers");
    return response;
  };
  return useQuery({
    queryKey: ["approved-lawyers"],
    queryFn: getAllApprovedLawyers,
  });
};

const useChangeStatus = () => {
  const changeStatus = async (data) => {
    const response = await api.post("api/admin/change-lawyer-account-status", {
      lawyerId: data.lawyer._id,
      userId: data.lawyer.userId,
      status: data.status,
    });
    return response;
  };
  return useMutation({ mutationFn: changeStatus });
};

export { useAllUsers, useAllLawyers, useAllApprovedLawyers, useChangeStatus };
