import { AuthContextProvider } from "./_utils/auth-context";

export default function Week9Layout({ children }) {
  return <AuthContextProvider>{children}</AuthContextProvider>;
}
