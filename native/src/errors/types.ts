export type Error = {
  message: string;
};

// Actions
export type ReportedError = {
  // The unique identifier of the error
  identifier: string;

  // The error
  message: string;

  // The original action that triggered this error
  options?: ReportActionOptions;
}

export type ReportActionOptions = {
  triggerAction?: Action;
  channel?: string;
}

// State
export type ErrorModuleState = {
  reportedErrors: ReportedError[];
}

// Redux
export type Action = any & {
  type: string;
}