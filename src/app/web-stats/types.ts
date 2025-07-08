export interface IMixItemCollection {
    items: IMixItem[];
    total: number;
    whenRevalidated : string;
  }

export interface IMixItem {
    mixTitle: string;
    mixid: number;
    mixCount: number;
}

export interface IError {
  error: boolean;
}
