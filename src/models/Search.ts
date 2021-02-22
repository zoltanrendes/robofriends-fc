import { IResponse } from './Response';

export interface ISearch {
    searchField: string;
    isPending: boolean;
    robots: Array<IResponse>;
}
