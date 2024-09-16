import { Card, Flex, Avatar, Box } from "@radix-ui/themes"
import { IEmail } from "../../../interfaces/email-interfaces"

interface IProps {
  emailElement: IEmail
  clickHandler: Function
}

const EmailElement = ({ emailElement, clickHandler }: IProps) => {
  const handleClick = () => clickHandler(emailElement.id)
  return (
    <Card size="1" onClick={handleClick}>
      {!emailElement.opened ? (
        <b>{emailElement.subject}</b>
      ) : (
        emailElement.subject
      )}
    </Card>
  )
}

export default EmailElement
