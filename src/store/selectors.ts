import { StoreType } from '../types/store';
import { Role } from '../const';
import { User } from '../types/user';
import { ErrorList } from '../utils/parse-error';
import { Notify } from '../types/notify';
import { Training } from '../types/training';
import { Review } from '../types/review';

export const getRole = (state: StoreType): Role => state.User.role;
export const getUser = (state: StoreType): User => state.User;
export const getUsersForCompany = (state: StoreType): User[] => state.UsersForCompany;
export const getError = (state: StoreType): ErrorList => state.Error;
export const getNotify = (state: StoreType): Notify[] => state.Notify;
export const getTrainingSpecial = (state: StoreType): Training[] => state.TrainingSpecial;
export const getTrainingPopular = (state: StoreType): Training[] => state.TrainingPopular;
export const getTrainingOffers = (state: StoreType): Training[] => state.TrainingOffers;
export const getTrainingFiltred = (state: StoreType): Training[] => state.TrainingFiltred;
export const getTraining = (state: StoreType): Training => state.Training;
export const getReviews = (state: StoreType): Review[] => state.Reviews;
