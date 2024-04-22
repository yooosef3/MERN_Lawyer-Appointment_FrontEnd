export type LawyerProps = {
  _id: string;
  userId: string;
  firstName: string;
  lastName: string;
  imageUrl: string | "";
  phoneNumber: number;
  website: string;
  address: string;
  city: string;
  specialization: string;
  skills: string[] | string ;
  experience: string;
  feePerConsultation: number;
  timings: string[];
  status: string;
  lastUpdated: string;
};

export interface UserProps {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  isLawyer: boolean;
  isAdmin: boolean;
  seenNotifications: NotificationProps[];
  unseenNotifications: NotificationProps[];
}

export type TitleProps = {
  title?: string;
  smaller?: boolean;
  className?: string;
};

export type NotificationProps = {
  data: any;
  _id?: string;
  message: string;
  createdAt: string;
  onClickPath: string;
};

export interface CommentCardProps {
  id?: number;
  name: string;
  text: string;
  image: any;
  time: string;
}

export interface ReviewProps {
  id: number;
  role: string;
  name: string;
  text: string;
  image: any;
}

export interface ReserveModalProps {
  lawyer: LawyerProps;
  isModalOpen: boolean;
  setIsModalOpen: any;
  check?: any;
  book?: any;
  setSelectedDay?: any;
  setTime?: any;
  checkPending?: boolean;
  bookPending?: boolean;
}

export interface RecentCardProps {
  id?: number;
  summary: string;
  image: any;
  time: string;
  comments?: CommentCardProps[] | undefined | any;
}

export interface LawyerCardProps {
  firstName: string;
  lastName: string;
  timings: string[];
  specialization: string;
  status: string;
  imageUrl: string;
  lawyer: LawyerProps;
  changeStatus: (lawyer: LawyerProps, status: string) => void;
}

export type UserCardProps = {
  name: string;
  email: string;
  isLawyer: boolean;
  isAdmin: boolean;
};

export type FormValues = {
  firstName: string;
  lastName: string;
  website?: string;
  phoneNumber: string;
  address: string;
  specialization: string;
  experience: number;
  feePerConsultation: number;
  timings: any;
};

export type LawyerFormProps = {
  onFinish: (values: FormValues) => void;
  initialValues?: LawyerProps;
  setSelectedSkills?: any;
  selectedSkills?: any;
};

export type BlogCardProps = {
  summary: string;
  id: number;
  title?: string;
  image: any;
  time: string;
  comments: CommentCardProps[];
};

export type ContactsProps = {
  id: number;
  title: string;
  info: string;
  icon: any;
};

export type CoverProps = {
  name?: string;
  info?: string;
  image: any;
  id: number;
  title?: string;
  text?: string;
};

export interface AppointmentProps {
  _id?: string;
  userId: string;
  lawyerId: string;
  lawyerInfo: LawyerProps;
  userInfo: { user: UserProps };
  selectedDay: string;
  time: string;
  status: string;
}

export interface SearchBarProps {
  placeholder: string;
  onSubmit?: (e: any) => void;
  searched?: string;
  setSearched?: any;
  onReset?: any;
  onLandingReset?: any;
  searchState?: any;
  setSearchQuery?: any;
  search?: boolean;
}

export type SearchState = {
  searchQuery: string;
  page: number;
  selectedSkills: string[] | string;
  sortOption: string;
};

export interface SearchProps {
  searchResults: any;
  city?: any;
  setSearchQuery: any;
  resetSearch: any;
  searchState: SearchState;
  setSearchState: any;
  setSelectedSkills: any;
}

export type FiltersProps = {
  selectedSkills?: string[] | string;
  onChange: any;
};

export type PaginationProps = {
  handlePageChange: any;
  currentPage: number;
  pageNumbers: number[];
  totalPages: number;
};

export interface ResultsProps {
  results: LawyerProps[];
  city: string;
  setSortOption: any;
}
