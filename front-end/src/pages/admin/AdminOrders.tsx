import AdminSideBar from "../../components/admin/AdminSideBar";
import { useSelector } from "react-redux";
import { IRootState } from "../../redux/store";
import AdminOrdersRight from "../../components/admin/adminOrders/AdminOrdersRight";

export default function AdminOrders() {
  const { user } = useSelector((state: IRootState) => state.auth);
  return (
    <div className="flex min-h-screen">
      <AdminSideBar />
      <AdminOrdersRight />
    </div>
  );
}

{
  /* <a href="https://aadl3inscription2024.dz" target="_blank">here adl</a> */
}
