declare module 'global-types' {
  export type Nullable<T> = null | T;

  export type HttpResponse<T> = T | undefined | void;
}
