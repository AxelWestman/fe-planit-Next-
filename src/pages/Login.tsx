import FormLogin from "../components/FormLogin";

type Props = {}

function Login({}: Props) {
  return (
    <>
          <main className="relative w-full min-h-screen flex flex-col items-center justify-center bg-[url('/playa.jpg')] bg-cover bg-no-repeat bg-center md:bg-[url('/playaPc.jpg')] ">
              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
              <div className="relative z-10">
                  <FormLogin />
              </div>
          </main>
    </>
  )
}

export default Login