async function SignInPage({
  params,
}: {
  params: Promise<{ 'sign-in': string[] }>;
}) {
  const resolvedParams = await params;
  console.log(resolvedParams);
  // Log the second element of the array associated with the 'sign-in' key
  console.log(resolvedParams['sign-in'][1]);
  return <div>SignInPage : {resolvedParams['sign-in'][1]}</div>;
}

export default SignInPage;
