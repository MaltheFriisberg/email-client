import { Flex, Text, Button } from "@radix-ui/themes"
import { markAsRead, selectEmails } from "../../features/email/emailSlice"
import EmailList from "../components/email/EmailList"
import { useAppDispatch, useAppSelector } from "../hooks"
/**
 * The page should structure the layout and pass down the props
 *
 */
const Inbox = () => {
  const dispatch = useAppDispatch()
  const emailList = useAppSelector(selectEmails)
  return (
    <EmailList
      emailList={emailList}
      clickHandler={(id: number) => dispatch(markAsRead(id))}
    />
  )
}

export default Inbox
