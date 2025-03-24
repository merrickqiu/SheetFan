// pages/signin.tsx
import { GetServerSideProps } from 'next';
import { getProviders, signIn } from 'next-auth/react';

interface SignInProps {
  providers: Record<string, any>;
}

const SignIn: React.FC<SignInProps> = ({ providers }) => {
  return (
    <div>
      <h1>Sign In</h1>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders();
  return {
    props: { providers },
  };
};

export default SignIn;
