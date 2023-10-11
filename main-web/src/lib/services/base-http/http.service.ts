import { AxiosError } from 'axios';
import {
  IHttpClient,
  IHttpConfig,
  IResponse,
  IErrorResponse,
  IAxiosErrorResponeData,
  IAxiosErrorResponse,
} from '@/lib/types';
import axiosInstance from '../axios-instance';

export class HttpService implements IHttpClient {
  constructor(private fetchingService: IHttpClient, private baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL) {}

  public createQueryLink(base: string, args: Record<string, string>) {
    let url = `${base}?`;
    Object.keys(args).forEach((parameter, index) => {
      if (args[parameter]) {
        url += `${index > 0 ? '&' : ''}${parameter}=${args[parameter]}`;
      }
    });
    return url;
  }

  public async get<T>(url: string, config?: IHttpConfig<unknown>) {
    try {
      const result = await this.fetchingService.get<IResponse<T>>(this.getFullApiUrl(url), {
        ...config,
        headers: {
          ...config?.headers,
          ...this.populateContentTypeHeaderConfig(),
        },
      });

      this.checkResponseStatus(result);
      return result?.data;
    } catch (error) {
      this.errorHandler(error as AxiosError<IAxiosErrorResponse, IAxiosErrorResponeData>);
    }
  }

  public async post<T, D>(url: string, data: D, config?: IHttpConfig<D>) {
    try {
      const result = await this.fetchingService.post<IResponse<T>, D>(this.getFullApiUrl(url), data, {
        ...config,
        headers: {
          ...config?.headers,
          ...this.populateContentTypeHeaderConfig(),
        },
      });

      this.checkResponseStatus(result);
      return result?.data;
    } catch (error) {
      this.errorHandler(error as AxiosError<IAxiosErrorResponse, IAxiosErrorResponeData>);
    }
  }

  public async patch<T, D>(url: string, data: D, config?: IHttpConfig<D>) {
    try {
      const result = await this.fetchingService.patch<IResponse<T>, D>(this.getFullApiUrl(url), data, {
        ...config,
        headers: {
          ...config?.headers,
          ...this.populateContentTypeHeaderConfig(),
        },
      });

      this.checkResponseStatus(result);
      return result?.data;
    } catch (error) {
      this.errorHandler(error as AxiosError<IAxiosErrorResponse, IAxiosErrorResponeData>);
    }
  }

  public async put<T, D>(url: string, data: D, config?: IHttpConfig<D>) {
    try {
      const result = await this.fetchingService.put<IResponse<T>, D>(this.getFullApiUrl(url), data, {
        ...config,
        headers: {
          ...config?.headers,
          ...this.populateContentTypeHeaderConfig(),
        },
      });

      this.checkResponseStatus(result);
      return result?.data;
    } catch (error) {
      this.errorHandler(error as AxiosError<IAxiosErrorResponse, IAxiosErrorResponeData>);
    }
  }

  public async delete<T>(url: string, config?: IHttpConfig<unknown>) {
    try {
      const result = await this.fetchingService.delete<IResponse<T>>(this.getFullApiUrl(url), {
        ...config,
        headers: {
          ...config?.headers,
          ...this.populateContentTypeHeaderConfig(),
        },
      });

      this.checkResponseStatus(result);
      return result?.data;
    } catch (error) {
      this.errorHandler(error as AxiosError<IAxiosErrorResponse, IAxiosErrorResponeData>);
    }
  }

  private populateContentTypeHeaderConfig() {
    return {
      'Content-Type': 'application/json',
    };
  }

  private getFullApiUrl(url: string) {
    return `${this.baseUrl}/${url}`;
  }

  private async errorHandler(error: AxiosError<IAxiosErrorResponse, IAxiosErrorResponeData>) {
    const errorData: IErrorResponse = {
      statusCode: error.response?.status || 404,
      message: error.response?.data?.reason || 'Oops, something went wrong!',
    };

    const event = new CustomEvent('http-error', { detail: errorData });
    document.dispatchEvent(event);

    if (errorData.statusCode === 403) {
      // Todo: implements refresh token logic
    }

    throw error;
  }

  private checkResponseStatus<T>(result: IResponse<T> | void) {
    if (result && result.status >= 400 && result.status < 600) {
      const errorData = {
        response: {
          status: result.status,
          data: result.data,
        },
      };

      throw new Error(JSON.stringify(errorData));
    }
  }
}

export const httpService = new HttpService(axiosInstance as IHttpClient);
