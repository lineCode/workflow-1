import execa from 'execa';

const timeout = n => new Promise(resolve => setTimeout(resolve, n));

export default async function open({ file, position }, context, children) {
  const { run } = context;

  await execa('atom', ['-n', file]);

  await timeout(1000);

  return run(position => {
    const Atom = Application('Atom');

    Atom.activate();
    Atom.windows[0].bounds = position;
  }, position);
}
