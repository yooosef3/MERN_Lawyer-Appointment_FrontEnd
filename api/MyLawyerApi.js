import { useMutation, useQuery } from "@tanstack/react-query";

import api from "@/configs/api";

const useLawyerAppointments = () => {
  const getLawyerAppointments = async () => {
    const response = await api.get("api/lawyer/get-appointments-by-lawyer-id");
    return response;
  };
  return useQuery({
    queryKey: ["lawyer_appointments"],
    queryFn: getLawyerAppointments,
  });
};

const useChangeClientStatus = () => {
  const changeStatus = async (data) => {
    const response = await api.post("api/lawyer/change-client-appointment-status", {
      appointmentId: data.appointmentId,
      status: data.status,
    });
    return response;
  };
  return useMutation({ mutationFn: changeStatus });
};

export { useLawyerAppointments, useChangeClientStatus };
