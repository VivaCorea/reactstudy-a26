import FormButton from "@/components/form-btn";
import FormInput from "@/components/form-input";
import SocialLogin from "@/components/social-login";

export default function Login() {
  const handleForm = async (formData: FormData) => {
    "use server";
    //console.log("run in server");
    //console.log(formData.get("email"), formData.get("password"));
  };

  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요~</h1>
        <h2 className="text-xl">Login with email and password</h2>
      </div>
      <form className="flex flex-col gap-3" action={handleForm}>
        <FormInput
          name="email"
          type="email"
          placeholder="Email"
          errors={[""]}
          required
        />
        <FormInput
          name="password"
          type="password"
          placeholder="Password"
          errors={[""]}
          required
        />
      </form>
      <FormButton text="Create Account" />
      <SocialLogin />
    </div>
  );
}
