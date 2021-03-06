import { UserReducers } from "./user.reducer";
import { ResetStateReducers } from "./resetstate.reducer";
import { LoadingReducers } from "./loading.reducer";
import { CardReducers } from "./card.reducer";
import { ToastReducers } from "./toast.reducer";
import { CompanyReducers } from "./company.reducer";
import { EmployeeReducers } from "./employee.reducer";
import { ModalReducers } from "./modal.reducer";
import { MerchantReducers } from "./merchant.reducer";


export const rootReducers = [
  UserReducers,
  ResetStateReducers,
  LoadingReducers,
  CardReducers,
  ToastReducers,
  CompanyReducers,
  EmployeeReducers,
  ModalReducers,
  MerchantReducers
];
