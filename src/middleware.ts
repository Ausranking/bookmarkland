import { NextResponse } from "next/server";

export default function middleware(response) {
//   const allCookies = response.cookies.set({
//     name: "allCookies",
//     value: JSON.stringify(response.cookies),
//     options: {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === "production",
//     }, })
//  console.log(allCookies)
}
 export const config = {
    matcher: '/api/auth/signin:path*'
 }