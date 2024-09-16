import { createAppSlice } from "../../app/createAppSlice"
import type { PayloadAction } from "@reduxjs/toolkit"
import { IEmail } from "../../interfaces/email-interfaces"
import { mockEmailList } from "../../mockData/mock-emails"

interface EmailSliceState {
  emailList: IEmail[]
}

const initialState: EmailSliceState = {
  emailList: mockEmailList,
}

export const emailSlice = createAppSlice({
  name: "email",
  initialState,
  reducers: (create: any) => ({
    markAsRead: create.reducer(
      (state: EmailSliceState, action: PayloadAction<number>) => {
        state.emailList = state.emailList.map((v: IEmail) => {
          if (v.id === action.payload) {
            v.opened = true
          }
          return v
        })
      },
    ),
  }),
  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    selectEmails: (email: EmailSliceState) => email.emailList,
  },
})

// Action creators are generated for each case reducer function.
export const { markAsRead } = emailSlice.actions

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectEmails } = emailSlice.selectors
