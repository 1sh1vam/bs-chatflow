export type SaveStatusT<T = string> = { status: 'success', data: T } | { status: 'error', message: string }

