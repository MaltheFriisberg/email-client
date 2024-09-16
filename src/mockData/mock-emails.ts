import { IEmail } from "../interfaces/email-interfaces"

export const mockEmailList: IEmail[] = [
  { id: 0, subject: "subject1", body: "body1", opened: false },
  { id: 1, subject: "subject2", body: "body2", opened: false },
  { id: 2, subject: "subject3", body: "body3", opened: true },
  { id: 3, subject: "subject4", body: "body4", opened: false },
]
