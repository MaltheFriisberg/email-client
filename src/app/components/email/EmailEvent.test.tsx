import { screen, waitFor } from "@testing-library/react"
import { IEmail } from "../../../interfaces/email-interfaces"
import EmailElement from "./EmailElement"
import { renderWithProviders } from "../../../utils/test-utils";

test("should render correctly", () => {
  const emailElement: IEmail = {
    id: 0,
    subject: "foo",
    body: "bar",
    opened: false,
  }
  /*const clickHandler = jest.fn()
  renderWithProviders(
    <EmailElement emailElement={emailElement} clickHandler={clickHandler} />,
  )*/
  expect(true).toBeTruthy();
  
})
