export interface TableAction {
    icon?: string;
    colorClass?: string;
    label?: string;
    action?: any;
}
  
export interface HeaderObject {
    prop?: string;
    label?: string;
    sortable?: { sort?: boolean, asc?: boolean };
}