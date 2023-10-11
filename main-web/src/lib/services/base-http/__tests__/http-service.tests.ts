import mockAxios from 'jest-mock-axios';
import { expect } from '@jest/globals';
import { AxiosError } from 'axios';
import { IHttpClient } from '@/lib/types';
import { HttpService } from '../http.service';

describe('HttpService', () => {
  let httpService: HttpService;

  beforeAll(() => {
    httpService = new HttpService(mockAxios as IHttpClient);
  });

  afterEach(() => {
    mockAxios.reset();
  });

  describe('get', () => {
    it('should make a GET request and return data on success', async () => {
      const responseData = {
        status: 200,
        data: 'Hello, World',
      };

      mockAxios.get.mockResolvedValue(responseData);

      const result = await httpService.get<string>('example-url');
      expect(result).toBe('Hello, World');
    });
    it('should handle errors', async () => {
      const error: AxiosError = new AxiosError();

      mockAxios.mockRejectedValue(error);

      try {
        await httpService.get<string>('example-url');
      } catch (err) {
        expect(err).toBe(error);
      }
    });
  });

  // TODO: (post, patch, put, delete).

  describe('post', () => {
    it('should make a POST request and return data on success', async () => {});
  });

  describe('patch', () => {
    it('should make a POST request and return data on success', async () => {});
  });

  describe('put', () => {
    it('should make a POST request and return data on success', async () => {});
  });

  describe('delete', () => {
    it('should make a POST request and return data on success', async () => {});
  });
});
