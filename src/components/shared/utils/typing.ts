// Utils by typing

// ReturnType<typeof slice.actions[keyof typeof slice.actions]>
export type ReturnSliceActionsType<T> = T[keyof T] extends (...args: any) => infer R ? R: any;
