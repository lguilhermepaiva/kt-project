export enum ApplicationErrorEnum {
  NotFound = 'NotFound',
  RequiredField = 'RequiredField',
  InvalidField = 'InvalidField',
  FieldTypeIncompatible = 'FieldTypeIncompatible',
  AlreadyExists = 'AlreadyExists',
  InfrastructureError = 'InfrastructureError',
  NotImplemented = 'NotImplemented',
  Forbidden = 'Forbidden',
  InvalidRequirement = 'InvalidRequirement',
}

export class ApplicationException extends Error {
  genericTypeError: ApplicationErrorEnum;

  private constructor(message: string, typeError: ApplicationErrorEnum) {
    super(message);
    this.genericTypeError = typeError;
  }

  static with(
    message: string,
    typeError: ApplicationErrorEnum = ApplicationErrorEnum.InvalidField,
  ): ApplicationException {
    return new ApplicationException(message, typeError);
  }
}
