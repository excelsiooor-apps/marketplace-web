import { IHttpClient, IHttpConfig } from '@/lib/types';
import { HttpService } from './http.service';
import axiosInstance from '../axios-instance';

export class AuthorizationHttpService implements IHttpClient {
  constructor(private httpService: HttpService) {}

  public createQueryLink(base: string, parameters: Record<string, string>) {
    return this.httpService.createQueryLink(base, parameters);
  }

  public get<R>(url: string, config: IHttpConfig<unknown> = {}): Promise<R | void> {
    return this.httpService.get<R>(url, this.attachAuthHeader(config));
  }

  public post<R, D>(url: string, data: D, config: IHttpConfig<D> = {}): Promise<R | void> {
    return this.httpService.post<R, D>(url, data, this.attachAuthHeader(config));
  }

  public patch<R, D>(url: string, data: D, config: IHttpConfig<D> = {}): Promise<R | void> {
    return this.httpService.patch<R, D>(url, data, this.attachAuthHeader(config));
  }

  public put<R, D>(url: string, data: D, config: IHttpConfig<D> = {}): Promise<R | void> {
    return this.httpService.put<R, D>(url, data, this.attachAuthHeader(config));
  }

  public delete<R>(url: string, config: IHttpConfig<unknown> = {}): Promise<R | void> {
    return this.httpService.delete<R>(url, this.attachAuthHeader(config));
  }

  private attachAuthHeader<D>(config: IHttpConfig<D>): IHttpConfig<D> {
    return {
      ...config,
      headers: { ...config.headers, ...this.populateTokenToHeaderConfig() },
    };
  }

  private populateTokenToHeaderConfig(): object {
    // TODO: get tocken
    return {
      // TODO:Authorization: `Bearer ${token}`,
    };
  }
}

export const authHttpService = new AuthorizationHttpService(new HttpService(axiosInstance as IHttpClient));
