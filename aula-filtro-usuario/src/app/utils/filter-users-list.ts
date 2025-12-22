import { isWithinInterval } from "date-fns";
import { IUser } from "../interfaces/user/user.interface";
import { IFilterOptions } from "../interfaces/filter-options.interface";

const filterUsersListByName = (name: string | undefined, userList: IUser[]): IUser[] => {
    const NAME_NOT_TYPPED = name === undefined;

    if (NAME_NOT_TYPPED) {
        return userList;
    }

    const filteredList = userList.filter((user: IUser) => {
        return user.nome.toLowerCase().includes(name!.toLowerCase());
    });

    return filteredList;
}

const filterUsersListByStatus = (status: boolean | undefined, userList: IUser[]): IUser[] => {
    const STATUS_NOT_TYPPED = status === undefined;

    if (STATUS_NOT_TYPPED) {
        return userList;
    }
    const filteredList = userList.filter((user: IUser) => {
        return user.ativo === status;
    });

    return filteredList;
}

const filterUsersListByDateRange = (startDate: Date | undefined, endDate: Date | undefined, userList: IUser[]): IUser[] => {
    const DATE_RANGE_NOT_TYPPED = startDate === undefined || endDate === undefined || startDate === null || endDate === null;

    if (DATE_RANGE_NOT_TYPPED) {
        return userList;
    }

    const checkDateInterval = (user: IUser) => isWithinInterval(new Date(user.dataCadastro), {
        start: startDate,
        end: endDate
    });

    const listFiltered = userList.filter(checkDateInterval);

    return listFiltered;
}

const filterUsersList = (filterOptions: IFilterOptions, userList: IUser[]): IUser[] => {
    let filteredUsers = userList;

    filteredUsers = filterUsersListByName(filterOptions.name, userList);

    filteredUsers = filterUsersListByStatus(filterOptions.status, filteredUsers);

    filteredUsers = filterUsersListByDateRange(filterOptions.startDate, filterOptions.endDate, filteredUsers);

    return filteredUsers;
}

export { filterUsersList };