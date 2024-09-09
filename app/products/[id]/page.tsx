"use client"
import { useParams } from 'next/navigation'
 
export default function Page() {
  const router = useParams()

 
  return (
    <>
    pid: {router.id}
    </>
  )
}