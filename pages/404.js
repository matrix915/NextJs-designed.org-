import { useEffect } from "react"
import { useRouter } from "next/router"

export default function Custom404({routeedd}) {
  const router = useRouter()

  useEffect(() => {
    router.replace("/")
  }, [])

  return null
}