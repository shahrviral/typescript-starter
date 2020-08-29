function reflect(promise: Promise<any>) {
  return Promise.resolve(promise).then(
    (value) => ({
      isFulfilled: true,
      isRejected: false,
      value,
    }),
    (reason) => ({
      isFulfilled: false,
      isRejected: true,
      reason,
    })
  );
}

export function settle(iterable: Promise<any>[]) {
  return Promise.all(iterable.map(reflect));
}
