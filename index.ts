type Email = `${string}@${string}.${string}`;

const maybeEmail: string = 'a@b.c';

const isEmail = (maybeEmail: string): maybeEmail is Email => {
  return /^[a-zA-Z!#$%&'*+-/=?^_`{|}~.,]+@(([a-zA-Z0-9-]+)|([a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+))$/.test(
    maybeEmail,
  );
};

if (isEmail(maybeEmail)) {
  const email: Email = maybeEmail;

  console.log(email);
}
