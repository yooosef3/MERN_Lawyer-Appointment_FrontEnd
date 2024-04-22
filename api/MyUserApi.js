import { useMutation, useQuery } from "@tanstack/react-query";

import api from "@/configs/api";
import toast from "react-hot-toast";

const useRegister = () => {
  const register = async (data) => {
    const response = await api.post("api/user/register", data);
    if (response.data.success) {
      toast.success(response.data.message);
    }
    return response;
  };
  return useMutation({ mutationFn: register });
};

const useLogin = () => {
  const login = async (data) => {
    const response = await api.post("api/user/login", data);
    if (response.data.success) {
      toast.success(response.data.message);
      localStorage.setItem("token", response.data.data);
    } else {
      toast.error(response.data.message);
    }
    return response;
  };
  return useMutation({ mutationFn: login });
};

const useCheck = () => {
  const check = async ({ lawyerId, time, selectedDay }) => {
    const response = await api.post("api/user/check-booking-available", {
      lawyerId,
      time,
      selectedDay,
    });
    return response;
  };
  return useMutation({
    mutationFn: check,
  });
};

const useBookNow = () => {
  const bookNow = async ({
    lawyerId,
    userId,
    lawyerInfo,
    userInfo,
    time,
    selectedDay,
  }) => {
    const response = await api.post("api/user/book-appointment", {
      lawyerId,
      userId,
      lawyerInfo,
      userInfo,
      time,
      selectedDay,
    });
    return response;
  };
  return useMutation({
    mutationFn: bookNow,
  });
};

const useGetLawyerById = () => {
  const getLawyerById = async (lawyerId) => {
    const response = await api.post("api/lawyer/get-lawyer-info-by-id", {
      lawyerId,
    });
    return response;
  };
  return useMutation({
    mutationFn: getLawyerById,
  });
};

const useAllAppointments = () => {
  const getAllAppointments = async () => {
    const response = await api.get("api/user/get-appointments-by-user-id");
    return response;
  };
  return useQuery({ queryKey: ["appointments"], queryFn: getAllAppointments });
};

const useSearchLawyers = (searchState, city) => {
  const createSearchRequest = async () => {
    const params = new URLSearchParams();
    params.set("searchQuery", searchState.searchQuery);
    const response = await api.get(
      `api/user/search/${city}?${params.toString()}`
    );
    if (!response) {
      throw new Error("Failed to get restaurant");
    }
    return response;
  };
  const { data: results, isLoading } = useQuery({
    queryKey: ["searchLawyers"],
    queryFn: createSearchRequest,
    enabled: !!city,
  });

  return {
    results,
    isLoading,
  };
};

export {
  useRegister,
  useLogin,
  useGetLawyerById,
  useCheck,
  useBookNow,
  useAllAppointments,
  useSearchLawyers,
};
