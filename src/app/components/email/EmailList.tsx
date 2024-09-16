import { Flex, Text, Button } from "@radix-ui/themes"
import { ReactNode } from "react"
import { IEmail } from "../../../interfaces/email-interfaces"
import EmailElement from "./EmailElement"

interface IProps {
  emailList: IEmail[]
  clickHandler: Function
}

const EmailList = ({ emailList, clickHandler }: IProps) => {
  return (
    <Flex direction="column">
      {emailList.map((email: IEmail) => {
        return (
          <EmailElement
            key={email.id}
            emailElement={email}
            clickHandler={(id: number) => clickHandler(id)}
          />
        )
      })}
    </Flex>
  )
}

export default EmailList
