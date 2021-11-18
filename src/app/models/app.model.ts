import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MAX_NUMBER } from "../app.const";

export interface TabLink {
  id: string;
  name: string;
  routerLink: string;
}
export enum Status {
  Success = 'Success',
  Error = 'Error',
}

export interface BaseAPIResponse {
  status: Status;
  data?: any;
  error?: string;
}

export const isSuccess = (status: Status) => status === Status.Success;
export const isError = (status: Status) => status === Status.Error;

export const movieFormBuilder = (): FormGroup  => {
  return new FormGroup({
    id: new FormControl(Math.floor(Math.random() * MAX_NUMBER)),
    movieName: new FormControl(null, Validators.required),
    director: new FormControl(null, Validators.required),
    producer: new FormControl(null, Validators.required),
    created: new FormControl(new Date),
    edited: new FormControl(new Date)
  });
}